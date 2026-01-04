import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";

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
  },
  {
    name: "Startup Networking Night",
    date: "April 10, 2026",
    time: "6:00 PM",
    location: "Islamabad",
    description: "Meet founders & investors."
  },
  {
    name: "UI/UX Design Bootcamp",
    date: "May 1, 2026",
    time: "9:00 AM",
    location: "Online",
    description: "Learn UI/UX with real projects."
  }
];

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // simulate API fetch
    setTimeout(() => setEvents(dummyEvents), 500);
  }, []);

  const filteredEvents = events.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="bg-primary text-white text-center py-5 mt-5">
        <h1 className="fw-bold">Discover Events Near You</h1>
        <p className="lead">
          Find conferences, workshops, and meetups
        </p>
      </div>

      {/* EVENTS */}
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
          <h2 className="fw-bold">Featured Events</h2>
          <input
            className="form-control w-100 w-md-25 mt-3 mt-md-0"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredEvents.length === 0 && (
            <p className="text-muted">No events found</p>
          )}

          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-light text-center py-3">
        <p className="mb-0">© 2026 EventFinder</p>
      </footer>
    </>
  );
}

export default App;
