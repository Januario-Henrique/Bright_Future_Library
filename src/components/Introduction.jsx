import React from "react";
import "../styles/Introduction.css";

function Introduction() {
  return (
    <section id="home" className="introduction">
      <div className="intro-container">
        <h2>Welcome to Bright Future Library</h2>
        <p>
          Welcome to <strong>Bright Future Library</strong>, a place where 
          curiosity meets knowledge and where every visitor is part of our 
          growing community. Our library is more than just a collection of 
          books — it is a hub for learning, connection, and inspiration.
        </p>
        <p>
          We believe that access to information and education is a fundamental 
          right. That is why we provide free resources, welcoming spaces, and 
          programs designed to support students, families, researchers, and 
          lifelong learners of all ages.
        </p>
        <p>
          From borrowing books to attending educational workshops, Bright 
          Future Library is committed to building a brighter, more informed 
          future for everyone in our community.
        </p>
      </div>
    </section>
  );
}

export default Introduction;