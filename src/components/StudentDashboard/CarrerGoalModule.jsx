import React, { useState, useEffect } from "react";
import { FaUserTie, FaGraduationCap, FaTasks, FaTrophy, FaLightbulb, FaChartLine, FaBriefcase, FaCertificate, FaNetworkWired, FaPhone } from "react-icons/fa";

const CareerGoalModule = () => {
  const [careerPath, setCareerPath] = useState("Software Engineer");
  const [progress, setProgress] = useState(40);
  const [certifications] = useState(["AWS Certified Developer", "Google Data Analytics"]);
  const [tasks] = useState(["Solve an Algorithm Challenge", "Write a Tech Blog", "Update Resume"]);
  const [xp, setXp] = useState(500);
  const [internships, setInternships] = useState([]);
  const [mentors, setMentors] = useState([
    { name: "John Doe", phone: "+1 123-456-7890" },
    { name: "Jane Smith", phone: "+1 987-654-3210" }
  ]);

  useEffect(() => {
    // Fetch internships dynamically based on the career path
    fetch(`https://api.example.com/internships?role=${careerPath}`)
      .then(response => response.json())
      .then(data => setInternships(data))
      .catch(error => console.error("Error fetching internships:", error));
  }, [careerPath]);

  return (
    <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg text-xl font-semibold text-center w-full max-w-3xl">
        <FaUserTie className="inline-block text-white text-3xl mr-2" /> Career Goal Module
      </div>
      
      {/* Career Path Selection */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg flex flex-col sm:flex-row justify-between w-full max-w-3xl">
        <p className="flex items-center"><FaGraduationCap className="text-yellow-400 mr-2" /> Career Path: {careerPath}</p>
        <p className="flex items-center"><FaChartLine className="text-green-400 mr-2" /> Progress: {progress}%</p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-6">
        {/* Skills & Learning Path */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FaLightbulb className="text-yellow-300 mr-2" /> Required Skills & Learning Path
          </h3>
          <p>Focus on mastering React.js, Data Structures, and System Design.</p>
        </div>

        {/* Certifications & Achievements */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FaCertificate className="text-blue-400 mr-2" /> Certifications Earned
          </h3>
          <ul className="list-disc pl-4">
            {certifications.map((cert, index) => (
              <li key={index} className="mb-1">{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Daily Career Tasks */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg w-full max-w-3xl">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaTasks className="text-green-400 mr-2" /> Daily Career Tasks
        </h3>
        <ul className="list-disc pl-4">
          {tasks.map((task, index) => (
            <li key={index} className="mb-1">{task}</li>
          ))}
        </ul>
      </div>

      {/* Internship & Job Listings */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg w-full max-w-3xl">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaBriefcase className="text-yellow-400 mr-2" /> Internship & Job Listings
        </h3>
        {internships.length > 0 ? (
          <ul className="list-disc pl-4">
            {internships.map((internship, index) => (
              <li key={index} className="mb-1">{internship.title} at {internship.company}</li>
            ))}
          </ul>
        ) : (
          <p>No internships available currently.</p>
        )}
      </div>

      {/* Mentor & Networking Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg w-full max-w-3xl">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaNetworkWired className="text-purple-400 mr-2" /> Connect with Mentors
        </h3>
        <ul className="list-disc pl-4">
          {mentors.map((mentor, index) => (
            <li key={index} className="mb-1 flex items-center">
              {mentor.name} - <FaPhone className="text-green-400 ml-2 mr-1" /> {mentor.phone}
            </li>
          ))}
        </ul>
      </div>

      {/* XP & Leaderboard */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg flex flex-col sm:flex-row justify-between w-full max-w-3xl">
        <p className="flex items-center"><FaTrophy className="text-yellow-400 mr-2" /> XP: {xp}</p>
        <p className="flex items-center"><FaChartLine className="text-green-400 mr-2" /> Leaderboard Rank: #3</p>
      </div>
    </div>
  );
};

export default CareerGoalModule;