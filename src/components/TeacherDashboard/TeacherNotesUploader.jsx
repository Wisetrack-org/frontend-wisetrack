// import React, { useState } from "react";

// const TeacherNotesUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [category, setCategory] = useState("FY");

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) return alert("Please select a file!");

//     const reader = new FileReader();
//     reader.readAsDataURL(selectedFile);
//     reader.onload = () => {
//       const newNote = {
//         fileName: selectedFile.name,
//         fileUrl: reader.result,
//         category,
//       };

//       const existingNotes = JSON.parse(localStorage.getItem("uploadedNotes")) || [];
//       const updatedNotes = [...existingNotes, newNote];

//       localStorage.setItem("uploadedNotes", JSON.stringify(updatedNotes));
//       alert("Note uploaded successfully!");
//       setSelectedFile(null);
//     };
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4">📂 Upload Notes</h2>

//       <select
//         className="w-full p-2 rounded-lg bg-[#1e3a8a] text-white mb-3"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value="FY">FY</option>
//         <option value="SY">SY</option>
//         <option value="TY">TY</option>
//         <option value="Final Year">Final Year</option>
//       </select>

//       <input type="file" onChange={handleFileChange} className="w-full p-2 bg-[#1e3a8a] text-white mb-3" />

//       <button onClick={handleUpload} className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
//         Upload
//       </button>
//     </div>
//   );
// };

// export default TeacherNotesUploader;





import React, { useState } from "react";

const TeacherNotesUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("FY");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select a file!");

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const newNote = {
        fileName: selectedFile.name,
        fileUrl: reader.result,
        category,
      };

      const existingNotes = JSON.parse(localStorage.getItem("uploadedNotes")) || [];
      const updatedNotes = [...existingNotes, newNote];

      localStorage.setItem("uploadedNotes", JSON.stringify(updatedNotes));
      alert("Note uploaded successfully!");
      setSelectedFile(null);
    };
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-4">📂 Upload Notes</h2>

      <select
        className="w-full p-2 rounded-lg bg-[#1e3a8a] text-white mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="FY">FY</option>
        <option value="SY">SY</option>
        <option value="TY">TY</option>
        <option value="Final Year">Final Year</option>
      </select>

      <input type="file" onChange={handleFileChange} className="w-full p-2 bg-[#1e3a8a] text-white mb-3" />

      <button onClick={handleUpload} className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
        Upload
      </button>
    </div>
  );
};

export default TeacherNotesUploader;
