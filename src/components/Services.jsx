import React from "react";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      icon: "📖",
      title: "Book Borrowing & Returning",
      description:
        "Borrow from our extensive collection of fiction, non-fiction, and academic books. Easy returns and renewals for your convenience.",
    },
    {
      icon: "💻",
      title: "Internet & Computer Access",
      description:
        "Free access to computers and high-speed internet for research, study, job applications, and personal projects.",
    },
    {
      icon: "📚",
      title: "Reading & Study Spaces",
      description:
        "Quiet, comfortable reading areas and dedicated study zones perfect for individuals and group work.",
    },
    {
      icon: "🎓",
      title: "Educational Workshops & Literacy Programs",
      description:
        "Regular workshops on digital literacy, reading skills, and educational programs for children and adults.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Library Services</h2>
      <p className="services-intro">
        Discover the wide range of services we offer to support your learning 
        and personal growth.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;