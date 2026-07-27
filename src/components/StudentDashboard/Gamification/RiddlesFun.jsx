import { useState, useEffect } from "react";

const RiddlesFun = () => {
  const [riddleIndex, setRiddleIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // Timer for each riddle
  const [hintVisible, setHintVisible] = useState(0); // Progressive hint
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode toggle

  const riddles = [
    {
      question:
        "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
      answer: "Echo",
      hints: ["It’s a sound.", "It repeats.", "Think of nature."],
    },
    {
      question:
        "You see a house with two doors. One leads to freedom, and the other to a dungeon. Which one do you choose?",
      answer: "The one with a key",
      hints: ["It’s related to locks.", "One door is safer.", "Choose wisely."],
    },
    {
      question:
        "I’m tall when I’m young, and I’m short when I’m old. What am I?",
      answer: "Candle",
      hints: ["It can melt.", "It has a wick.", "It provides light."],
    },
    {
      question: "What has keys but can’t open locks?",
      answer: "Piano",
      hints: [
        "It makes music.",
        "It has black and white keys.",
        "You play it.",
      ],
    },
    {
      question:
        "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter M",
      hints: [
        "Look closely at the question.",
        "It’s in words.",
        "It’s a letter.",
      ],
    },
  ];

  useEffect(() => {
    if (timer > 0 && !isAnswered) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, isAnswered]);

  const handleNextRiddle = () => {
    if (
      userAnswer.toLowerCase() === riddles[riddleIndex].answer.toLowerCase()
    ) {
      setScore(score + 1);
    }
    setUserAnswer("");
    setIsAnswered(false);
    setHintVisible(0); // Reset hint visibility
    setTimer(30); // Reset timer
    setRiddleIndex((prev) => (prev + 1) % riddles.length);
  };

  const handleSubmitAnswer = () => {
    if (
      userAnswer.toLowerCase() === riddles[riddleIndex].answer.toLowerCase()
    ) {
      setIsAnswered(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Leaderboard feature using localStorage
  useEffect(() => {
    const highScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    if (score > 0) {
      highScores.push({ score });
      highScores.sort((a, b) => b.score - a.score); // Sort by score, descending
      localStorage.setItem(
        "leaderboard",
        JSON.stringify(highScores.slice(0, 5))
      );
    }
  }, [score]);

  const getLeaderboard = () => {
    const highScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    return highScores;
  };

  const playSound = (isCorrect) => {
    const audio = new Audio(
      isCorrect ? "/sounds/correct.mp3" : "/sounds/incorrect.mp3"
    );
    audio.play();
  };

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900"
          : "bg-white text-black"
      } min-h-screen text-white flex flex-col items-center justify-center px-6 py-12 transition-all duration-500`}
    >
      <div className="p-8 rounded-2xl shadow-xl bg-gray-800 max-w-lg w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-center text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Riddle Me This
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
          >
            {isDarkMode ? "🌙" : "🌞"}
          </button>
        </div>

        <div className="mb-6 text-xl">
          <p className="mb-4">{riddles[riddleIndex].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer..."
            className="w-full p-4 mb-6 bg-gray-700 text-white rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
          <button
            onClick={handleSubmitAnswer}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105"
          >
            Submit Answer
          </button>

          {isAnswered && (
            <div className="mt-4 text-lg font-semibold text-green-500 animate__animated animate__fadeIn">
              Correct! Your score: {score}
              {playSound(true)}
            </div>
          )}

          {!isAnswered && userAnswer && (
            <div className="mt-4 text-lg font-semibold text-red-500 animate__animated animate__fadeIn">
              Incorrect! The right answer is:{" "}
              <span className="text-yellow-400">
                {riddles[riddleIndex].answer}
              </span>
              {playSound(false)}
            </div>
          )}

          <div className="mt-4 text-md text-gray-300">Time Left: {timer}s</div>

          <button
            onClick={() => setHintVisible((prev) => (prev + 1) % 3)}
            className="w-full py-3 mt-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105"
          >
            {hintVisible > 0 ? "Hide Hint" : "Show Hint"}
          </button>

          {hintVisible > 0 && (
            <div className="mt-4 text-lg text-gray-400">
              Hint: {riddles[riddleIndex].hints[hintVisible - 1]}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleNextRiddle}
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105"
          >
            Next Riddle
          </button>
          <div className="text-md text-gray-300">Score: {score}</div>
        </div>

        <div className="mt-6 text-lg text-center text-gray-400">
          <h2>Leaderboard:</h2>
          <ul>
            {getLeaderboard().map((entry, index) => (
              <li key={index}>
                #{index + 1}: {entry.score} points
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiddlesFun;
