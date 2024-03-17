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
          className="d-flex my-4 skill_container"
          style={{
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {Myskills?.map((a) => (
            <div class="mycard m-2">
              <div class="mycard2 ">
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
                  <div className="d-flex box">
                    <img src={s.img} alt="skill" className="m-2" />
                    <p className="m-0">{s.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
