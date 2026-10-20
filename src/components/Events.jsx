import React from "react";
import "../styles/Events.css";

function Events() {
  const events = [
    {
      date: "31 October 2026",
      title: "Children's Storytelling Hour",
      description: "Interactive storytelling session for children aged 4–10.",
    },
    {
      date: "5 November 2026",
      title: "Literacy Workshop",
      description: "Reading Competition.",
    },
    {
      date: "23 December 2026",
      title: "Book Club Meeting",
      description: "a community literacy workshop",
    },
  ];

  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <span className="event-date">{event.date}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;