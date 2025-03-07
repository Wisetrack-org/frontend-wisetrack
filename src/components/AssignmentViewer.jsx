import { useState, useEffect } from "react";
import axios from "axios";

const AssignmentViewer = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/assignments")
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => console.error("Error fetching assignments:", error));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Assignments</h1>
      
      {assignments.length === 0 ? (
        <p className="text-center text-gray-400">No assignments available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((assignment, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{assignment.name}</h2>
              <p className="text-gray-400">Subject: {assignment.subject}</p>
              <p className="text-red-400">Due Date: {new Date(assignment.dueDate).toDateString()}</p>
              <a
                href={assignment.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-400 hover:underline"
              >
                View Assignment
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignmentViewer;
