import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { LuLayoutTemplate } from "react-icons/lu";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsGithub, BsPeople, BsStarFill } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import Chatbot from "./Chatbot";
import TestimonialSection from "./Testimonial";
import Navbar from "./Navbar";
import Footer from "../Footer";
import ReactJoyride from 'react-joyride';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();

  
  const [steps] = useState([
    {
      target: '.browse-components-button',
      content: 'Click here to browse our components.',
    },
    {
      target: '.get-started-button',
      content: 'Click here to get started with our GitHub repository.',
    },
    {
      target: '.star-github-button',
      content: 'Show your support by starring our GitHub repository.',
    },
    {
      target: '.pricing-section',
      content: 'Check out our pricing plans here.',
    },
    {
      target: '.features-section',
      content: 'Discover the amazing features we offer.',
    },
    {
      target: '.testimonial-section',
      content: 'Read testimonials from our satisfied users.',
    },
    {
      target: '.contributors-section',
      content: 'Meet our talented contributors who have made this amazing website.',
    },
    {
      target: '.templates-section',
      content: 'Explore our handcrafted templates.',
    },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!isDarkMode) {
      setStyle({
        background: 'linear-gradient(to right, yellow, purple, blue, yellow)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 10px rgba(128, 0, 128, 0.5), 0 0 20px rgba(0, 0, 255, 0.5)',
      });
    } else {
      setStyle({
        background: 'none',
        WebkitBackgroundClip: 'unset',
        WebkitTextFillColor: 'unset',
        textShadow: 'none',
      });
    }
  }, [isDarkMode]);

  const handleDarkModeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  return (
    <>
      <ReactJoyride steps={steps} continuous={true} showProgress={true} showSkipButton={true} />
      <div className="w-full flex flex-col items-center justify-center min-h-screen text-gray-800 p-6 space-y-16 pt-24 bg-gray-200 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <div className="bg-black text-white px-4 py-1 rounded-full inline-block text-sm mb-6">
            100% OPEN-SOURCE
          </div>
          <motion.p
            className={`text-4xl md:text-7xl mb-6 font-bold opacity-90 ${isDarkMode ? 'dark:text-white' : ''}`}
            whileHover={{ scale: 1.05 }}
            style={style}
          >
            Animation UI Library <br /> for Developers
          </motion.p>
          <p className="text-lg mb-10 opacity-80">
            Open-sourced components made with
            <br />
            <span className="font-bold">HTML + CSS</span> &{" "}
            <span className="font-bold">React + Tailwind</span>.
          </p>

          <div className="flex space-x-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg browse-components-button"
              onClick={() => {
                navigate("/explore");
              }}
              
            >
              Browse Components
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="border border-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow-md "
              onClick={() => {
                window.location.href =
                  "https://github.com/Premkolte/AnimateHub";
              }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        <div className="flex space-x-6 mt-12">
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><FaHtml5 className="h-12 w-12" /></a>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><FaCss3Alt className="h-12 w-12" /></a>
          <a target="_blank" href="https://react.dev/learn"><FaReact className="h-12 w-12" /></a>
          <a target="_blank" href="https://tailwindcss.com/"><BiLogoTailwindCss className="h-12 w-12" /></a>
        </div>

        <motion.a href="https://github.com/Premkolte/AnimateHub"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-medium h-12 px-6 py-3 group dark:bg-gray-900 bg-gray-100 dark:hover:bg-gray-950 transition-all duration-200 ease-in-out star-github-button"
        >
          <BsGithub size={25} />
          <span className="dark:text-white text-gray-800 text-xl">Star on Github</span>
          <BsStarFill size={25} className="text-yellow-500" />
        </motion.a>

        <div className="text-center space-y-4 pt-10 pricing-section">
          <div>
            <h1 className="text-5xl font-bold font-sans mb-4"
            
            >Pricing</h1>
            <h1 className="text-xl font-semibold text-gray-600 font-sans mb-10">Transparent Pricing, Clear Choices</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">
            {/* Starter Plan */}
            <motion.div
              className="flex flex-col items-center p-8 rounded-lg  min-w-sm border border-gray-300 bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h2 className="font-bold text-4xl text-center mb-6">
                  Starter
                </h2>
                <p className="opacity-60 text-center">
                  For the individual and small teams
                </p>
                <div className="flex flex-col items-center my-8">
                  <p className="font-bold text-4xl text-gray-800">$0/mo</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-gray-700">
                <div className="flex ">
                  <div className=" mr-2">✔️</div>
                  <div>Access to all components</div>
                </div>
                <div className="flex">
                  <div className=" mr-2">✔️</div>
                  <div>Access to  to codebase</div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className=" px-4 lg:px-10 py-2 border-violet-700 border  bg-violet-100 rounded-xl hover:bg-violet-400 hover:bg-opacity-40 "
                    onClick={() => {
                      navigate("/payment");
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="flex flex-col items-center dark:bg-slate-900 p-8 rounded-lg  min-w-sm border border-gray-300 bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h2 className="font-bold text-4xl text-center mb-6">
                  Pro
                </h2>
                <p className="opacity-60 text-center">
                  For larger teams and enterprises
                </p>
                <div className="flex flex-col items-center my-8">
                  <p className="font-bold text-4xl text-gray-800">$49/mo</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 text-gray-700">
                <div className="flex ">
                  <div className=" mr-2">✔️</div>
                  <div>Priority support</div>
                </div>
                <div className="flex">
                  <div className=" mr-2">✔️</div>
                    <div>Access to exclusive components</div>
                  </div>
                  <div className="flex">
                    <div className=" mr-2">✔️</div>
                  <div>Custom solutions</div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className=" px-4 lg:px-10 py-2 border-violet-700 border  bg-violet-100 rounded-xl hover:bg-violet-400 hover:bg-opacity-40 "
                    onClick={() => {
                      navigate("/payment");
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
                
              </div>
            </motion.div>

            {/* New Pricing Section */}
            <motion.div
              className="flex flex-col items-center dark:bg-slate-900 p-8 rounded-lg  min-w-sm border border-gray-300 bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h2 className="font-bold text-4xl text-center mb-6">
                  Enterprise
                </h2>
                <p className="opacity-60 text-center">
                  Tailored solutions for large enterprises
                </p>
                <div className="flex flex-col items-center my-8">
                  <p className="font-bold text-3xl text-gray-800">Contact us</p>
                  <p className="font-bold text-xl text-gray-800">for pricing</p>
                </div>
              </div>


              <div className="flex flex-col gap-1 text-gray-700">
                <div className="flex ">
                  <div className=" mr-2">✔️</div>
                  <div>Customizable plans</div>
                </div>
                <div className="flex">
                  <div className=" mr-2">✔️</div>
                    <div>Dedicated support team</div>
                  </div>
                  <div className="flex">
                    <div className=" mr-2">✔️</div>
                  <div>Advanced analytics</div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className=" px-4 lg:px-10 py-2 border-violet-700 border  bg-violet-100 rounded-xl hover:bg-violet-400 hover:bg-opacity-40 "
                    onClick={() => {
                      navigate("/payment");
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center space-y-4 pt-10 features-section">
          <h2 className="text-5xl font-bold font-sans mb-8">Features</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <motion.div
              className=" bg-white text-black p-8 rounded-lg shadow-md border border-gray-200 max-w-xs flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <IoMdRocket size={50} className="mb-4 text-indigo-600" />
              <h3 className="text-2xl font-bold mb-2 opacity-80">Easy to Use</h3>
              <p className="text-gray-500">
                Simple and intuitive components that make development a breeze.
              </p>
            </motion.div>

            <motion.div
              className="bg-white text-black p-8 rounded-lg shadow-md border border-gray-200 max-w-xs flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <MdLibraryBooks size={50} className="mb-4 text-indigo-600" />
              <h3 className="text-2xl font-bold mb-2 opacity-80">Comprehensive Docs</h3>
              <p className="text-gray-500">
                Detailed documentation to help you get started quickly and easily.
              </p>
            </motion.div>

            <motion.div
              className="bg-white text-black p-8 shadow-md border border-gray-200 
              max-w-xs flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <GiTechnoHeart size={50} className="mb-4 text-indigo-500 " />
              <h3 className="text-2xl font-bold mb-2 opacity-80">Modern Design</h3>
              <p className="text-gray-500">
                Beautifully designed components that enhance your project's UI.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="testimonial-section">
          <h2 className="text-4xl mb-8 text-center"></h2>
          <TestimonialSection />
        </div>

        <div className="contributors-section mt-12 w-full flex flex-col items-center dark:text-white">
          <h2 className="text-5xl font-bold font-sans mb-8">Contributors</h2>
          <p className="max-w-xl text-center mb-8 text-gray-700">
            Meet the talented people who have contributed to making this amazing website possible.
          </p>
          <div className="flex md:space-x-6 md:flex-row flex-col  items-center space-y-4 md:space-y-0">
            <Link to="/contributors">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-black text-white px-12 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
                View Contributors
              </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.1 }}
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              <a
                href="https://github.com/Premkolte/AnimateHub"
                className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
                <BsPeople className="inline-block mr-2" />
                Become a Contributor
              </a>
            </motion.button>
          </div>
        </div>

        <div className="templates-section mt-12 w-full flex flex-col items-center dark:text-white">
          <h2 className="text-5xl font-bold font-sans mb-8">Templates</h2>
          <p className="max-w-xl text-center mb-8 text-gray-700">
            Explore our library of handcrafted templates designed to kickstart your projects.
          </p>
          <div className="flex md:space-x-6 md:flex-row flex-col  items-center space-y-4 md:space-y-0">
            <Link to="/templates">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-black text-white px-12 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
                View Templates
              </motion.button>
            </Link>
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
            <a
              href="https://github.com/Premkolte/AnimateHub/issues/new/choose"
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              <LuLayoutTemplate className="inline-block mr-2" />
              Submit a Template
            </a>
            </motion.button>
          </div>
        </div>
        <Footer />
        <Chatbot />
      </div>

    </>
  );
};

export default HomePage;
