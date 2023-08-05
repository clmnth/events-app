import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
    // With fallback: false, Next.js will pre-render only the paths
    // that was explicitly specified in the allPaths array.
  };
}

export async function getStaticProps(context) {
  console.log("context", context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  console.log("data", data);
  return { props: { data: data, pageName: id } };
}
// The context object in the getStaticProps function contains various
// properties related to the current request. One of these properties
// is params, which holds the dynamic route parameters extracted from the URL.

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1> Events in {pageName} </h1>
      <div>
      {data.map((ev) => (
        <Link
          key={ev.id}
          href={`/events/${ev.city}/${ev.id}`}
          passHref
          legacyBehavior
        >
          <a>
            <Image
              src={ev.image}
              alt={ev.image}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "300px", height: "auto" }}
            />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default EventsCatPage;
