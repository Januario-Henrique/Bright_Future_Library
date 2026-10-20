import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          Bright Future Library has been serving our community for over 
          a decade, dedicated to promoting literacy, education, and access 
          to information for all. Our team is passionate about creating an 
          inclusive environment where everyone feels welcome.
        </p>
        <p>
          We work closely with local schools, community organizations, and 
          volunteers to offer programs and services that meet the needs of 
          our diverse community.
        </p>
      </div>
    </section>
  );
}

export default About;