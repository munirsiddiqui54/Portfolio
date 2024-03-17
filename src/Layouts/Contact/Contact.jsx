import React from "react";
import "./Contact.css";

const Contact = (contact) => {
  return (
    <div className="pb-5" style={{ position: "relative" }}>
      <div className="contact py-5" id="contact">
        <div className="container">
          <span className="d-flex">
            <h5 className="gradtext mx-2">/</h5>
            <h5>CONTACT ME</h5>
          </span>
          <h2>
            Let's <span className="gradtext">start</span> a conversation
          </h2>
          <div className="form-container">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Send me a Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows={10}
                  cols={50}
                  required
                  defaultValue={"          "}
                />
              </div>
              <button className="form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
