// import React, { useState, useEffect } from "react";

// const UniversityComplaints = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
//     setComplaints(storedComplaints);
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4">📢 Student Complaints</h2>
//       {complaints.length === 0 ? (
//         <p className="text-gray-400 text-center">No complaints submitted yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {complaints.map((complaint, index) => (
//             <li
//               key={index}
//               className="p-3 rounded-lg bg-[#1e3a8a] border border-gray-600 shadow-md"
//             >
//               <p className="font-semibold">{complaint.subject}</p>
//               <p className="text-gray-300 text-sm">{complaint.message}</p>
//               <p className="text-xs text-right text-gray-400 mt-2">Submitted by: {complaint.studentName}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UniversityComplaints;



// import React, { useState, useEffect } from "react";

// const UniversityComplaints = () => {
//   const [complaints, setComplaints] = useState([]);

//   // Load complaints from local storage
//   useEffect(() => {
//     const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
//     setComplaints(storedComplaints);
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">📢 Student Complaints</h2>

//       {complaints.length === 0 ? (
//         <p className="text-gray-400 text-center">No complaints submitted yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {complaints.map((complaint, index) => (
//             <li key={index} className="p-4 rounded-lg bg-[#1e3a8a] border border-gray-600 shadow-md">
//               <p className="text-lg font-semibold text-white">📝 {complaint.text}</p>
//               <p className="text-gray-300 mt-1">📅 {complaint.timestamp}</p>
//               <p className="text-xs text-right text-gray-400 font-semibold">👤 {complaint.studentName}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UniversityComplaints;


import React, { useState, useEffect } from "react";

const UniversityComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  // Function to load complaints from localStorage
  const fetchComplaints = () => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  };

  useEffect(() => {
    fetchComplaints(); // Load data on mount

    // Listen for localStorage updates (real-time updates)
    const handleStorageChange = () => fetchComplaints();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">📢 Student Complaints</h2>

      {complaints.length === 0 ? (
        <p className="text-gray-400 text-center">No complaints submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {complaints.map((complaint, index) => (
            <li key={index} className="p-4 rounded-lg bg-[#1e3a8a] border border-gray-600 shadow-md">
              <p className="text-lg font-semibold text-white">📝 {complaint.text || "No description provided"}</p>
              <p className="text-gray-300 mt-1">📅 {complaint.timestamp || "Unknown date"}</p>
              <p className="text-xs text-right text-gray-400 font-semibold">👤 {complaint.studentName || "Anonymous"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UniversityComplaints;
