import React from "react";
import "../styles/Events.css";

function Events() {
  const events = [
    {
      date: "15 March 2025",
      title: "Children's Storytelling Hour",
      description: "Interactive storytelling session for children aged 4–10.",
    },
    {
      date: "22 March 2025",
      title: "Digital Literacy Workshop",
      description: "Learn essential computer and internet skills for everyday use.",
    },
    {
      date: "5 April 2025",
      title: "Book Club Meeting",
      description: "Join us to discuss this month's featured novel and share your thoughts.",
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