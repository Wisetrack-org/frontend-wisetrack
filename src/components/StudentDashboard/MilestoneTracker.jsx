import React, { useState } from "react";
import { FaFlagCheckered, FaPlus, FaTasks, FaCalendarAlt, FaChartLine, FaGift } from "react-icons/fa";

const MilestoneTracker = () => {
  const [milestones, setMilestones] = useState([
    { id: 1, title: "Complete Assignment Quality Validator", progress: 70, deadline: "March 20, 2025" },
    { id: 2, title: "Implement AI/ML Model", progress: 50, deadline: "April 10, 2025" },
    { id: 3, title: "Enhance UI/UX Design", progress: 30, deadline: "April 25, 2025" },
  ]);
  const [rewardPoints, setRewardPoints] = useState(1200);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg text-xl font-semibold text-center">
        <FaFlagCheckered className="inline-block text-white text-3xl mr-2" />
        Milestone Tracker
      </div>

      {/* Rewards and Consistency */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg flex justify-between items-center text-center shadow-md">
        <div className="flex flex-col items-center">
          <FaGift className="text-yellow-400 text-3xl" />
          <p className="text-lg font-semibold mt-1">{rewardPoints} Points</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine className="text-green-400 text-3xl" />
          <p className="text-lg font-semibold mt-1">Consistency: 85%</p>
        </div>
      </div>

      {/* Milestone List */}
      <div className="mt-6 space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{milestone.title}</h2>
              <p className="text-sm text-gray-400">Deadline: {milestone.deadline}</p>
            </div>
            <div className="mt-2 h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${milestone.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2">{milestone.progress}% completed</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-3">
        <button className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform duration-300">
          <FaPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default MilestoneTracker;