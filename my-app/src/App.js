import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
// import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Social from "./Components/Social";
import Contact from "./Components/Contact";
// import Music from "./Components/Music";
// import Home from "./Components/Home";
import Merch from "./Components/Merch";
import logo from "./Pictures/ghost logo.png";
import music1 from "./Pictures/music1.JPG";
import music2 from "./Pictures/music2.jpg";
import image1 from "./Pictures/image1.jpg";
import image2 from "./Pictures/image2.jpg";
import { useRef } from "react";

function App() {
  const home = useRef(null);
  const music = useRef(null);
  const contact = useRef(null);
  const merch = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <nav>
        <p onClick={() => scrollToSection(home)} className="links">
          Home
        </p>
        <p onClick={() => scrollToSection(music)} className="links">
          Music
        </p>
        <p onClick={() => scrollToSection(merch)} className="links">
          Merch
        </p>
        <p onClick={() => scrollToSection(contact)} className="links">
          Contact
        </p>
      </nav>

      <section id="logo-container" ref={home}>
        <div>
          <img id="logo-pic" src={logo} alt="logo-pic" />
        </div>
      </section>

      <section id="youtube-container" ref={music}>
        <Container>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/iAUtSLSXaWU"
              id="youtube-vid"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </section>

      <section id="collage-page">
        <div id="collage-container">
          <div className="collage">
            <img className="image-music-pic" src={music1} alt="cover" />
          </div>
          <div className="collage">
            <img className="image-music-pic" src={image1} alt="selfie" />
          </div>
          <div className="collage">
            <img className="image-music-pic" src={image2} alt="selfie2" />
          </div>
          <div className="collage">
            <img className="image-music-pic" src={music2} alt="cover2" />
          </div>
        </div>
      </section>

      <Social />
      <section ref={merch}>
        <Merch />
      </section>
      <section ref={contact}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
