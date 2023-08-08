import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventsListPage = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior passHref>
          <a className="card">
            <Image
              src={ev.image}
              alt={ev.image}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "400px", height: "400px" }}
            />
            <h2>{ev.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default EventsListPage;
