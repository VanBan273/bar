import React, { useState } from "react";
import serranitoImagen from "./imagenes/serranitoImagen.jpg";
import flamenquinImagen from "./imagenes/flamenquin.jpg";
import gazpachoImagen from "./imagenes/gazpacho.jpg";
import Modal from "./Modal";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Serranito",
      price: 4.5,
      imageUrl: serranitoImagen,
      description: "Pollo, pimiento, tomate y tortilla",
    },
    {
      id: 2,
      name: "Flamenquín",
      price: 7.5,
      imageUrl: flamenquinImagen,
      description: "Filete de ternera envuelto en jamón serrano y rebozado.",
    },
    {
      id: 3,
      name: "Gazpacho",
      price: 6.25,
      imageUrl: gazpachoImagen,
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
      name: "Salmorejo",
      price: 5.99,
      imageUrl: "https://via.placeholder.com/150",
      description: "Crema fría de tomate, pan, aceite, ajo y sal.",
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

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  // En el componente Menu.js
  return (
    <div className="menu-list">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          onClick={() => handleItemClick(item)}
        >
          <h3>{item.name}</h3>
          <img src={item.imageUrl} alt={item.name} />
          <p>{`Precio: ${item.price} €`}</p>
          <p>{item.description}</p>
        </div>
      ))}

      {selectedItem && (
        <Modal onClose={handleCloseModal}>
          <h3>{selectedItem.name}</h3>
          <img src={selectedItem.imageUrl} alt={selectedItem.name} />
          <p>{`Precio: ${selectedItem.price} €`}</p>
          <p>{selectedItem.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Menu;
