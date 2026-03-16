import React, { useState } from "react";
import { motion } from "motion/react";
import { IoMoonSharp, IoSunnyOutline, IoSunnySharp } from "react-icons/io5";
import { Menu, X } from "lucide-react";

const Navbar = ({ DarkMode, toggleDarkMode }) => {
  const [activeSection, setactiveSection] = useState("home");
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skill", link: "#skill" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-linear-to-br from-red-100 to-white",
    textPrimary: "text-gray-900",
    textSecondry: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-linear-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondry: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const colors = DarkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setactiveSection(itemName.toLowerCase());
    setisMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg `}
      >
        <div
          className={`flex items-between justify-center w-full gap-4  lg:space-x-8 `}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span
              className={`text-xl font-bold ${colors.textPrimary} capitalize`}
            >
              portfoio<span className="text-orange-500">.</span>
            </span>
          </motion.a>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.name);
                  }}
                  className="relative"
                >
                  <motion.span
                    className={`font-medium  transition-colors duration-300  ${
                      activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : `${colors.textSecondry} hover:text-orange-500`
                    } `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-1 left-0 right-0 h-0 bg-linear-to-r rounded-full ${colors.indicator}`}
                    ></motion.div>
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full cursor-pointer ${DarkMode ? "bg-gray-700" : "bg-gray-200"} transition-colors `}
              aria-label={
                DarkMode ? " switch to light mode " : "switch to dark mode"
              }
            >
              {DarkMode ? (
                <IoSunnySharp className="w-5 h-5 text-yellow-300   " />
              ) : (
                <IoMoonSharp className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
            {/* button  */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer capitalize `}
            >
              hire me
            </motion.a>
          </div>
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setisMenuOpen(!isMenuOpen)}
              className={`p-2  rounded-lg ${DarkMode ? "bg-gray-700" : "bg-gray-200"} cursor-pointer `}
            >
              {isMenuOpen ? (
                <X
                  className={`w-5 h-5 ${DarkMode ? "text-white" : "text-gray-700"} `}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 ${DarkMode ? "text-white" : "text-gray-700"}`}
                />
              )}
            </motion.button>
          </div>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, hight: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${DarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop:blur-lg rounded-xl shadow-lg border ${DarkMode ? "border-gray-700" : "border-gray-200"} `}
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => {
                      handleNavClick(item.name);
                    }}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLowerCase() ? (DarkMode ? "bg-gray-800" : "bg-red-100") : ""} `}
                    >
                      <span
                        className={`font-medium ${activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondry} `}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setisMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${
                    colors.button
                  } text-white shadow-md capitalize `}
                >
                  hire me
                </motion.a>
              </div>
            </motion.div>
          ) : null}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
