import React from "react";
import "./About.css";
import img from "../../Photos/blob.png";
import img2 from "../../Photos/blob2.png";

const about = () => {
  return (
    <div className="about container pb-5">
      <span className="d-flex">
        <h5 className="gradtext mx-2">/ </h5>
        <h5> ABOUT ME</h5>
      </span>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div style={{ width: "45%", position: "relative" }}>
          <img src={img2} className="blob3" style={{ width: "150px" }} />
          <h2>
            2 years of <span className="gradtext">crafting</span> digital
            solutions since 2022.
          </h2>
          <p>
            Munir Siddiqui, a dynamic second-year software engineering student
            with a passion for crafting innovative solutions that transcend
            conventional boundaries. Armed with a solid foundation in web and
            app development, Munir is on a relentless quest to deepen his
            expertise in the cutting-edge realm of machine learning.
          </p>
          <img src={img} className="blob4" style={{ width: "150px" }} />
        </div>
        <div className="abt2" style={{ width: "45%" }}>
          <img src={img} className="blob" style={{ width: "100px" }} />
          <div
            className="d-flex"
            style={{ justifyContent: "start", alignItems: "center" }}
          >
            <div
              className="d-flex me-4"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <h2>1.5+</h2>
              <span>Years of Experience</span>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <h2 style={{ textAlign: "end" }}>8+</h2>
              <span>Deployed projects</span>
            </div>
          </div>
          <img src={img2} className="blob2" style={{ width: "150px" }} />
          <p>
            I've honed my skills across various domains. My passion for
            innovation drives me to constantly seek new challenges and push the
            boundaries of what's possible in the realm of software engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
