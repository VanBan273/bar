// src/Menu.js
import React from "react";

const Menu = () => {
  // Crear un array de 30 elementos para simular los ítems del menú
  const menuItems = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Plato ${index + 1}`,
    price: Math.floor(Math.random() * 20) + 5, // Precio aleatorio entre 5 y 25
  }));

  return (
    <ul className="menu-list">
      {menuItems.map((item) => (
        <li key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
