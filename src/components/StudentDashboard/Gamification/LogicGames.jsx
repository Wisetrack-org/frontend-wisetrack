import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaClock, FaLightbulb } from "react-icons/fa";

const LogicGames = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const questions = [
    {
      question: "Which number comes next? 2, 6, 12, 20, ?",
      options: [30, 32, 42, 56],
      answer: 30,
      hint: "The pattern follows n^2 + n",
    },
    {
      question: "Find the odd one out: Apple, Banana, Carrot, Mango",
      options: ["Apple", "Banana", "Carrot", "Mango"],
      answer: "Carrot",
      hint: "One of these is not a fruit",
    },
    {
      question: "If A = 1, B = 2, what is Z?",
      options: [24, 25, 26, 27],
      answer: 26,
      hint: "A to Z are counted in sequence",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[questionIndex].answer) {
      setScore(score + 10);
      setQuestionIndex((prev) => (prev + 1) % questions.length);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🧠 Logic Games Challenge
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between mb-4">
          <p className="text-lg">
            <FaTrophy className="inline-block mr-2 text-yellow-400" /> Score:{" "}
            {score}
          </p>
          <p className="text-lg">
            <FaClock className="inline-block mr-2 text-red-400" /> Time:{" "}
            {timeLeft}s
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">
          {questions[questionIndex].question}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {questions[questionIndex].options.map((option, index) => (
            <motion.button
              key={index}
              className={`p-4 rounded-lg text-lg font-bold cursor-pointer hover:bg-blue-500 transition ${
                selectedAnswer === option ? "bg-blue-600" : "bg-blue-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <button
          className="mt-4 text-yellow-300 hover:underline flex items-center"
          onClick={() => setShowHint(!showHint)}
        >
          <FaLightbulb className="mr-2" />{" "}
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
        {showHint && (
          <p className="mt-2 text-yellow-300">
            💡 {questions[questionIndex].hint}
          </p>
        )}
      </div>
    </div>
  );
};

export default LogicGames;
