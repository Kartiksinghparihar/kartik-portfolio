import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("About");
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleMouse = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouse
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouse
      );
  }, []);

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.message
    ) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <Navbar
        active={active}
        setActive={setActive}
      />

      <Hero
        loaded={loaded}
        setActive={setActive}
        heroRef={heroRef}
      />

      <Marquee />

      <Work
        hovered={hovered}
        setHovered={setHovered}
      />

      <Skills />

      <About />

      <Contact
        formData={formData}
        setFormData={setFormData}
        sent={sent}
        handleSubmit={handleSubmit}
      />

      <Footer />
    </>
  );
}