import "./App.css";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";

const App = () => {
  const [DarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
    document.documentElement.classList.add("dark");
    return () => {};
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [DarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`   ${DarkMode ? "bg-linear-to-r from-gray-900 via-[#0d182e] to-gray-900 min-h-screen " : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen "} overflow-auto `}
    >
      <Navbar DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero DarkMode={DarkMode} />
      <About DarkMode={DarkMode} />
      <Skills DarkMode={DarkMode} />
    </div>
  );
};

export default App;
