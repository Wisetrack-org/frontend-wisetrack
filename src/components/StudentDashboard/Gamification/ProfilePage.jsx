import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaMedal, FaUsers, FaHistory } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfilePage = () => {
  const [profile] = useState({
    name: "Maxwell Blaze",
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Maxwell",
    level: 15,
    xp: 9200,
    nextLevelXP: 12000,
    rank: "Legendary Strategist",
    streak: 30,
    achievements: [
      "Mastermind",
      "Speedster",
      "Grand Champion",
      "Elite Thinker",
      "Puzzle King",
    ],
    friends: ["Liam Carter", "Sophia Wilson", "Daniel Brown", "Emma Johnson"],
    activityLog: [
      "Completed 'Ultimate Brain Challenge'",
      "Unlocked new badge 'Genius'",
      "Ranked up to Level 15",
      "Won 1st place in Logic Contest",
    ],
    gamePreferences: {
      logicPuzzles: true,
      memoryBoosters: true,
      mathGames: true,
      triviaQuizzes: true,
    },
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center overflow-y-auto">
      {/* Profile Header */}
      <motion.div
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-3xl text-center"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-400 shadow-lg"
        />
        <h2 className="text-3xl font-bold mt-3">{profile.name}</h2>
        <p className="text-gray-400 text-lg">{profile.rank}</p>
        <button className="mt-3 px-5 py-2 bg-blue-500 rounded-lg text-white flex items-center mx-auto hover:bg-blue-600">
          <FaUserEdit className="mr-2" /> Edit Profile
        </button>
      </motion.div>

      {/* XP Progress */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <h3 className="text-2xl font-bold">Level {profile.level}</h3>
        <div className="w-32 mx-auto mt-4">
          <CircularProgressbar
            value={(profile.xp / profile.nextLevelXP) * 100}
            text={`${profile.xp} XP`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#ff8c00",
              trailColor: "#555",
            })}
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <h3 className="text-2xl font-bold">Achievements</h3>
        <div className="flex justify-center mt-4 flex-wrap gap-4">
          {profile.achievements.map((ach, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 p-4 rounded-lg shadow-md w-36 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaMedal className="text-yellow-400 text-3xl mx-auto" />
              <p className="mt-2 text-sm">{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Friends */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <h3 className="text-2xl font-bold">Friends</h3>
        <div className="flex justify-center mt-4 flex-wrap gap-4">
          {profile.friends.map((friend, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 p-4 rounded-lg shadow-md w-36 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaUsers className="text-blue-400 text-3xl mx-auto" />
              <p className="mt-2 text-sm">{friend}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Log */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <h3 className="text-2xl font-bold">Recent Activity</h3>
        <div className="mt-4">
          {profile.activityLog.map((activity, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 p-3 rounded-lg shadow-md mt-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaHistory className="text-green-400 text-xl mx-auto" />
              <p className="mt-2 text-sm">{activity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
