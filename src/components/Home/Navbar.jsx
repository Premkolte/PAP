import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./images/Animate_logo.png";

const Navbar = ({ isDarkMode, onChangeDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="w-full fixed top-0 left-0  dark:text-gray-300 border border-b-gray-200 z-50 bg-white bg-opacity-95"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <div className="flex justify-between mr-8">
          {/* Logo Animation */}
          <div
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider flex items-center justify-center "
    
          >
            <Link
              to="/"
              className="flex items-center "
              onClick={closeMenu}
            >
              <div
              >
                <img
                  className="w-16 h-16 pt-2 pl-2 "
                  src={Logo}
                  alt="AnimateHub Logo"
                />
              </div>
              <h1
                className="font-sans text-2xl bg-clip-text text-gray-800 dark:text-gray-300"
              >
                AnimateHub
              </h1>
              <span className="md:hidden">
                <DarkModeToggle dark={isDarkMode} onChange={onChangeDarkMode}  />
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 md:space-x-6 items-center font-semibold text-gray-700">
            {["Home", "Explore", "About", "Contact", "Login"].map((item) => (
              <motion.div
                key={item}
                className="hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={item !== "Home"?(`/${item.toLowerCase()}`): (`/`)} onClick={closeMenu}>
                  {item}
                </Link>
              </motion.div>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <motion.div
            className="flex flex-col mt-4 space-y-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            {["Home", "Explore", "About", "Contact", "Login"].map((item) => (
              <motion.div
                key={item}
                className="hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={`/${item.toLowerCase()}`} onClick={closeMenu}>
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
