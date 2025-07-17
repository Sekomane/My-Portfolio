import React from 'react';
import '../styles/Contact.css';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="gradient-title">Contact Me</h2>
      <p className="contact-subtitle">Let’s connect and build something great together!</p>
      <div className="contact-grid">
        <a href="tel:+27639457648" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaPhone className="contact-icon" />
          <span>Call: 063 945 7648</span>
        </a>

        <a href="https://wa.me/27639457648" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon" />
          <span>WhatsApp</span>
        </a>

        <a href="mailto:sekomanerorisang904@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a href="https://github.com/Sekomane" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/rorisang-sekomane-413420268/" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a href="https://web.facebook.com/yeayea.rorisang" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaFacebookMessenger className="contact-icon" />
          <span>Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
