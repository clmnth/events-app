import EventsListPage from "@/src/components/events/events-page";

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
  return <EventsListPage data={data} />;
};

export default EventsPage;
