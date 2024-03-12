// src/App.js
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "./App.css";
import { CustomMap } from "./CustomMap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "./App.css";

const Contacto = () => (
  <div className="contacto">
    <h2>Contacto</h2>
    <p>Teléfono: 954 09 69 67</p>
  </div>
);

const Direccion = () => (
  <div className="direccion">
    <h2>Dirección</h2>
    <p>C. Avenida de la Paz Nº18, 41013 Sevilla</p>
  </div>
);

const Footer = ({ visible }) => (
  <footer className={`footer ${visible ? "visible" : ""}`}>
    <Contacto />
    <Direccion />
    <div className="map-container">
      <LoadScript googleMapsApiKey="TU_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "200px" }}
          zoom={15}
          center={{ lat: 37.3828, lng: -5.9825 }}
        >
          <Marker position={{ lat: 37.3828, lng: -5.9825 }} />
        </GoogleMap>
      </LoadScript>
    </div>
  </footer>
);

const FotoLocal = () => <div className="foto-local"></div>;

const Logo = () => (
  <div className="logo-container">
    <img className="logo" src="/logo.jpg" alt="La Catedral de la Tapa" />
  </div>
);

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isFooterVisible =
        window.scrollY + window.innerHeight >= document.body.offsetHeight;
      setShowFooter(isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <Logo />
      </header>
      <main className="main-content">
        <FotoLocal />
        <Menu />
      </main>
      <Footer visible={showFooter} />
    </div>
  );
}

export default App;
