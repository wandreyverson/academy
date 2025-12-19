import "./navBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const logo = "/src/assets/link.svg";
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>
        </div>

        {/* Botão Burger */}
        <div 
          className={`burger ${open ? "active" : ""}`} 
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`navbar-menu ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </nav>

      </div>
    </header>
  );
}
