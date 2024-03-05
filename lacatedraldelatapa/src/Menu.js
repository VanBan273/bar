// src/Menu.js
import React, { useState, useEffect } from "react";
import PlatoImage from "./PlatoImage"; // Asegúrate de tener el componente PlatoImage importado

const Menu = () => {
  const [menuItems, setMenuItems] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Plato ${index + 1}`,
      price: Math.floor(Math.random() * 20) + 5,
      imageUrl: `url_de_tu_imagen_${index + 1}`, // Agrega una URL de imagen para cada plato
    }))
  );

  // Modifica manualmente el primer plato (Plato 1)
  useEffect(() => {
    setMenuItems((prevItems) => [
      {
        ...prevItems[0],
        name: "Serranito",
        price: 4.5,
      },
      ...prevItems.slice(1),
    ]);
  }, []);

  // Función para editar manualmente el segundo plato (Plato 2)
  const editPlato2 = () => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === 2
          ? { ...item, name: "Especial", price: 4 } // Cambia el nombre y precio según tus necesidades
          : item
      )
    );
  };

  // Llama a la función para editar manualmente el segundo plato (Plato 2)
  useEffect(() => {
    editPlato2();
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setEditedName(item.name);
    setEditedPrice(item.price.toString()); // Asegurémonos de convertir el precio a cadena
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSaveChanges = () => {
    // Guarda los cambios en el plato seleccionado
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedItem.id
          ? { ...item, name: editedName, price: parseFloat(editedPrice) }
          : item
      )
    );
    handleCloseModal();
  };

  return (
    <div>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="menu-item"
            onClick={() => handleOpenModal(item)}
          >
            <h3>{item.name}</h3>
            <p>{item.price.toFixed(2)}€</p>
            {/* Puedes agregar más detalles sobre el plato según tus necesidades */}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="plato-edit-modal">
          <h2>Editar Plato: {selectedItem.name}</h2>
          <label>Nombre:</label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <label>Precio:</label>
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
          <button onClick={handleSaveChanges}>Guardar cambios</button>
          <PlatoImage
            imageUrl={selectedItem.imageUrl}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
