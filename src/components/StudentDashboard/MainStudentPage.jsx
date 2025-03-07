
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSection from "./WelcomeSection";
import Schedule from "./Schedule"
import TodoList from "./TodoList"
import { FaGamepad, FaClipboardList, FaChalkboardTeacher, FaBook, FaExclamationCircle } from "react-icons/fa";
import { FaBookOpen, FaPrayingHands, FaChartLine, FaCode, FaStickyNote } from "react-icons/fa";
import { FaCalendarAlt, FaClipboardCheck, FaTrophy, FaProjectDiagram } from "react-icons/fa";
import { FaFlagCheckered, FaMedal, FaLightbulb, FaBriefcase } from "react-icons/fa";
import GetAnnouncement from "../Announcement/GetAnnouncement";


const MainStudentPage = () => {
  const [activeSection, setActiveSection] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen ">
      {/* Navbar */}
      <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
        <h1 className="text-xl font-bold">Student Dashboard</h1>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>

      <div className="px-5 pd-20">



        {/* Section 1 - Home */}
        {activeSection === 1 && (
          <div>

            {/* Greeting & Quote */}
            <div className="mt-4 text-center">
              <WelcomeSection />
            </div>
            {/* schedule */}
            <div className="mt-4 text-center">
              <Schedule />
            </div>

            {/* To-do */}
            <div className="mt-4 text-center">
              <TodoList />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div
                className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/gamification")}
              >
                <FaGamepad className="text-white text-3xl mb-2" />
                <p className="text-white font-semibold">Gamification</p>
              </div>

              <div
                className="bg-gradient-to-r from-purple-900 to-purple-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/dropoutPredictionForm")}
              >
                <FaClipboardList className="text-white text-3xl mb-2" />
                <p className="text-white font-semibold">Droupout Prediction</p>
              </div>

              <div
                className="bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/counsellorPage")}
              >
                <FaChalkboardTeacher className="text-white text-3xl mb-2" />
                <p className="text-white font-semibold text-center">University Counsellor</p>
              </div>

              <div
                className="bg-gradient-to-r from-yellow-900 to-yellow-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/assignments")}
              >
                <FaBook className="text-white text-3xl mb-2" />
                <p className="text-white font-semibold text-center">Assignment Uploading</p>
              </div>

              <div
                className="bg-gradient-to-r from-red-900 to-red-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer col-span-2"
                onClick={() => navigate("/studentComplaintBox")}
              >
                <FaExclamationCircle className="text-white text-3xl mb-2" />
                <p className="text-white font-semibold text-center">Complaint Box</p>
              </div>
            </div>
          </div>
        )}

        {/* Section 2 - Academic Progress */}
        {activeSection === 2 && (

          <div className="text-center">
            {/* Student Progress Header */}
            <div className="mt-4 text-center bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg text-xl font-semibold">
              Student Progress
            </div>

            {/* Student Progress Sections */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div
                className="bg-gradient-to-r from-purple-800 to-purple-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/additionalCourses")}
              >
                <FaBookOpen className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Courses</p>
              </div>

              <div
                className="bg-gradient-to-r from-green-800 to-green-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/yogaMeditation")}
              >
                <FaPrayingHands className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Yoga & Meditation</p>
              </div>

              <div
                className="bg-gradient-to-r from-yellow-800 to-yellow-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/weeklyTestMarksS")}
              >
                <FaChartLine className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Weekly Test Marks</p>
              </div>

              <div
                className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/codingPlatform")}
              >
                <FaCode className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Coding Platform</p>
              </div>

              <div
                className="bg-gradient-to-r from-red-800 to-red-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/studentNotesViewer")}
              >
                <FaStickyNote className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Notes</p>
              </div>

              <div
                className="bg-gradient-to-r from-pink-800 to-pink-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => navigate("/assignmentUpload")}
              >
                <FaBookOpen className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">Assignment Due Dates</p>
              </div>
            </div>
          </div>

        )}

        {/* Section 3 - Examination & Results */}
        {activeSection === 3 && (
          <div>
            {/* Announcement Box Header */}
            <div className="mt-4 text-center font-semibold">
              <GetAnnouncement />

              {/* Section Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div
                  className="bg-gradient-to-r from-purple-800 to-purple-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                  onClick={() => navigate("/timetableView")}
                >
                  <FaCalendarAlt className="text-white text-4xl mb-2" />
                  <p className="text-white font-semibold text-center">Exam Timetable</p>
                </div>

                <div
                  className="bg-gradient-to-r from-green-800 to-green-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                  onClick={() => navigate("/attendance")}
                >
                  <FaClipboardCheck className="text-white text-4xl mb-2" />
                  <p className="text-white font-semibold text-center">Attendance</p>
                </div>

                <div
                  className="bg-gradient-to-r from-yellow-800 to-yellow-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                  onClick={() => navigate("/marksDashboard")}
                >
                  <FaTrophy className="text-white text-4xl mb-2" />
                  <p className="text-white font-semibold text-center">Results</p>
                </div>

                <div
                  className="bg-gradient-to-r from-red-800 to-red-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
                  onClick={() => navigate("/projects")}
                >
                  <FaProjectDiagram className="text-white text-4xl mb-2" />
                  <p className="text-white font-semibold text-center">Project Topics</p>
                </div>
              </div>
            </div>

          </div>
        )}
        {/* Section 4 - Goals & Achievements */}
        {activeSection === 4 && (

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div
              className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
              onClick={() => navigate("/milestoneTracker")}

            >
              <FaFlagCheckered className="text-white text-4xl mb-2" />
              <p className="text-white font-semibold text-center">Milestone Tracker</p>
            </div>

            <div
              className="bg-gradient-to-r from-yellow-900 to-yellow-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
              onClick={() => navigate("/motivation")}

            >
              <FaMedal className="text-white text-4xl mb-2" />
              <p className="text-white font-semibold text-center">Motivation</p>
            </div>

            <div
              className="bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
              onClick={() => navigate("/skillDevlopment")}
            >
              <FaLightbulb className="text-white text-4xl mb-2" />
              <p className="text-white font-semibold text-center">Skill Development</p>
            </div>

            <div
              className="bg-gradient-to-r from-purple-900 to-purple-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 cursor-pointer"
              onClick={() => navigate("/carrerGoalModule")}
            >
              <FaBriefcase className="text-white text-4xl mb-2" />
              <p className="text-white font-semibold text-center">Career Goals</p>
            </div>
          </div>

        )}
      </div>
      <div className="bg-black p-10">

      </div>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-4 flex justify-center gap-6 border-t-4 border-blue-600 z-50">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`w-5 h-5 rounded-full cursor-pointer transition duration-300 ${activeSection === num ? "bg-blue-600 scale-110" : "bg-gray-600"
              }`}
            onClick={() => setActiveSection(num)}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default MainStudentPage;
