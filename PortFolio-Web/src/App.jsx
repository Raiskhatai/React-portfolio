import "./App.css";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import Aos from "aos";

const App = () => {
  const [DarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      once: false,
    });
    document.documentElement.classList.add("dark");
    return () => {};
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`${DarkMode ? "bg-linear-to-r from-gray-900 via-[#0d182e] to-gray-900 min-h-screen " : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen "}`}
    >
      <Navbar DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
