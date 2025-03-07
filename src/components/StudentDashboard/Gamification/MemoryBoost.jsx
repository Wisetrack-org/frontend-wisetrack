import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

const MemoryBoost = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [showSequence, setShowSequence] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setGameOver(true);
      updateLeaderboard();
    }
  }, [gameStarted, timer]);

  const startGame = () => {
    setGameStarted(true);
    generateSequence();
  };

  const generateSequence = () => {
    let newSequence = [];
    for (let i = 0; i < 5; i++) {
      newSequence.push(Math.floor(Math.random() * 10));
    }
    setSequence(newSequence);
    setShowSequence(true);
    setTimeout(() => setShowSequence(false), 3000);
  };

  const handleUserInput = (num) => {
    setUserInput([...userInput, num]);
    if (userInput.length + 1 === sequence.length) {
      if (JSON.stringify([...userInput, num]) === JSON.stringify(sequence)) {
        setScore(score + 10);
        generateSequence();
        setUserInput([]);
      } else {
        setGameOver(true);
        updateLeaderboard();
      }
    }
  };

  const updateLeaderboard = () => {
    setLeaderboard([
      ...leaderboard,
      { score: score, date: new Date().toLocaleString() },
    ]);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        🧠 Memory Boost Challenge
      </h1>
      <p className="text-lg text-center text-gray-400 mb-6">
        Test and improve your memory skills with our engaging brain exercises.
      </p>

      {/* Game Instructions */}
      <section className="mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">📜 Game Rules & Instructions</h2>
        <p className="text-gray-400 mt-2">
          1️⃣ A sequence of numbers will be shown for a few seconds.
        </p>
        <p className="text-gray-400">
          2️⃣ Memorize the sequence before it disappears.
        </p>
        <p className="text-gray-400">
          3️⃣ Enter the numbers in the correct order.
        </p>
        <p className="text-gray-400">
          4️⃣ Earn points for every correct sequence!
        </p>
      </section>

      {/* Game Play */}
      {gameOver ? (
        <div className="text-center p-6 bg-red-500 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold">Game Over! 🎮</h2>
          <p className="text-lg">Your Final Score: {score}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 rounded-lg"
          >
            Restart
          </button>
        </div>
      ) : (
        <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold">🕒 Timer: {timer}s</h2>
          <h3 className="text-xl mt-4">🎯 Score: {score}</h3>

          {showSequence ? (
            <div className="text-3xl font-bold text-yellow-400 mt-6">
              {sequence.join(" ")}
            </div>
          ) : (
            <div className="flex justify-center space-x-4 mt-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  className="p-4 bg-gray-700 rounded-lg"
                  onClick={() => handleUserInput(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          )}

          {!gameStarted && (
            <button
              onClick={startGame}
              className="mt-6 px-6 py-2 bg-blue-500 rounded-lg text-xl"
            >
              Start Game
            </button>
          )}
        </div>
      )}

      {/* Leaderboard */}
      <section className="mt-10 p-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
        <ul className="mt-4 text-gray-400">
          {leaderboard.length > 0 ? (
            leaderboard.map((entry, index) => (
              <li key={index} className="py-2">
                🔥 {entry.date}: {entry.score} points
              </li>
            ))
          ) : (
            <p className="text-gray-500">No scores yet. Be the first!</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default MemoryBoost;
