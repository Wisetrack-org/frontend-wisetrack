import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Homepage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a1a] text-white px-6 text-center">
      {/* Logo & Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }} 
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <FaGraduationCap className="text-6xl text-[#1e3a8a]" />
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Wisetrack</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2">
          Empowering Students, Reducing Dropouts, Shaping Futures
        </p>
      </motion.div>

      {/* Animated Divider */}
      <motion.div 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 0.7, delay: 0.5 }} 
        className="w-20 h-1 bg-[#1e3a8a] mt-6"
      ></motion.div>

      {/* Subtitle / Features */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 20 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 max-w-2xl text-gray-400"
      >
        <p className="text-lg md:text-xl">
          AI-powered learning, career guidance, and student well-being, all in one place.
        </p>
      </motion.div>

      {/* Get Started Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 20 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12"
      >
        <button 
          onClick={() => navigate("/roleSelection")}
          className="bg-[#1e3a8a] hover:bg-[#142654] text-white font-bold py-3 px-6 rounded-2xl text-lg transition-all duration-300"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Homepage;
