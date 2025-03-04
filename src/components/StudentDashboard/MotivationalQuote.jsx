// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const MotivationalQuote = () => {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     fetch("http://api.quotable.io/random")
//       .then((res) => res.json())
//       .then((data) => setQuote(data.content))
//       .catch(() => setQuote("Keep pushing forward, greatness awaits!")); // Fallback quote
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="bg-[#1e3a8a] text-white p-6 rounded-xl shadow-lg w-full max-w-md text-center"
//     >
//       <p className="text-lg italic font-medium">"{quote}"</p>
//     </motion.div>
//   );
// };

// export default MotivationalQuote;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const MotivationalQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .catch(() => setQuote("Keep pushing forward, greatness awaits!")); // Fallback quote
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-black to-[#1e3a8a] text-white p-6 rounded-2xl shadow-2xl w-full max-w-lg text-center border border-gray-700"
    >
      <p className="text-xl font-semibold flex items-center justify-center gap-2">
        <FaQuoteLeft className="text-gray-400" />
        <span className="italic">{quote}</span>
        <FaQuoteRight className="text-gray-400" />
      </p>
    </motion.div>
  );
};

export default MotivationalQuote;
