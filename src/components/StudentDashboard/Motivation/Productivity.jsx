import { useState, useEffect } from "react";
import { Clock, CheckCircle, Target, Brain } from "lucide-react";
import { motion } from "framer-motion";

const productivityTips = [
  {
    title: "Pomodoro Technique",
    description:
      "Work for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.",
    icon: <Clock size={24} />,
  },
  {
    title: "Eat the Frog",
    description:
      "Tackle your hardest task first thing in the morning to boost motivation and productivity.",
    icon: <CheckCircle size={24} />,
  },
  {
    title: "Time Blocking",
    description:
      "Allocate specific time slots for tasks to stay organized and avoid multitasking.",
    icon: <Target size={24} />,
  },
  {
    title: "Mindful Breaks",
    description:
      "Take intentional breaks to refresh your focus and energy, improving long-term efficiency.",
    icon: <Brain size={24} />,
  },
];

const motivationalQuotes = [
  "Success is not the key to happiness. Happiness is the key to success.",
  "Productivity is never an accident. It is always the result of a commitment to excellence.",
  "Don't watch the clock; do what it does. Keep going.",
  "The way to get started is to quit talking and begin doing.",
];

const ProductivityTipsPage = () => {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [quote, setQuote] = useState(motivationalQuotes[0]);
  const [focusMode, setFocusMode] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [distractionsLogged, setDistractionsLogged] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setQuote(motivationalQuotes[randomIndex]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const logDistraction = () => {
    setDistractionsLogged([
      ...distractionsLogged,
      new Date().toLocaleTimeString(),
    ]);
  };

  const toggleFocusMode = () => {
    setFocusMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white transition-colors duration-300 ${
        focusMode ? "blur-sm" : ""
      }`}
    >
      <motion.div
        className="max-w-xl text-center p-6 bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-4">Productivity Tips</h1>
        <ul className="space-y-4 mb-6">
          {productivityTips.map((tip, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-700 rounded-lg flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-yellow-400">{tip.icon}</div>
              <div>
                <h2 className="text-xl font-semibold">{tip.title}</h2>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="bg-gray-700 p-4 rounded-lg mb-6 text-center">
          <h2 className="text-xl font-semibold mb-2">
            Customizable Work & Break Timers
          </h2>
          <p>
            Adjust your work and break durations for a personalized productivity
            experience.
          </p>
          <div className="mb-4">
            <label className="mr-2">Work (minutes):</label>
            <input
              type="number"
              value={workDuration}
              onChange={(e) => setWorkDuration(e.target.value)}
              className="w-16 p-1 text-black"
            />
            <label className="ml-4 mr-2">Break (minutes):</label>
            <input
              type="number"
              value={breakDuration}
              onChange={(e) => setBreakDuration(e.target.value)}
              className="w-16 p-1 text-black"
            />
          </div>
          <p className="text-2xl font-bold mb-2">{formatTime(time)}</p>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Motivational Quotes Generator
          </h2>
          <p className="mb-2">{quote}</p>
          <button
            onClick={generateQuote}
            className="px-4 py-2 bg-blue-500 text-black rounded-lg font-semibold"
          >
            Get Inspired
          </button>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Daily Progress Tracker</h2>
          <p>Track your completed tasks to monitor progress.</p>
          <p>Tasks Completed: {tasksCompleted}</p>
          <button
            onClick={() => setTasksCompleted(tasksCompleted + 1)}
            className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold"
          >
            Mark Task Complete
          </button>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Distraction Logger</h2>
          <p>Log distractions and analyze patterns to stay focused.</p>
          <button
            onClick={logDistraction}
            className="px-4 py-2 bg-red-500 text-black rounded-lg font-semibold"
          >
            Log Distraction
          </button>
          <ul className="mt-4 text-gray-300">
            {distractionsLogged.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Focus Mode</h2>
          <p>Toggle Focus Mode to remove distractions.</p>
          <button
            onClick={toggleFocusMode}
            className={`px-4 py-2 rounded-lg font-semibold ${
              focusMode ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {focusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductivityTipsPage;
