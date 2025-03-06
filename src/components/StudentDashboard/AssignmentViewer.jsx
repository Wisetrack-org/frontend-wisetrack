import React, { useState } from "react";

const AssignmentViewer = ({ assignments, studentYear }) => {
  const [selectedYear, setSelectedYear] = useState(studentYear);

  const filteredAssignments = (assignments || []).filter(
    (assignment) => (assignment.year || "").toString() === (selectedYear || "").toString()
  );

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Assignments</h2>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded text-white"
      >
        <option value="1st">1st Year</option>
        <option value="2nd">2nd Year</option>
        <option value="3rd">3rd Year</option>
        <option value="4th">4th Year</option>
      </select>

      {filteredAssignments.length > 0 ? (
        <ul className="space-y-4">
          {filteredAssignments.map((assignment, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
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
  );
};

export default AssignmentViewer;
