



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const breathingSteps = {
//   "Inhale-Exhale": ["Inhale", "Exhale"],
//   "Box Breathing": ["Inhale", "Hold", "Exhale", "Hold"],
//   "Alternate Nostril Breathing": ["Inhale Left", "Hold", "Exhale Right", "Inhale Right", "Hold", "Exhale Left"],
//   "Breathing Challenge": ["Inhale", "Hold", "Exhale", "Hold"]
// };

// const GamesPage = () => {
//   const [activeGame, setActiveGame] = useState(null);
//   const [stepIndex, setStepIndex] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (activeGame && running) {
//       const steps = breathingSteps[activeGame.name];
//       const interval = setInterval(() => {
//         setStepIndex((prev) => (prev + 1) % steps.length);
//       }, 4000); // Change every 4 seconds

//       return () => clearInterval(interval);
//     }
//   }, [activeGame, running]);

//   const startGame = (game) => {
//     setActiveGame(game);
//     setStepIndex(0);
//     setRunning(true);
//   };

//   const stopGame = () => {
//     setActiveGame(null);
//     setRunning(false);
//   };

//   return (
//     <div className="bg-[#0a0a1a] text-white min-h-screen p-6 text-center flex flex-col items-center">
//       <h2 className="text-3xl font-bold mb-6">🎮 Breathing & Meditation Games</h2>

//       {activeGame ? (
//         <div className="p-6 bg-blue-600 rounded-lg shadow-lg text-center w-80">
//           <h3 className="text-2xl font-bold mb-3">{activeGame.name}</h3>
//           <p className="text-lg">{activeGame.description}</p>

//           {/* Breathing Instruction */}
//           <div className="mt-6 text-3xl font-bold animate-bounce">
//             {breathingSteps[activeGame.name][stepIndex]}
//           </div>

//           {/* Stop Button */}
//           <button onClick={stopGame} className="mt-6 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-800">
//             Stop
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
//           {Object.keys(breathingSteps).map((gameName) => (
//             <div key={gameName} className="p-6 bg-[#1e3a8a] rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-3">{gameName}</h3>
//               <p className="text-sm">A guided breathing technique.</p>
//               <button 
//                 onClick={() => startGame({ name: gameName })}
//                 className="mt-4 px-6 py-2 rounded-lg bg-white text-black font-bold hover:bg-gray-200"
//               >
//                 Start Game
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Back Button */}
//       <div className="mt-6">
//         <Link to="/">
//           <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all">
//             Back to Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default GamesPage;







import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const breathingSteps = {
  "Inhale-Exhale": ["Inhale", "Exhale"],
  "Box Breathing": ["Inhale", "Hold", "Exhale", "Hold"],
  "Alternate Nostril Breathing": ["Inhale Left", "Hold", "Exhale Right", "Inhale Right", "Hold", "Exhale Left"],
};

const GamesPage = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [challengeTime, setChallengeTime] = useState(60); // 60 sec timer for Breathing Challenge
  const [holdingBreath, setHoldingBreath] = useState(false);

  useEffect(() => {
    if (activeGame && running && activeGame.name !== "Breathing Challenge") {
      const steps = breathingSteps[activeGame.name];
      const interval = setInterval(() => {
        setStepIndex((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeGame, running]);

  useEffect(() => {
    if (holdingBreath && challengeTime > 0) {
      const timer = setTimeout(() => setChallengeTime((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (challengeTime === 0) {
      setHoldingBreath(false);
      alert("Great job! You held your breath for 60 seconds! 🎉");
    }
  }, [holdingBreath, challengeTime]);

  const startGame = (game) => {
    setActiveGame(game);
    setStepIndex(0);
    setRunning(true);

    if (game.name === "Breathing Challenge") {
      setChallengeTime(60);
      setHoldingBreath(true);
    }
  };

  const stopGame = () => {
    setActiveGame(null);
    setRunning(false);
    setHoldingBreath(false);
    setChallengeTime(60);
  };

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen p-6 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">🎮 Breathing & Meditation Games</h2>

      {activeGame ? (
        <div className="p-6 bg-blue-600 rounded-lg shadow-lg text-center w-80">
          <h3 className="text-2xl font-bold mb-3">{activeGame.name}</h3>
          <p className="text-lg">{activeGame.description}</p>

          {activeGame.name === "Breathing Challenge" ? (
            <div className="mt-6 text-3xl font-bold text-yellow-300">
              {holdingBreath ? `Hold... ${challengeTime}s` : "Get Ready!"}
            </div>
          ) : (
            <div className="mt-6 text-3xl font-bold animate-bounce">
              {breathingSteps[activeGame.name][stepIndex]}
            </div>
          )}

          <button onClick={stopGame} className="mt-6 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-800">
            Stop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {Object.keys(breathingSteps).map((gameName) => (
            <div key={gameName} className="p-6 bg-[#1e3a8a] rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{gameName}</h3>
              <p className="text-sm">A guided breathing technique.</p>
              <button 
                onClick={() => startGame({ name: gameName })}
                className="mt-4 px-6 py-2 rounded-lg bg-white text-black font-bold hover:bg-gray-200"
              >
                Start Game
              </button>
            </div>
          ))}

          {/* Breathing Challenge Game */}
          <div className="p-6 bg-[#1e3a8a] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Breathing Challenge</h3>
            <p className="text-sm">Try to hold your breath for 60 seconds!</p>
            <button
              onClick={() => startGame({ name: "Breathing Challenge" })}
              className="mt-4 px-6 py-2 rounded-lg bg-white text-black font-bold hover:bg-gray-200"
            >
              Start Challenge
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-6">
        <Link to="/">
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GamesPage;
