import React, { useEffect, useState } from "react";
import "./Hero.css";
import Social from "../Social/Social";
import { FiExternalLink } from "react-icons/fi";

const Hero = () => {
  const greetings = [
    "Hey",
    "ٱلسَّلَامُ عَلَيْكُمْ",
    "नमस्कार",
    "Namaste",
    "Hola",
    "Bonjour",
    "Hallo",
    "こんにちは",
    "你好",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prev) => (prev === greetings.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  const handleDownload = () => {
    const fileUrl = "/Munir's resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "munirSiddiqui");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="my-5" style={{ position: "relative" }} id="home">
      {window.innerWidth <= 768 ? "" : <Social />}

      <main className="container hero py-3 mt-5">
        <p className="greet mt-5">{greetings[index]}</p>
        <h2 className="heading">
          <span className="gradtext">Myself,</span> <br />
          Munir Siddiqui
        </h2>
        <p className="description">
          A dedicated software development student with expertise in web
          development and a burgeoning interest in app development. Currently
          immersing myself in the realm of machine learning.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <button className="mybtn btn" id="btn1">
            <a
              href="#contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Me
            </a>
          </button>
          {/* <button className="mybtn btn" id="btn2" onClick={handleDownload}>
            Download Resume
          </button> */}
          <button
            className="mybtn btn"
            id="btn2"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/16pRE_IxGghyIkUkyNpwRGK5HNMhw8oAQcH3aw1_WaSM/edit?usp=sharing",
                "_blank"
              )
            }
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            Check Out My Resume
            <FiExternalLink />
          </button>
        </div>
      </main>
      {window.innerWidth <= 768 ? <Social /> : ""}
    </div>
  );
};

export default Hero;
