import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kblxhxl", "template_sdud3ek", form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent!");
          // Clear the form fields after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something Went wrong.");
        }
      );
  };

  return (
    <div className="py-5 my-3" style={{ position: "relative" }}>
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
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Send me a Message</label>
                <textarea
                  id="textarea"
                  name="message"
                  rows={10}
                  cols={50}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button className="form-submit-btn" type="submit" value="Send">
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
