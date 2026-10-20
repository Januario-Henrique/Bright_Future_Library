import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // 1. Validação do Nome Completo (Apenas letras e espaços)
    // A Regex /^[a-zA-ZÀ-ÿ\s]+$/ permite letras maiúsculas, minúsculas, com acentos e espaços.
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full name can only contain letters and spaces (no numbers or symbols).";
    }

    // 2. Validação do Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email format (e.g., name@domain.com).";
    }

    // 3. Validação da Mensagem (Bloquear scripts)
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.includes("<") || formData.message.includes(">")) {
      // Se a mensagem contiver "<" ou ">", assume-se que é uma tentativa de script/HTML
      newErrors.message = "Invalid characters detected. HTML tags and scripts are not allowed.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false); 
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" }); 
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Library Information</h3>
          <p><strong>📍 Address:</strong><br />123 Knowledge Street, Bright City</p>
          <p><strong>📞 Telephone:</strong><br />+1 (555) 123-4567</p>
          <p><strong>✉️ Email:</strong><br />info@brightfuturelibrary.org</p>
          <p><strong>🕒 Hours:</strong><br />Mon–Sat, 9:00 AM – 7:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit">Send Message</button>
          
          {isSubmitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been validated and sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;