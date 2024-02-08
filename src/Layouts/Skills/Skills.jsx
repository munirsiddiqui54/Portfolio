import React from "react";
import "./Skills.css";
const Skills = () => {
  // <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg'></img>
  const frontEnd = {
    domain: "FRONTEND",
    skills: [
      {
        skill: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        skill: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        skill: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        skill: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        skill: "React JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  };

  const backEnd = {
    domain: "BACKEND",
    skills: [
      {
        skill: "Node JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        skill: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  };

  const Android = {
    domain: "ANDROID",
    skills: [
      {
        skill: "Kotlin",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        skill: "Android Studio",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        skill: "Java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  };

  const Others = {
    domain: "OTHERS",
    skills: [
      {
        skill: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        skill: "C",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        skill: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  };

  const Myskills = [frontEnd, backEnd, Android, Others];

  return (
    <>
      <div className="skills container my-5">
        <span className="d-flex">
          <h5 className="gradtext mx-2">/ </h5>
          <h5> MY SKILLS</h5>
        </span>
        <h2>
          So, <span className="gradtext">what</span> I know
        </h2>
        <div
          className="d-flex my-4"
          style={{ flexWrap: "wrap", justifyContent: "space-between" }}
        >
          {Myskills?.map((a) => (
            <div class="mycard m-2">
              <div class="mycard2 p-2">
                <h5
                  className="m-2"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    textAlign: "start",
                    fontSize: "15px",
                  }}
                >
                  {a.domain}
                </h5>
                {a.skills.map((s) => (
                  <div className="d-flex m-1 p-1 box">
                    <img
                      src={s.img}
                      alt="skill"
                      style={{ width: "50px" }}
                      className="m-2"
                    />
                    <p className="m-0">{s.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        class="custom-shape-divider-bottom-1707313518"
        style={{ marginBottom: "-2px" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Skills;
