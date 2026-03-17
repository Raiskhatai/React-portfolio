import React from "react";

const About = ({ DarkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${DarkMode ? "bg-gray-900" : ""} `}
    >
      <div className="star -inset-10 lg:-inset-20 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] r "></div>
    </section>
  );
};

export default About;
