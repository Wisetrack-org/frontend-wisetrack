// import AssignmentUploader from "../TeacherDashboard/AssignmentUploads.jsx";
// import React, { useState, useEffect } from "react";
// import AssignmentViewer from "./AssignmentViewer";

// const AssignmentManager = () => {
//   const [assignments, setAssignments] = useState([]);

//   // Load assignments from local storage on page load
//   useEffect(() => {
//     const storedAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
//     setAssignments(storedAssignments);
//   }, []);

//   // Function to handle assignment upload
//   const handleUpload = (newAssignment) => {
//     const updatedAssignments = [...assignments, newAssignment];
//     setAssignments(updatedAssignments);

//     // Save to local storage
//     localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
//   };

//   return (
//     <div className="p-6 bg-gradient-to-br from-black to-[#1e3a8a] min-h-screen text-white">
//       <h1 className="text-2xl font-bold text-center mb-6">Assignment Manager</h1>
      
//       {/* Assignment Upload Component */}
//       <AssignmentUploader onUpload={handleUpload} />

//       {/* Assignment Viewer Component */}
//       <AssignmentViewer assignments={assignments} />
//     </div>
//   );
// };

// export default AssignmentManager;

import React, { useState, useEffect } from "react";
import AssignmentUploads from "../TeacherDashboard/AssignmentUploads";
import AssignmentViewer from "./AssignmentViewer";

const AssignmentManager = () => {
  const [assignments, setAssignments] = useState([]);

  // Load assignments from localStorage on mount
  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(storedAssignments);
  }, []);

  // Handle new assignment uploads
  const handleUpload = (newAssignment) => {
    const updatedAssignments = [...assignments, newAssignment];

    // Save to state
    setAssignments(updatedAssignments);

    // Save to localStorage
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <AssignmentUploads onUpload={handleUpload} />
      <AssignmentViewer assignments={assignments} />
    </div>
  );
};

export default AssignmentManager;
