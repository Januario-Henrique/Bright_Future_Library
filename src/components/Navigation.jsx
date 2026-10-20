import React, { useState } from "react";
import "../styles/Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Featured Books", href: "#books" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

