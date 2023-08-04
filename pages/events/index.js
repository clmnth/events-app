import Image from "next/image";

export async function getStaticProps() {
  try {
    const { events_categories } = await import("/data/data.json");

    return {
      props: {
        data: events_categories,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {data?.map((ev) => (
          // eslint-disable-next-line react/jsx-key
          <a href={`/events/${ev.id}`}>
            <Image
              src={ev.image}
              alt={ev.image}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "300px", height: "auto" }}
            />
            <h2>{ev.title}</h2>
          </a>
        ))}
        
      </div>
    </div>
  );
};

export default EventsPage;
