


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



import React, { useState, useEffect } from "react";

const subjectsByYear = {
  FY: ["Mathematics-I", "Physics", "Programming in C", "Electrical Engineering"],
  SY: ["Data Structures", "OOP in Java", "Digital Electronics", "Discrete Mathematics"],
  TY: ["DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
  "Final Year": ["Machine Learning", "Artificial Intelligence", "Cloud Computing", "Cyber Security"],
};

const TeacherNotesUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("FY");
  const [subject, setSubject] = useState(subjectsByYear["FY"][0]);
  const [uploadedNotes, setUploadedNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("uploadedNotes")) || [];
    setUploadedNotes(savedNotes);
  }, []);

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
        subject,
      };

      const updatedNotes = [...uploadedNotes, newNote];
      setUploadedNotes(updatedNotes);
      localStorage.setItem("uploadedNotes", JSON.stringify(updatedNotes));

      alert("Note uploaded successfully!");
      setSelectedFile(null);
    };
  };

  const handleDelete = (index) => {
    const updatedNotes = uploadedNotes.filter((_, i) => i !== index);
    setUploadedNotes(updatedNotes);
    localStorage.setItem("uploadedNotes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-black text-white p-6 overflow-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-6">📂 Upload Notes</h2>

      {/* Upload Form */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 max-w-lg mx-auto w-full">
        <label className="block mb-2">Select Year:</label>
        <select
          className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white mb-4"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubject(subjectsByYear[e.target.value][0]); // Reset subject based on year
          }}
        >
          {Object.keys(subjectsByYear).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <label className="block mb-2">Select Subject:</label>
        <select
          className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white mb-4"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjectsByYear[category].map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        <input type="file" onChange={handleFileChange} className="w-full p-3 bg-[#1e3a8a] text-white mb-4" />

        <button onClick={handleUpload} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
          Upload
        </button>
      </div>

      {/* Uploaded Notes List */}
      <div className="mt-6 max-w-2xl mx-auto w-full">
        <h3 className="text-2xl font-semibold mb-4">📜 Uploaded Notes</h3>

        {Object.keys(subjectsByYear).map((year) => (
          <div key={year} className="mb-6">
            <h4 className="text-xl font-bold text-yellow-400 mb-3">{year}</h4>
            {subjectsByYear[year].map((subj) => {
              const filteredNotes = uploadedNotes.filter(
                (note) => note.category === year && note.subject === subj
              );

              return (
                filteredNotes.length > 0 && (
                  <div key={subj} className="mb-4">
                    <h5 className="text-lg font-semibold text-blue-300 mb-2">{subj}</h5>
                    <ul className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                      {filteredNotes.map((note, index) => (
                        <li
                          key={index}
                          className="mb-3 p-3 bg-gray-800 rounded-lg flex justify-between items-center"
                        >
                          <div>
                            <p className="font-semibold">{note.fileName}</p>
                            <p className="text-sm text-gray-400">
                              {note.category} - {note.subject}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={note.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              View
                            </a>
                            <button
                              onClick={() => handleDelete(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              ❌
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherNotesUploader;
