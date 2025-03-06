import React, { useState } from "react";
import { FaTools, FaLightbulb, FaCode, FaTrophy, FaListAlt, FaChartLine } from "react-icons/fa";

const SkillDevelopment = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "Python Programming", progress: 60 },
    { id: 2, name: "Data Structures & Algorithms", progress: 40 },
    { id: 3, name: "Machine Learning", progress: 20 },
  ]);

  const [challenges] = useState([
    "Solve a Leetcode Problem",
    "Learn React",
    "Learn SQL Joins",
  ]);

  const [xp, setXp] = useState(200);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg text-xl font-semibold text-center">
        <FaTools className="inline-block text-white text-3xl mr-2" />
        Skill Development Module
      </div>

      {/* XP & Leaderboard */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg flex justify-between">
        <p className="flex items-center"><FaTrophy className="text-yellow-400 mr-2" /> XP: {xp}</p>
        <p className="flex items-center"><FaChartLine className="text-green-400 mr-2" /> Leaderboard Rank: #5</p>
      </div>

      {/* Skills Progress */}
      <div className="mt-6 space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{skill.name}</h2>
              <p className="text-sm text-gray-400">{skill.progress}% completed</p>
            </div>
            <div className="mt-2 h-3 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Challenges */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaLightbulb className="text-yellow-300 mr-2" /> Daily Challenges
        </h3>
        <ul className="list-disc pl-4">
          {challenges.map((challenge, index) => (
            <li key={index} className="mb-1">{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Project-Based Learning */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaCode className="text-green-400 mr-2" /> Project-Based Learning
        </h3>
        <p>Work on real-world projects like a Portfolio Website, Chatbot, or Weather App.</p>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-3">
        <button className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform duration-300">
          <FaListAlt className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SkillDevelopment;