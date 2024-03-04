// src/App.js
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
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

const Footer = () => (
  <footer className="footer">
    <Contacto />
    <Direccion />
    <img className="fotobar" src="/fotobar.jpg" alt="Foto del local" />
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
    <div className="App">
      <header className="header">
        <Logo />
      </header>
      <main>
        <FotoLocal />
        <Menu />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
