// import React, { useState, useEffect } from "react";

// const AssignmentViewer = ({ assignments = [] }) => {
//   const [selectedYear, setSelectedYear] = useState("1st");

//   useEffect(() => {
//     // Load previously selected year from local storage
//     const storedYear = localStorage.getItem("selectedYear");
//     if (storedYear) {
//       setSelectedYear(storedYear);
//     }
//   }, []);

//   const handleYearChange = (e) => {
//     const year = e.target.value;
//     setSelectedYear(year);
//     localStorage.setItem("selectedYear", year);
//   };

//   const filteredAssignments = assignments.filter((assignment) => assignment.year === selectedYear);

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto mt-6">
//       <h2 className="text-xl font-semibold mb-4 text-center">Assignments</h2>

//       <select
//         value={selectedYear}
//         onChange={handleYearChange}
//         className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded text-white"
//       >
//         <option value="1st">1st Year</option>
//         <option value="2nd">2nd Year</option>
//         <option value="3rd">3rd Year</option>
//         <option value="4th">4th Year</option>
//       </select>

//       {filteredAssignments.length > 0 ? (
//         <ul className="space-y-4">
//           {filteredAssignments.map((assignment, index) => (
//             <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold text-blue-400">{assignment.assignmentName}</h3>
//               <p className="text-sm text-gray-400">Subject: {assignment.subject}</p>
//               <p className="text-sm text-gray-400">Due Date: {assignment.dueDate}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-400 text-center">No assignments available for {selectedYear} Year.</p>
//       )}
//     </div>
//   );
// };

// export default AssignmentViewer;


import React, { useState, useEffect } from "react";

const AssignmentViewer = ({ assignments }) => {
  const [selectedYear, setSelectedYear] = useState("1st");
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  useEffect(() => {
    // Load previously selected year from localStorage
    const storedYear = localStorage.getItem("selectedYear");
    if (storedYear) {
      setSelectedYear(storedYear);
    }
  }, []);

  useEffect(() => {
    // Filter assignments when the selected year changes
    const storedAssignments = JSON.parse(localStorage.getItem("assignments")) || assignments;
    setFilteredAssignments(storedAssignments.filter((assignment) => assignment.year === selectedYear));
  }, [selectedYear, assignments]);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    localStorage.setItem("selectedYear", year);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg text-white border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">📑 View Assignments</h2>

        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full p-3 mb-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>

        {filteredAssignments.length > 0 ? (
          <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {filteredAssignments.map((assignment, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
                <h3 className="text-lg font-semibold text-blue-400">{assignment.assignmentName}</h3>
                <p className="text-sm text-gray-400">Subject: {assignment.subject}</p>
                <p className="text-sm text-gray-400">Due Date: {assignment.dueDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No assignments available for {selectedYear} Year.</p>
        )}
      </div>
    </div>
  );
};

export default AssignmentViewer;
