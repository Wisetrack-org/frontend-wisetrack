import { useState, useEffect } from "react";
import { FaPlay, FaRedoAlt, FaShareAlt } from "react-icons/fa";

const SpeedTest = () => {
  const [sentence, setSentence] = useState(
    "The quick brown fox jumps over the lazy dog."
  );
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [errors, setErrors] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [bgColor, setBgColor] = useState("bg-indigo-900");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputFocus, setInputFocus] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [testHistory, setTestHistory] = useState([]);

  const startTest = () => {
    setIsRunning(true);
    setIsCompleted(false);
    setTime(60);
    setUserInput("");
    setErrors(0);
    setWordsPerMinute(0);
    setAccuracy(0);
  };

  const calculateWPM = () => {
    const wordsTyped = userInput.trim().split(" ").length;
    const minutesElapsed = (60 - time) / 60;
    setWordsPerMinute(Math.round(wordsTyped / minutesElapsed));
  };

  const calculateAccuracy = () => {
    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === sentence[i]) correctChars++;
    }
    const accuracyPercentage = Math.round(
      (correctChars / sentence.length) * 100
    );
    setAccuracy(accuracyPercentage);
  };

  const saveTestHistory = () => {
    setTestHistory([
      ...testHistory,
      {
        wpm: wordsPerMinute,
        accuracy,
        errors,
        date: new Date().toLocaleString(),
      },
    ]);
    setLeaderboard([
      ...leaderboard,
      { wpm: wordsPerMinute, date: new Date().toLocaleString() },
    ]);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setBgColor(isDarkMode ? "bg-gray-900" : "bg-indigo-900");
  };

  const handleShare = () => {
    alert("Sharing functionality coming soon!");
  };

  const updateAchievements = () => {
    if (wordsPerMinute > 50) {
      setAchievements((prevAchievements) => [
        ...prevAchievements,
        "Speedster: Typing speed > 50 WPM",
      ]);
    }
    if (accuracy === 100) {
      setAchievements((prevAchievements) => [
        ...prevAchievements,
        "Perfect Accuracy: 100% accuracy",
      ]);
    }
  };

  const updateSentence = () => {
    setSentence("A quick movement of the enemy will jeopardize six guns."); // Example new sentence
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(timer);
          setIsRunning(false);
          setIsCompleted(true);
          calculateWPM();
          calculateAccuracy();
          saveTestHistory();
          updateAchievements(); // Update achievements after test completion
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (userInput !== sentence.slice(0, userInput.length)) {
      setErrors(errors + 1);
    }
  }, [userInput]);

  return (
    <div
      className={`${bgColor} min-h-screen flex flex-col items-center justify-start text-white overflow-y-scroll`}
    >
      <div className="w-full max-w-3xl p-10 rounded-xl shadow-2xl bg-gray-800 backdrop-blur-lg transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-white font-medium transition duration-300"
          >
            Toggle Dark Mode
          </button>
        </div>

        <h1 className="text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600">
          Speed Typing Test
        </h1>

        <div className="mb-6 text-lg text-center text-gray-300">
          <p className="text-xl">Type the following sentence:</p>
          <div className="my-4 p-6 bg-gray-700 rounded-md text-lg text-gray-100 shadow-xl">
            {sentence}
          </div>
        </div>

        <textarea
          className={`w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 transition-all duration-200 ease-in-out ${
            inputFocus ? "ring-4 ring-indigo-400" : ""
          }`}
          value={userInput}
          onChange={handleInputChange}
          disabled={isCompleted}
          placeholder={isRunning ? "Start typing..." : "Test Completed!"}
          rows="4"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />

        <div className="flex justify-between items-center mt-6 text-lg">
          <div className="text-xl font-semibold">Time: {time}s</div>
          <div className="text-xl font-semibold">Errors: {errors}</div>
          <div className="text-xl font-semibold">Accuracy: {accuracy}%</div>
        </div>

        <div className="mt-6 flex justify-center items-center gap-6">
          {!isRunning && !isCompleted && (
            <button
              onClick={startTest}
              className="py-3 px-6 bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaPlay className="inline-block mr-2" />
              Start Test
            </button>
          )}

          {isCompleted && (
            <div className="text-xl font-semibold text-green-400">
              Test Completed! Your WPM: {wordsPerMinute} words/min
            </div>
          )}
        </div>

        {isCompleted && (
          <div className="mt-6 flex justify-center gap-6">
            <button
              onClick={startTest}
              className="py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-l text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaRedoAlt className="inline-block mr-2" />
              Restart Test
            </button>
            <button
              onClick={handleShare}
              className="py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-l text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaShareAlt className="inline-block mr-2" />
              Share Results
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={updateSentence}
            className="py-3 px-6 bg-gradient-to-r from-orange-600 to-yellow-600 hover:bg-gradient-to-l text-white rounded-md font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Next Sentence
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-gray-300">
            Achievements
          </h2>
          <ul className="mt-4">
            {achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <li key={index} className="text-lg text-green-400">
                  {achievement}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No achievements yet.</li>
            )}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-gray-300">
            Test History
          </h2>
          <ul className="mt-4">
            {testHistory.length > 0 ? (
              testHistory.map((test, index) => (
                <li key={index} className="py-2 px-4 border-b border-gray-600">
                  Test {index + 1}: WPM: {test.wpm}, Accuracy: {test.accuracy}%,
                  Errors: {test.errors}, Date: {test.date}
                </li>
              ))
            ) : (
              <li className="py-2 px-4 text-gray-400">No test history yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeedTest;
