// src/Comidas.js
import React from "react";
import "./Comidas.css"; // Asegúrate de tener el archivo Modal.css importado

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <h2>Modificar Plato</h2>
        {/* Agrega los campos o controles para modificar el plato */}
        <label htmlFor="newPrice">Nuevo Precio:</label>
        <input type="number" id="newPrice" />
        {/* Agrega más campos según sea necesario */}
        <button onClick={onClose}>Guardar cambios</button>
      </div>
    </div>
  );
};

export default Modal;
