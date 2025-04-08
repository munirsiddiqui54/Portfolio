import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header fluid-container p-3">
      <p className="logo m-0">Munir S.</p>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
