import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layouts/Header/Header';
import Hero from './Layouts/Hero/Hero';
import About from './Layouts/About/About'
import Social from './Layouts/Social/Social';
import Skills from './Layouts/Skills/Skills';
import Projects from './Layouts/Projects/Projects';
import Contact from './Layouts/Contact/Contact';
import Footer from './Layouts/Footer/Footer';
import { Toaster } from 'react-hot-toast';
function App() {
  const mouseFollower = useRef();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { pageY, pageX } = event;
      // mouseFollower.current.style.translate = `transform3d(${
      //   clientX - mouseFollower.current.clientWidth / 2
      // }px, ${clientY - mouseFollower.current.clientHeight / 2}px, 0)`;
      // console.log({ clientX, clientY });
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
      document.removeEventListener("mousemove", () => { });
      clearInterval(radiusTimeOut);
    };
  }, []);

  const show=()=>{
    document.getElementById("menu").style.display="none";
  }
  
  return (
    <div className="App">
      <Toaster/>
      {/* <Header /> */}
      <div id='menu'>
        <div class="swipe-left">
      
      <ul className="menu-list">
        
      <li className="menu-item" onClick={()=>show()}><a href='#home'>Home</a></li>
        <li className="menu-item" onClick={()=>show()}><a href='#about'>About Me</a></li>
        <li className="menu-item" onClick={()=>show()}><a href='#projects'>Projects</a></li>
        <li className="menu-item" onClick={()=>show()}><a href='#skills'>Skills</a></li>
        <li className="menu-item" onClick={()=>show()}><a href='#contact'>Contact Me</a></li>
      </ul>
 
  </div>
      </div>
  <Header/>
      <Hero />
      <Projects/>
      <About />
      <Skills/>
      <Contact/>
      <Footer/>
      <div
        ref={mouseFollower}
        className="mouse__follower"
        id="mouse_follower"
      ></div>
    </div>
  );
}

export default App;
