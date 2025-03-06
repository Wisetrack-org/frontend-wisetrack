import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
        <h1 className="text-xl font-bold">Parent Dashboard</h1>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>

      <div className="px-5 py-6 flex-grow">


        {/* Sections */}
        {activeSection === 1 && (
          <div className="grid grid-cols-1 gap-4">
            <div
              className="bg-blue-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/attendance")}
            >
              Attendance of Student
            </div>
            <div
              className="bg-purple-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/exam-timetable")}
            >
              Exams Timetable
            </div>
            <div
              className="bg-green-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/student-progress")}
            >
              Student Progress
            </div>
          </div>
        )}

        {activeSection === 2 && (
          <div className="grid grid-cols-1 gap-4">
            <div
              className="bg-orange-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/university-counsellor")}
            >
              University Counsellor
            </div>
            <div
              className="bg-pink-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/weekly-test-marks")}
            >
              Weekly Test Marks
            </div>
            <div
              className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/results")}
            >
              Results
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-4 flex justify-center gap-6 border-t-4 border-blue-600 z-50">
        {[1, 2].map((num) => (
          <div
            key={num}
            className={`w-5 h-5 rounded-full cursor-pointer transition duration-300 ${
              activeSection === num ? "bg-blue-600 scale-110" : "bg-gray-600"
            }`}
            onClick={() => setActiveSection(num)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ParentDashboard;
