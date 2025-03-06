
// import React, { useState, useEffect } from "react";

// const StudentComplaintBox = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [newComplaint, setNewComplaint] = useState("");
//   const [studentName, setStudentName] = useState("");

//   // Load complaints from localStorage on component mount
//   useEffect(() => {
//     const savedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
//     setComplaints(savedComplaints);
//   }, []);

//   const submitComplaint = () => {
//     if (newComplaint.trim() === "" || studentName.trim() === "") return;

//     const newEntry = {
//       studentName,
//       text: newComplaint,
//       timestamp: new Date().toLocaleString(),
//     };

//     const updatedComplaints = [...complaints, newEntry];

//     // Save to local storage immediately
//     localStorage.setItem("complaints", JSON.stringify(updatedComplaints));

//     // Update state
//     setComplaints(updatedComplaints);
//     setNewComplaint("");
//     setStudentName("");
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">📢 Raise a Complaint</h2>

//       <input
//         type="text"
//         className="w-full p-3 mb-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none"
//         placeholder="Enter your name..."
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       />

//       <textarea
//         className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none"
//         placeholder="Describe your issue..."
//         value={newComplaint}
//         onChange={(e) => setNewComplaint(e.target.value)}
//       ></textarea>

//       <button
//         onClick={submitComplaint}
//         className="w-full mt-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
//       >
//         Submit Complaint
//       </button>

//       <h3 className="text-xl font-semibold mt-6">📜 Previous Complaints</h3>
//       <ul className="mt-3 space-y-3">
//         {complaints.length === 0 ? (
//           <p className="text-gray-400 text-center">No complaints submitted.</p>
//         ) : (
//           complaints.map((complaint, index) => (
//             <li key={index} className="p-4 rounded-lg bg-[#1e3a8a] border border-gray-600 shadow-md">
//               <p className="text-lg font-semibold">📝 {complaint.text}</p>
//               <p className="text-xs text-gray-300">📅 {complaint.timestamp}</p>
//               <p className="text-xs text-gray-400 font-semibold">👤 {complaint.studentName}</p>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default StudentComplaintBox;



import React, { useState, useEffect } from "react";

const StudentComplaintBox = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState("");
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const savedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(savedComplaints);
  }, []);

  const submitComplaint = () => {
    if (newComplaint.trim() === "" || studentName.trim() === "") return;

    const newEntry = {
      studentName,
      text: newComplaint,
      timestamp: new Date().toLocaleString(),
    };

    const updatedComplaints = [...complaints, newEntry];

    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));

    setComplaints(updatedComplaints);
    setNewComplaint("");
    setStudentName("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#121826] p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-[#1e293b] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400">📢 Raise a Complaint</h2>

        {/* Student Name Input */}
        <input
          type="text"
          className="w-full p-3 mb-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name..."
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        {/* Complaint Textarea */}
        <textarea
          className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your issue..."
          value={newComplaint}
          onChange={(e) => setNewComplaint(e.target.value)}
          rows={4}
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={submitComplaint}
          className="w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Submit Complaint
        </button>

        {/* Previous Complaints Section */}
        <h3 className="text-xl sm:text-2xl font-semibold mt-8 text-gray-300">📜 Previous Complaints</h3>
        <div className="mt-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 p-2">
          {complaints.length === 0 ? (
            <p className="text-gray-400 text-center">No complaints submitted.</p>
          ) : (
            complaints.map((complaint, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-[#334155] border border-gray-600 shadow-md transition-all duration-300 hover:bg-[#475569]"
              >
                <p className="text-lg font-semibold">📝 {complaint.text}</p>
                <p className="text-xs text-gray-300">📅 {complaint.timestamp}</p>
                <p className="text-xs text-gray-400 font-semibold">👤 {complaint.studentName}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentComplaintBox;
