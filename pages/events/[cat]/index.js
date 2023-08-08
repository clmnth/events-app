import CatEvent from "@/src/components/events/catEvent";

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
  return <CatEvent data={data} pageName={pageName}/>
};

export default EventsCatPage;
