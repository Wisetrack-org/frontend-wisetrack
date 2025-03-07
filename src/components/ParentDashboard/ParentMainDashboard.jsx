import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, BarChart, UserCheck, GraduationCap, Clock, FileText, HelpCircle } from "lucide-react";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between bg-blue-700 items-center p-4 shadow-lg">
        <h1 className="text-xl font-bold">Parent Dashboard</h1>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>

      <div className="px-6 py-6 flex-grow">
        {/* Sections */}
        {activeSection === 1 && (
          <div className="grid grid-cols-1 gap-6">
            <div
              className="bg-blue-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-blue-800"
              onClick={() => navigate("/attendance")}
            >
              <UserCheck size={24} /> <span>Attendance of Student</span>
            </div>
            <div
              className="bg-purple-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-purple-800"
              onClick={() => navigate("/timetableView")}
            >
              <Calendar size={24} /> <span>Exams Timetable</span>
            </div>
            <div
              className="bg-green-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-green-800"
              onClick={() => navigate("/student-progress")}
            >
              <BarChart size={24} /> <span>Student Progress</span>
            </div>
            <div
              className="bg-orange-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-orange-800"
              onClick={() => navigate("/counsellorPage")}
            >
              <HelpCircle size={24} /> <span>University Counsellor</span>
            </div>
            <div
              className="bg-pink-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-pink-800"
              onClick={() => navigate("/weeklyTestMarksS")}
            >
              <FileText size={24} /> <span>Weekly Test Marks</span>
            </div>
            <div
              className="bg-gray-700 p-5 rounded-lg text-center cursor-pointer flex items-center gap-3 transition hover:bg-gray-800"
              onClick={() => navigate("/results")}
            >
              <GraduationCap size={24} /> <span>Results</span>
            </div>
          </div>
        )}


      </div>


    </div>
  );
};

export default ParentDashboard;
