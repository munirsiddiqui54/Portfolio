import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './Layouts/Header/Header';
import Hero from './Layouts/Hero/Hero';
import About from './Layouts/About/About';
import Skills from './Layouts/Skills/Skills';
import Projects from './Layouts/Projects/Projects';
import Contact from './Layouts/Contact/Contact';
import Footer from './Layouts/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const mouseFollower = useRef();

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { pageY, pageX } = event;
      mouseFollower.current.style.top = pageY - 45 + "px";
      mouseFollower.current.style.left = pageX - 45 + "px";
    });

    const radiusTimeOut = setInterval(() => {
      mouseFollower.current.style.borderRadius = shuffle([
        "20%",
        "50%",
        "20%",
        "50%"
      ]).join(" ");
    }, 1000);

    return () => {
      document.removeEventListener("mousemove", () => {});
      clearInterval(radiusTimeOut);
    };
  }, []);

  return (
    <div className="App">
      <Toaster />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <div ref={mouseFollower} className="mouse__follower" id="mouse_follower"></div>
    </div>
  );
}

export default App;
