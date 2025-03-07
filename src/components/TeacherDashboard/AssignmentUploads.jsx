// import React, { useState } from "react";

// const AssignmentUploads = ({ onUpload }) => {
//   const [assignmentName, setAssignmentName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [year, setYear] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleUpload = () => {
//     if (!assignmentName || !subject || !year || !dueDate) {
//       alert("Please fill all fields before uploading.");
//       return;
//     }

//     const newAssignment = { assignmentName, subject, year, dueDate };

//     // Call parent function to update state & local storage
//     onUpload(newAssignment);

//     // Clear input fields
//     setAssignmentName("");
//     setSubject("");
//     setYear("");
//     setDueDate("");
//   };

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4 text-center">Upload Assignment</h2>
      
//       <input
//         type="text"
//         placeholder="Assignment Name"
//         value={assignmentName}
//         onChange={(e) => setAssignmentName(e.target.value)}
//         className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white"
//       />

//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white"
//       />

//       <select
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//         className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white"
//       >
//         <option value="">Select Year</option>
//         <option value="1st">1st Year</option>
//         <option value="2nd">2nd Year</option>
//         <option value="3rd">3rd Year</option>
//         <option value="4th">4th Year</option>
//       </select>

//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white"
//       />

//       <button
//         onClick={handleUpload}
//         className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg font-semibold"
//       >
//         Upload Assignment
//       </button>
//     </div>
//   );
// };

// export default AssignmentUploads;



import React, { useState } from "react";

const AssignmentUploads = ({ onUpload }) => {
  const [assignmentName, setAssignmentName] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleUpload = () => {
    if (!assignmentName || !subject || !year || !dueDate) {
      alert("Please fill all fields before uploading.");
      return;
    }

    const newAssignment = { assignmentName, subject, year, dueDate };

    // Save to localStorage
    const existingAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
    const updatedAssignments = [...existingAssignments, newAssignment];
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));

    // Update Parent State
    if (typeof onUpload === "function") {
      onUpload(updatedAssignments);
    }

    // Clear input fields
    setAssignmentName("");
    setSubject("");
    setYear("");
    setDueDate("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg text-white border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          📑 Upload Assignment
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Assignment Name"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition duration-300"
          >
            Upload Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentUploads;
