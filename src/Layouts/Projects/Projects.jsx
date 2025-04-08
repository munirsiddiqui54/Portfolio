import React, { useRef } from "react";
import "./Projects.css";
import petComassImage from "./Photos/petCompass.png";
import aromasHavenImage from "./Photos/aromasHaven.png";
import aura from "./Photos/aura.png";
import iotAgricultureImage from "./Photos/IotAgriculture.png";
import platePaletteImage from "./Photos/platePalette.png";
import gemicon from "./Photos/google-gemini-icon.svg";
import Slider from "react-slick";
import marksPhoto from "./Photos/marks.jpeg";
import dashboardImage from "./Photos/dashboard.png";
import laksh from "./Photos/laksh.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const studentsMarks = {
    name: "Marks Prediction",
    description:
      "This project is an end-to-end data science application aimed at predicting students' scores based on various demographic and educational features. The project leverages machine learning techniques and follows industry best practices, including structured folder organization, custom loggers, and custom exception handling.",
    photo: marksPhoto,
    date: "May 2024",
    status: "Completed",
    stack: [
      {
        skill: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        skill: "scikit-learn",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        skill: "Pandas",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        skill: "NumPy",
        // icons/numpy/numpy-original.svg
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        skill: "Jupyter Notebook",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        skill: "Flask",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
    ],
    keyPoints: ["Model Training", "Data Processing"],
    visit: "https://mlproject-cevz.onrender.com/",
    github: "https://github.com/munirsiddiqui54/MLProject",
  };

  const aromasHaven = {
    name: "Aromas Haven",
    description:
      "A Full-Stack e-commerce web application using MERN stack, users can place orders for their favourite perfumes. Website includes an integrated admin dashboard to manage orders and products",
    photo: aromasHavenImage,
    date: "Nov 2023-Dec 2023",
    status: "Completed",
    stack: [
      {
        skill: "React JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        skill: "Node JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        skill: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        skill: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/AromasHaven",
    visit: "https://aromas-haven.vercel.app/",
    // youtube: "https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o",
  };
  const petCompass = {
    name: "Pet Compass",
    description:
      "A community-driven android app tailored for pet adoption, enabling pet owners seeking to rehome their pets to post listings while prospective adopters can browse and connect with them directly, fostering meaningful pet-owner matches.",
    photo: petComassImage,
    date: "Jan 2024-Feb 2024",
    status: "Completed",
    stack: [
      {
        skill: "Kotlin",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        skill: "Android Studio",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/PetCompass",
    youtube: "https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o",
  };
  const auraMat = {
    name: "Aura- AI powered Mat",
    description:
      "The project significantly enhances traditional yoga practices by providing personalized, real-time feedback and guidance through the integration of AI and smartwatches.  This innovative approach enriches the user experience and improves health monitoring during yoga sessions, making yoga more interactive, effective, and tailored to individual needs.",
    photo: aura,
    date: "Aug 2024-Sept 2024",
    status: "Completed",
    stack: [
      {
        skill: "React Native",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        skill: "Gemini",
        img: gemicon,
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/Ai-YogaMat",
    youtube: "https://youtu.be/-8zDv2EXZKo?feature=shared",
  };
  const iotAgriculture = {
    name: "IOT Agriculture",
    description:
      "An Android app fetches data from a real-time database where information is posted using an ESP32 with sensors reading soil properties. It includes an ML model to recommend suitable crops for the field. Additionally, a Gemini chatbot is integrated to assist farmers with their queries.",
    photo: iotAgricultureImage,
    date: "Mar 2024",
    status: "Completed",
    stack: [
      {
        skill: "Kotlin",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        skill: "Android Studio",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        skill: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        skill: "Jupyter",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        skill: "Flask",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        skill: "Gemini",
        img: gemicon,
      },
      //ml prediction: python,jupyternb
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/AgricultureIOT",
    visit: "",
  };
  const platePalette = {
    name: "Plate Palette",
    description:
      "A user-friendly website for discovering recipes, crafted with HTML, CSS, and JavaScript, enriched with a pre-prepared API for seamless integration",
    photo: platePaletteImage,
    date: "Dec 2022",
    status: "Completed",
    stack: [
      {
        skill: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        skill: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        skill: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/recipe-S",
    visit: "https://munirsiddiqui54.github.io/recipe-S/",
  };
  const dashboard = {
    name: "Flipkart Mobile Price Dashboard",
    description:
      "Developed an interactive dashboard to analyze phone data from Flipkart, featuring price comparison, brand popularity, and price distribution insights. Integrated visualizations like scatter plots, pie charts, and density plots, along with correlation and clustering analyses, to explore relationships and group similar products. This tool provides a clear view of price trends, market share, and brand influence, helping users make data-driven decisions.",
    photo: dashboardImage,
    date: "Oct 2024",
    status: "Completed",
    stack: [
      {
        skill: "R programming",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-plain.svg",
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/dashboard",
    visit: "https://munirsiddiqui.shinyapps.io/mobile/",
  };
  const lakshAi = {
    name: "Laksh-AI",
    description:
      " A career guidance app designed to help users make informed career decisions and achieve their professional goals. 🚀 It offers personalized career recommendations, tailored learning roadmaps, and virtual internships to build relevant skills. Through mentorship, progress tracking, and an AI chatbot 🤖, LakshAI supports users at every step of their career journey. ",
    photo: laksh,
    date: "Nov 2024",
    status: "Near Completion",
    stack: [
      {
        skill: "NextJS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg",
      },
      {
        skill: "AntDesign",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-plain.svg",
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        skill: "Gemini",
        img: gemicon,
      },
    ],
    keyPoints: ["Admin Dashboard", "Payment Gateway"],
    github: "https://github.com/munirsiddiqui54/laksh-ai",
    visit: "https://laksh-ai.vercel.app/",
  };

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const list = [
    lakshAi,
    dashboard,
    auraMat,
    studentsMarks,
    iotAgriculture,
    petCompass,
    aromasHaven,
    platePalette,
  ];

  return (
    <div className=" projects py-5 my-5" id="projects">
      <div className="container">
        <span className="d-flex">
          <h5 className="gradtext mx-2">/</h5>
          <h5>MY PROJECTS</h5>
        </span>
        <h2>
          Projects I have <span className="gradtext">previously</span> worked on
        </h2>

        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {list.map((item) => (
            <div
              class="card d-flex p-1"
              style={{ justifyContent: "start", flex: 1, height: "100%" }}
            >
              <img
                style={{
                  borderRadius: "5px",
                  filter: "brightness(50%)",
                  height: "150px",
                }}
                src={item.photo}
                alt=""
              />
              <div
                className="d-flex m-2"
                style={{ justifyContent: "space-between" }}
              >
                <div class="badges">
                  {item.status == "Completed" ? (
                    <button class="green"> {item.status}</button>
                  ) : (
                    <button class="blue">{item.status}</button>
                  )}
                </div>
                <p className="m-0">{item.date}</p>
              </div>

              <h5
                style={{
                  textAlign: "start",
                  fontFamily: "poppins",
                  color: "white",
                }}
                className="p-1"
              >
                {item.name}
              </h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "white",
                  flexWrap: "wrap",
                }}
              >
                {item.stack.map((skill) => (
                  <div
                    class="badge m-1 skill-badge"
                    style={{
                      fontWeight: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={skill.img} alt="" style={{ width: "12px" }} />
                    <p style={{ fontSize: "12px" }} className="m-0 ms-1">
                      {skill.skill}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: "start" }} className="my-2">
                {item?.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "auto",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="btn githubbtn"
                  onClick={() => window.open(item.github)}
                  style={{ boxShadow: "none", width: "110px" }}
                >
                  Github <i class="fa-brands fa-github"></i>
                </button>
                {item.visit ? (
                  <button
                    onClick={() => window.open(item.visit)}
                    className="btn visit"
                    style={{
                      width: "110px",
                    }}
                  >
                    Visit <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                ) : (
                  ""
                )}
                {item.youtube ? (
                  <button
                    onClick={() => window.open(item.youtube)}
                    className="btn youtube"
                    style={{
                      width: "130px",
                    }}
                  >
                    Youtube <i class="fa-brands fa-youtube"></i>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Projects;
