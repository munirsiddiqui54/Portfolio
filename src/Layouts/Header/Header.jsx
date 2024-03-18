import React from "react";
import "./Header.css";
import { CiMenuBurger } from "react-icons/ci";
import Social from "../Social/Social";

const Header = () => {
  const showMenu = () => {
    document.getElementById("menu").style.display = "block";
  };
  return (
    <header className="header fluid-container p-3" style={{}}>
      <p className="m-0" style={{ fontWeight: "700", fontSize: "22px" }}>
        Munir
      </p>
      <CiMenuBurger
        style={{ color: "white", cursor: "pointer", fontSize: "25px" }}
        onClick={() => showMenu()}
      />
    </header>
  );
};

export default Header;
