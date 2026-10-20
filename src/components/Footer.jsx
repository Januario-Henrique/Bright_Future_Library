import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bright Future Library. All rights reserved.</p>
      <p>Building a brighter future, one book at a time. 📚</p>
    </footer>
  );
}

export default Footer;