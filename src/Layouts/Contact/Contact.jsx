import React from "react";
import "./Contact.css";

const Contact = (contact) => {
  return (
    <div className="pb-5" style={{ position: "relative" }}>
      <div className="contact py-5" id="contact">
        <div className="container">
          <span className="d-flex">
            <h5 className="gradtext mx-2">/</h5>
            <h5>Contact Me</h5>
          </span>
          <h2>
            Let's <span className="gradtext">start</span> a conversation
          </h2>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1707409779">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
