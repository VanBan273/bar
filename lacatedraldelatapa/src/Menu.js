import React, { useState } from "react";
import serranitoImagen from "./imagenes/serranitoImagen.jpg";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Salmorejo",
      price: 5.99,
      imageUrl: "https://via.placeholder.com/150",
      description: "Crema fría de tomate, pan, aceite, ajo y sal.",
    },
    {
      id: 2,
      name: "Flamenquín",
      price: 7.5,
      imageUrl: "https://via.placeholder.com/150",
      description: "Filete de ternera envuelto en jamón serrano y rebozado.",
    },
    {
      id: 3,
      name: "Gazpacho",
      price: 6.25,
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Sopa fría a base de tomate, pepino, pimiento, cebolla, ajo y pan.",
    },
    {
      id: 4,
      name: "Espinacas con Garbanzos",
      price: 8.75,
      imageUrl: "https://via.placeholder.com/150",
      description: "Espinacas salteadas con garbanzos, ajo y especias.",
    },
    {
      id: 5,
      name: "Solomillo al Whisky",
      price: 12.99,
      imageUrl: "https://via.placeholder.com/150",
      description: "Solomillo de cerdo con salsa de whisky, ajo y pimienta.",
    },
    {
      id: 6,
      name: "Pavía de Bacalao",
      price: 9.5,
      imageUrl: "https://via.placeholder.com/150",
      description: "Bacalao rebozado y frito, acompañado de pimientos verdes.",
    },

    {
      id: 7,
      name: "Serranito",
      price: 4.5,
      imageUrl: serranitoImagen,
      description: "Pollo, pimiento, tomate y tortilla",
    },

    // Agrega más platos según sea necesario
    // ...
    {
      id: 30,
      name: "Espárragos con salsa romesco",
      price: 8.99,
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Espárragos cocidos con una salsa de tomate, ajo, ñoras y almendras.",
    },
  ]);
  // En el componente Menu.js
  return (
    <div className="menu-list">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          {/* Renderiza la información del plato, como el nombre, la imagen, el precio, etc. */}
          <h3>{item.name}</h3>
          <img src={item.imageUrl} alt={item.name} />
          <p>{`Precio: ${item.price} €`}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
