// src/Modal.js
import React, { useState } from "react";

const Modal = ({ onClose, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleModalClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`modal-overlay ${expanded ? "expanded" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${expanded ? "expanded" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
