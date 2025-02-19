import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import Dashboard from "./components/Dashboard/Dashboard";
import Contributors from "./components/Contributors/Contributors";
import PaymentPage from "./components/Payment/Payment";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TemplatesRoutes from "./components/Templates/TemplatesRoutes";
import LoginPage from "./components/Auth/login";
import SignupPage from "./components/Auth/SignUp";
import Navbar from "./components/Home/Navbar";

function App() {

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
    <Router>
      <AnimatedCursor
        innerSize={12}
        outerSize={25}
        outerAlpha={0.4}
        innerScale={1}
        outerScale={2}
        color="194, 198, 204"
      />
      <Navbar isDarkMode={isDarkMode} onChangeDarkMode={handleDarkModeChange} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/templates/*" element={<TemplatesRoutes />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/SignUp" element={<SignupPage/>} />


      </Routes>
    </Router>
  );
}

export default App;
