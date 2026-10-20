import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  // 1. Estado para armazenar os valores dos inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // 2. Estado para armazenar as mensagens de erro
  const [errors, setErrors] = useState({});

  // 3. Estado para feedback de submissão (sucesso)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para atualizar os inputs e limpar erros ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Se o utilizador começar a corrigir um campo, removemos o erro dele
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    // Esconde a mensagem de sucesso se o utilizador voltar a mexer no form
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  // Função de validação
  const validateForm = () => {
    let newErrors = {};

    // Validação do Nome Completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    // Validação do Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email format (e.g., name@domain.com).";
    }

    // Validação da Mensagem
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    const validationErrors = validateForm();

    // Se houver erros, atualiza o estado e bloqueia a submissão
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false); // Garante que o sucesso não aparece
    } else {
      // Se passar na validação, exibe sucesso e limpa o form
      setErrors({});
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" }); // Limpa os campos
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      
      <div className="contact-container">
        {/* Informações da Biblioteca */}
        <div className="contact-info">
          <h3>Library Information</h3>
          <p><strong>📍 Address:</strong><br />123 Knowledge Street, Bright City</p>
          <p><strong>📞 Telephone:</strong><br />+1 (555) 123-4567</p>
          <p><strong>✉️ Email:</strong><br />info@brightfuturelibrary.org</p>
          <p><strong>🕒 Hours:</strong><br />Mon–Sat, 9:00 AM – 7:00 PM</p>
        </div>

        {/* Formulário de Contacto */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          
          {/* Campo: Nome Completo */}
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

          {/* Campo: Email */}
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

          {/* Campo: Mensagem */}
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
          
          {/* Mensagem de Sucesso */}
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