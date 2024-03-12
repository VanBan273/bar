// src/Menu.js
import React, { useState } from "react";
import Modal from "./Modal"; // Asegúrate de tener el componente Modal importado

const Menu = () => {
  const [menuItems, setMenuItems] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Plato ${index + 1}`,
      price: Math.floor(Math.random() * 20) + 5,
      description: "Descripción del plato",
      imageUrl: `url_de_tu_imagen_${index + 1}`, // Agrega una URL de imagen para cada plato
    }))
  );

  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <button onClick={() => handleOpenModal(item)}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <img src={item.imageUrl} alt={item.name} />
            </button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <Modal onClose={handleCloseModal}>
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.imageUrl} alt={selectedItem.name} />
          <p>{selectedItem.description}</p>
          <p>Precio: ${selectedItem.price.toFixed(2)}</p>
          <button onClick={handleCloseModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default Menu;
