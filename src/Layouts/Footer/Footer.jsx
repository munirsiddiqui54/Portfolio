import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // <div style={{ position: "relative" }}>

    <div className="footer py-3">
      <div
        className="d-flex container mt-3"
        style={{ justifyContent: "space-between" }}
      >
        <div className="profile">
          <img src="" />
          <div>
            <h3>Munir Siddiqui</h3>
            <p>xyz</p>
          </div>
        </div>
        <div>
          <h3>Get in Touch</h3>
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
