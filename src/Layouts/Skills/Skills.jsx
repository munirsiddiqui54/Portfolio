import React, { useState, useEffect } from "react";
import "../Skills/Skills.css"; // Import your CSS file here

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedSkills, setDisplayedSkills] = useState([]);

  const skills = [
    {
      category: "languages",
      domain: "LANGUAGES",
      skills: [
        {
          skill: "Java",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          skill: "Python",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          skill: "JavaScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          skill: "TypeScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          skill: "Kotlin",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
      ],
    },
    {
      category: "mobile",
      domain: "MOBILE APP DEVELOPMENT",
      skills: [
        {
          skill: "React Native",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          skill: "Flutter",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          skill: "Android(Kotlin/Java)",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          skill: "Jetpack Compose",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-plain.svg",
        },
      ],
    },

    {
      category: "frontend",
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
          skill: "React JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          skill: "Next JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          skill: "Tailwind CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          skill: "Bootstrap",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        // {
        //   skill: "Redux",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        // },
      ],
    },
    {
      category: "backend",
      domain: "BACKEND",
      skills: [
        {
          skill: "Node JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          skill: "Express JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        // {
        //   skill: "GraphQL",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        // },
      ],
    },
    {
      category: "databases",
      domain: "DATABASES",
      skills: [
        {
          skill: "MongoDB",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          skill: "PostgreSQL",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      category: "deployment",
      domain: "DEPLOYMENT & TOOLS",
      skills: [
        {
          skill: "AWS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          skill: "Docker",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        // {
        //   skill: "Kubernetes",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        // },
        // {
        //   skill: "Jenkins",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        // },
        // {
        //   skill: "Redis",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        // },
        // {
        //   skill: "Kafka",
        //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
        // },
        {
          skill: "Firebase",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          skill: "Play Store Publication",
          img: "assets/playstore.png",
        },
        {
          skill: "Git",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          skill: "Postman",
          img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          skill: "Figma",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];
  // Filter skills based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayedSkills(skills.flatMap((domain) => domain.skills));
    } else {
      const categorySkills = skills.find(
        (domain) => domain.category === activeCategory
      );
      setDisplayedSkills(categorySkills ? categorySkills.skills : []);
    }
  }, [activeCategory]);

  // Handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h5 className="gradtext mx-2">/</h5>
          <h5>MY SKILLS</h5>
        </div>
        <h2 className="section-title">
          Technologies I <span className="gradtext">specialize</span> in
        </h2>

        {/* Category buttons */}
        <div className="category-filters">
          <button
            className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategoryClick("all")}
          >
            ALL
          </button>

          {skills.map((domain) => (
            <button
              key={domain.category}
              className={`filter-btn ${
                activeCategory === domain.category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(domain.category)}
            >
              {domain.domain}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img src={skill.img} alt={skill.skill} />
              </div>
              <span className="skill-name">{skill.skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
