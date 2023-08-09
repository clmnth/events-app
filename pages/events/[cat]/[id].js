import SingleEvent from "@/src/components/events/single-event";

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = Array.from(data);

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: { data: eventData },
  };
}

const EventPage = ({ data }) => <SingleEvent data={data}/>;

export default EventPage;
