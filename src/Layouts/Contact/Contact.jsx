import React from "react";
import "./Contact.css";

const Contact = (contact) => {
  return (
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
  );
};

export default Contact;
