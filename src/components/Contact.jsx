import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>📍 Address:</strong> 123 Knowledge Street, Bright City</p>
          <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>✉️ Email:</strong> info@brightfuturelibrary.org</p>
          <p><strong>🕒 Hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;