// src/PlatoImage.js
import React from "react";

const PlatoImage = ({ imageUrl, onClose }) => {
  return (
    <div className="plato-image-modal">
      <img src={imageUrl} alt="Foto del plato" />
      <button onClick={onClose}>Cerrar Foto</button>
    </div>
  );
};

export default PlatoImage;
