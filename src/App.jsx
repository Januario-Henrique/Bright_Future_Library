import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import About from "./components/About";
import Events from "./components/Events";
import FeaturedBooks from "./components/FeaturedBooks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <Introduction />
        <Services />
        <About />
        <Events />
        <FeaturedBooks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;