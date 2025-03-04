import { useState } from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaTrophy, FaUser, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
  
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // State to track selected poll option
  const [selectedPoll, setSelectedPoll] = useState(null);

  // Get number of days in the current month
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();

  const games = [
    { name: "Memory Boost", path: "/memoryBoost" },
    { name: "Logic Games", path: "/logicGames" },
    { name: "Math Challenges", path: "/mathChallenges" },
    { name: "Puzzle Quest", path: "/puzzleQuest" },
    { name: "Riddles & Fun", path: "/Riddles-fun" },
    { name: "Speed Test", path: "/speedTest" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-gray-800 py-6 px-8 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-bold">🎮 Brain Boost Hub</h1>
        <div className="flex items-center space-x-6">
          <FaUser className="text-2xl" aria-label="User Profile" />
          <span className="text-lg">Welcome, Student!</span>
        </div>
      </header>

      {/* Profile Section */}
      <section className="p-8 flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-xl shadow-lg mx-6 mt-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Your Profile</h2>
          <p className="text-gray-400">Track your progress & stay ahead!</p>
        </div>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <div className="text-center">
            <FaTrophy
              className="text-4xl text-yellow-400"
              aria-label="Trophy Icon"
            />
            <p className="text-lg">Score: 1250</p>
          </div>
          <div className="text-center">
            <FaChartLine
              className="text-4xl text-green-400"
              aria-label="Chart Icon"
            />
            <p className="text-lg">Streak: 10 Days</p>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
        {games.map((game, index) => (
          <Link to={game.path} key={index}>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-700 cursor-pointer transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaGamepad className="text-4xl mb-4 text-blue-400" aria-label="Gamepad Icon" />
              <h3 className="text-white text-xl font-semibold">{game.name}</h3>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Daily Challenge */}
      <section className="p-8 bg-gray-800 mx-6 rounded-xl shadow-lg mt-6">
        <h2 className="text-2xl font-bold text-center">
          🔥 Daily Brain Challenge
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Solve this to earn extra points!
        </p>
        <div className="bg-gray-700 p-6 mt-4 rounded-lg shadow-md text-center text-lg">
          &quot;What comes next in the series: 2, 6, 12, 20, ?&quot;
        </div>
      </section>

      {/* Leaderboard */}
      <section className="p-8 mx-6 mt-6">
        <h2 className="text-2xl font-bold text-center">🏆 Leaderboard</h2>
        <div className="bg-gray-800 p-6 mt-4 rounded-lg shadow-lg">
          {["Alice", "Bob", "Charlie", "David", "Eve"].map((user, index) => (
            <div
              key={index}
              className="flex justify-between p-2 border-b border-gray-700"
            >
              <span>
                {index + 1}. {user}
              </span>
              <span>{1500 - index * 100} pts</span>
            </div>
          ))}
        </div>
      </section>

      {/* Streak Calendar (Dynamic) */}
      <section className="p-8 mx-6 mt-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">📅 Streak Calendar</h2>
        <p className="text-gray-400 text-center">
          Maintain your learning streak!
        </p>
        <div className="grid grid-cols-7 gap-2 mt-4">
          {[...Array(daysInMonth)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 flex items-center justify-center rounded-md 
              ${i < 10 ? "bg-green-400" : "bg-gray-600"}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Community Poll (Interactive) */}
      <section className="p-8 mx-6 mt-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">🗳️ Community Poll</h2>
        <p className="text-gray-400 text-center">
          Vote and see what others think!
        </p>
        <div className="mt-4 bg-gray-700 p-6 rounded-lg">
          <p className="text-lg">What’s your favorite type of brain game?</p>
          {[
            "Logic Puzzles",
            "Math Games",
            "Memory Boosters",
            "Trivia Quizzes",
          ].map((option, i) => (
            <button
              key={i}
              onClick={() => setSelectedPoll(option)}
              className={`block w-full mt-2 p-2 rounded-lg 
                ${selectedPoll === option
                  ? "bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-400"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-800 text-center mt-8">
        <p>🚀 Keep Learning & Stay Sharp! 🚀</p>
      </footer>
    </div>
  );
};

export default Dashboard;
