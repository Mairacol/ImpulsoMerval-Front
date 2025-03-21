import React from "react";
import "./styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/549XXXXXXXXX" // Reemplaza con tu número de WhatsApp
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
