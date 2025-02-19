import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import the eye icons
import BackButton from "../BackButton";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
const LoginPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleGoogleSignIn = () => {
    // Add the logic for Google sign-in here
    console.log("Sign in with Google");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 mt-16">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          
          <div className="w-full flex flex-col items-center justify-center min-h-screen  text-black font-semibold p-6">
              <BackButton />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" p-8 rounded-lg shadow-lg max-w-sm w-full bg-gray-300 bg-opacity-20"
              >
                <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full p-2 text-black rounded outline-none border-gray-300 border"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        className="mt-1 w-full p-2 text-black rounded outline-none border-gray-300 border"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                      >
                        {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full  p-3 rounded-lg font-semibold bg-gradient-to-br from-violet-500  to-violet-200 "
                  >
                    Login
                  </button>
                </form>
                <div className="mt-4 flex flex-col items-center">
                  <p className="mb-2">Or</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGoogleSignIn}
                    className="w-full bg-gradient-to-br from-violet-400  to-violet-100 text-black flex items-center justify-center p-3 rounded-lg shadow-md hover:bg-gray-100"
                  >
                    <FcGoogle className="mr-2" />
                    Sign in with Google
                  </motion.button>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Don't have an account?{" "}
                    <span
                      onClick={() => navigate("/signup")}
                      className="text-indigo-400 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </motion.div>
          </div>
          
        </p>
      </div>
    </BackgroundGradientAnimation>

    
  );
};

export default LoginPage;