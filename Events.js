import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const dummyEvents = [
  {
    name: "Tech Conference 2026",
    date: "March 15, 2026",
    time: "10:00 AM",
    location: "Karachi Expo Center",
    description: "AI, Web, and Cloud technology conference."
  },
  {
    name: "JavaScript Workshop",
    date: "April 2, 2026",
    time: "2:00 PM",
    location: "Lahore IT Hub",
    description: "Hands-on JS workshop."
  }
];

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => setEvents(dummyEvents), 500);
  }, []);

  return (
    <div className="container my-5 pt-5">
      <h2 className="fw-bold mb-4">Featured Events</h2>

      <div className="row">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
