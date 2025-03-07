import { useState, useEffect } from "react";

const generateProblem = (difficulty) => {
  const num1 = Math.floor(Math.random() * 10 * difficulty);
  const num2 = Math.floor(Math.random() * 10 * difficulty);
  const operators = ["+", "-", "*", "/", "%", "**", "√", "sin", "cos", "tan"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num2 !== 0 ? (num1 / num2).toFixed(2) : 0;
      break;
    case "%":
      answer = num2 !== 0 ? num1 % num2 : 0;
      break;
    case "**":
      answer = Math.pow(num1, num2);
      break;
    case "√":
      answer = Math.sqrt(num1).toFixed(2);
      break;
    case "sin":
      answer = Math.sin(num1).toFixed(2);
      break;
    case "cos":
      answer = Math.cos(num1).toFixed(2);
      break;
    case "tan":
      answer = Math.tan(num1).toFixed(2);
      break;
  }

  return { question: `${operator}(${num1})`, answer: answer.toString() };
};

const MathChallenges = () => {
  const [mode, setMode] = useState("timed");
  const [problem, setProblem] = useState(generateProblem(1));
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [streak, setStreak] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (mode === "timed" && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [mode, timer]);

  useEffect(() => {
    if (streak === 5) setAchievements([...achievements, "🔥 5-Streak Genius"]);
    if (score >= 50) setAchievements([...achievements, "🏅 Math Prodigy"]);
  }, [streak, score]);

  const checkAnswer = () => {
    if (userAnswer === problem.answer) {
      setScore(score + 10);
      setStreak(streak + 1);
      setProblem(generateProblem(Math.min(10, Math.floor(streak / 5) + 1)));
    } else {
      setScore(score - 5);
      setAttempts(attempts - 1);
      if (attempts <= 1 && mode === "challenge") {
        alert("Challenge Over! You ran out of attempts!");
        setScore(0);
        setStreak(0);
        setAttempts(3);
      }
    }
    setUserAnswer("");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold">📊 Advanced Math Challenges</h1>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => setMode("timed")}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          ⏳ Timed
        </button>
        <button
          onClick={() => setMode("survival")}
          className="bg-red-500 px-4 py-2 rounded"
        >
          🛡️ Survival
        </button>
        <button
          onClick={() => setMode("streak")}
          className="bg-green-500 px-4 py-2 rounded"
        >
          🔥 Streak
        </button>
        <button
          onClick={() => setMode("challenge")}
          className="bg-purple-500 px-4 py-2 rounded"
        >
          ⚡ Challenge
        </button>
      </div>

      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold">Solve: {problem.question}</h2>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="mt-4 p-2 text-black w-full text-center"
          placeholder="Enter Answer"
        />
        <button
          onClick={checkAnswer}
          className="bg-green-500 px-4 py-2 mt-2 rounded"
        >
          Submit
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">
          🎯 Score: {score} | 🔥 Streak: {streak}{" "}
          {mode === "timed" && `| ⏳ Time: ${timer}s`}
        </p>
      </div>

      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold">🏆 Achievements</h2>
        {achievements.length > 0 ? (
          achievements.map((ach, index) => (
            <p key={index} className="text-yellow-400">
              {ach}
            </p>
          ))
        ) : (
          <p>No Achievements Yet</p>
        )}
      </div>

      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold">🏆 Leaderboard</h2>
        {[
          { name: "Alice", score: Math.floor(Math.random() * 3000) },
          { name: "Bob", score: Math.floor(Math.random() * 3000) },
          { name: "Charlie", score: Math.floor(Math.random() * 3000) },
          { name: "David", score: Math.floor(Math.random() * 3000) },
        ]
          .sort((a, b) => b.score - a.score)
          .map((user, index) => (
            <div
              key={index}
              className="flex justify-between p-2 border-b border-gray-700"
            >
              <span>
                {index + 1}. {user.name}
              </span>
              <span>{user.score} pts</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MathChallenges;
