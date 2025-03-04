


import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import MotivationalQuote from "./MotivationalQuote";

const WelcomeSection = ({ studentName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-black to-[#1e3a8a] text-white rounded-2xl shadow-lg text-center border m-5 border-gray-700"
    >
      <div className="flex gap-3">
        <FaUser className="text-3xl text-gray-300" />
        <h2 className="text-3xl font-bold">Hello, {studentName}!</h2>
      </div>

      <div className="mt-4 p-4 bg-gray-900 bg-opacity-40 rounded-lg border-l-4 border-blue-500">
        <MotivationalQuote />
      </div>
    </motion.div>
  );
};

export default WelcomeSection;
