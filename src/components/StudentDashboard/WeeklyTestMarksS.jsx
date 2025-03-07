import { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    const storedMarks = JSON.parse(localStorage.getItem("weeklyTestMarks")) || [];
    setMarksData(storedMarks);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-black to-[#1e3a8a] min-h-screen text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Weekly Test Marks</h2>
      
      {/* Display Weekly Test Marks */}
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-center border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border border-gray-600">Student ID</th>
              <th className="p-3 border border-gray-600">Name</th>
              <th className="p-3 border border-gray-600">Subject</th>
              <th className="p-3 border border-gray-600">Marks</th>
            </tr>
          </thead>
          <tbody>
            {marksData.length > 0 ? (
              marksData.map((entry, index) => (
                <tr key={index} className="bg-gray-700 border border-gray-600">
                  <td className="p-3">{entry.studentId}</td>
                  <td className="p-3">{entry.name}</td>
                  <td className="p-3">{entry.subject}</td>
                  <td className="p-3">{entry.marks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-gray-400">
                  No test marks available yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
