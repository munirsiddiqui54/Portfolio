import React from "react";
import "./Footer.css";
import Social from "../Social/Social";

const Footer = () => {
  return (
    // <div style={{ position: "relative" }}>

    <div className="footer py-3">
      <div
        className="d-flex footer-body container mt-3"
        style={{ justifyContent: "space-between" }}
      >
        <div className="profile">
          <img src="" />
          <div style={{ height: "220px" }}>
            <h3>Munir Siddiqui</h3>
            <p>Software Developer</p>
            <Social align={1} />
          </div>
        </div>
        <div>
          <h3>Get in Touch</h3>
          <h2>//add email, name, phone no.</h2>
        </div>
      </div>
      <div className="credits container">
        <p className="my-3">Developed by @MunirSiddiqui</p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
