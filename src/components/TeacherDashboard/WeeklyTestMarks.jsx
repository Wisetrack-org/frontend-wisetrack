import { useState } from "react";

const WeeklyTestMarks = () => {
  const [marksData, setMarksData] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && name && subject && marks) {
      const newEntry = { studentId, name, subject, marks };
      
      const updatedMarksData = [...marksData, newEntry];
      setMarksData(updatedMarksData);
      
      // Save to localStorage
      localStorage.setItem("weeklyTestMarks", JSON.stringify(updatedMarksData));
  
      // Clear input fields
      setStudentId("");
      setName("");
      setSubject("");
      setMarks("");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-black to-[#1e3a8a] min-h-screen text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Weekly Test Marks Upload</h2>
      
      {/* Form for Entering Marks */}
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-300">Student ID</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full p-2 text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Marks</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="w-full p-2 text-black rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white font-bold"
        >
          Upload Marks
        </button>
      </form>
      
      {/* Display Uploaded Marks */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-center mb-4">Uploaded Marks</h3>
        <div className="overflow-x-auto">
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
              {marksData.map((entry, index) => (
                <tr key={index} className="bg-gray-700 border border-gray-600">
                  <td className="p-3">{entry.studentId}</td>
                  <td className="p-3">{entry.name}</td>
                  <td className="p-3">{entry.subject}</td>
                  <td className="p-3">{entry.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTestMarks;