


// import React, { useState, useEffect } from "react";

// const StudentNotesViewer = () => {
//   const [notes, setNotes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("FY");

//   // Load notes from localStorage when the component mounts
//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("uploadedNotes")) || [];
//     setNotes(storedNotes);
//   }, []);

//   const filteredNotes = notes.filter((note) => note.category === selectedCategory);

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4">📚 Student Notes</h2>

//       {/* Category Selection */}
//       <div className="flex justify-center gap-2 mb-4">
//         {["FY", "SY", "TY", "Final Year"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg ${
//               selectedCategory === category ? "bg-blue-600" : "bg-gray-700"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Notes List */}
//       {filteredNotes.length > 0 ? (
//         <ul className="space-y-3">
//           {filteredNotes.map((note, index) => (
//             <li key={index} className="p-3 bg-[#1e3a8a] rounded-lg flex justify-between">
//               <span>{note.fileName}</span>
//               <a
//                 href={note.fileUrl}
//                 download={note.fileName}
//                 className="text-green-400 hover:underline"
//               >
//                 Download
//               </a>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-400 text-center">No notes available.</p>
//       )}
//     </div>
//   );
// };

// export default StudentNotesViewer;



import React, { useState, useEffect } from "react";

const StudentNotesViewer = () => {
  const [notes, setNotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("FY");

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("uploadedNotes")) || [];
    setNotes(storedNotes);
  }, []);

  const filteredNotes = notes.filter((note) => note.category === selectedCategory);

  return (
    <div className="h-screen w-full flex flex-col items-center bg-[#121826] text-white p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-[#1e293b] p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col h-[90vh]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-400">📚 Student Notes</h2>

        {/* Category Selection */}
        <div className="flex justify-center flex-wrap gap-3 mb-4">
          {["FY", "SY", "TY", "Final Year"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Notes List */}
        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          {filteredNotes.length > 0 ? (
            <ul className="space-y-3">
              {filteredNotes.map((note, index) => (
                <li key={index} className="p-3 bg-[#1e3a8a] rounded-lg flex justify-between items-center">
                  <span className="truncate max-w-[70%]">{note.fileName}</span>
                  <a
                    href={note.fileUrl}
                    download={note.fileName}
                    className="text-green-400 hover:underline font-semibold"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center mt-4">No notes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentNotesViewer;
