import React from "react";

function EventCard({ event }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold">{event.name}</h5>

          <p className="mb-1">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="mb-1">
            <strong>Time:</strong> {event.time}
          </p>
          <p className="mb-1">
            <strong>Location:</strong> {event.location}
          </p>

          <p className="card-text mt-2">{event.description}</p>

          <button className="btn btn-primary w-100 mt-3">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
