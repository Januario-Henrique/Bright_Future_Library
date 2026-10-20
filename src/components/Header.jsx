
import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <div>
            <h1>Bright Future Library</h1>
            <p className="mission">
              Our Mission: Empowering our community through knowledge, 
              literacy, and lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;