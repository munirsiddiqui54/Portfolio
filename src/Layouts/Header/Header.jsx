import React from "react";
import "./Header.css";
import { CiMenuBurger } from "react-icons/ci";
import Social from "../Social/Social";

const Header = () => {
  return (
    <header
      className="header fluid-container m-3"
      style={{ position: "relative" }}
    >
      <Social />
      <i class="bi bi-list"></i>
      <CiMenuBurger style={{ color: "white" }} />
      {/* <button class="button">Resume</button> */}
    </header>
  );
};

export default Header;
