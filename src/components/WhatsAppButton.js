import React from "react";
import "./styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491124035535" 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
