import React from "react";
import "../styles/FeaturedBooks.css";

function FeaturedBooks() {
  const books = [
    { title: "The Bright Path", author: "Anna L. Moore", genre: "Fiction" },
    { title: "Learning for Life", author: "David Kent", genre: "Education" },
    { title: "Community & Growth", author: "Sarah Idris", genre: "Non-fiction" },
    { title: "Digital World Basics", author: "Michael Chen", genre: "Technology" },
  ];

  return (
    <section id="books" className="featured-books">
      <h2>Featured Books</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <div className="book-cover">📕</div>
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <span className="genre">{book.genre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBooks;