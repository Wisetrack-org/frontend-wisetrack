// import React, { useState, useEffect } from "react";

// const subjectsByYear = {
//   FY: ["Mathematics 1", "Physics", "Chemistry", "Basic Electrical Engineering", "Programming in C"],
//   SY: ["Data Structures", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Operating Systems"],
//   TY: ["Software Engineering", "Artificial Intelligence", "Web Development", "Cyber Security", "Machine Learning"],
//   "Final Year": ["Cloud Computing", "Big Data Analytics", "Blockchain Technology", "IoT", "Project Work"]
// };

// const studentsByYear = {
//   FY: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8", "Student 9", "Student 10"],
//   SY: ["Student 11", "Student 12", "Student 13", "Student 14", "Student 15", "Student 16", "Student 17", "Student 18", "Student 19", "Student 20"],
//   TY: ["Student 21", "Student 22", "Student 23", "Student 24", "Student 25", "Student 26", "Student 27", "Student 28", "Student 29", "Student 30"],
//   "Final Year": ["Student 31", "Student 32", "Student 33", "Student 34", "Student 35", "Student 36", "Student 37", "Student 38", "Student 39", "Student 40"]
// };

// const MarksUpload = () => {
//   const [selectedYear, setSelectedYear] = useState("FY");
//   const [marks, setMarks] = useState({});

//   useEffect(() => {
//     const storedMarks = JSON.parse(localStorage.getItem("marks")) || {};
//     setMarks(storedMarks);
//   }, []);

//   const handleMarksChange = (year, student, subject, value) => {
//     setMarks((prev) => {
//       const updatedMarks = {
//         ...prev,
//         [year]: {
//           ...prev[year],
//           [student]: {
//             ...prev[year]?.[student],
//             [subject]: value,
//           },
//         },
//       };
//       localStorage.setItem("marks", JSON.stringify(updatedMarks));
//       return updatedMarks;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">📊 Upload Student Marks</h2>

//       {/* Year Selection */}
//       <div className="flex justify-center space-x-4 mb-6">
//         {Object.keys(subjectsByYear).map((year) => (
//           <button
//             key={year}
//             onClick={() => setSelectedYear(year)}
//             className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
//               selectedYear === year ? "bg-blue-600" : "bg-gray-700 hover:bg-blue-500"
//             }`}
//           >
//             {year}
//           </button>
//         ))}
//       </div>

//       {/* Marks Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse border border-gray-700">
//           <thead>
//             <tr className="bg-gray-800">
//               <th className="p-3 border border-gray-600">Student</th>
//               {subjectsByYear[selectedYear].map((subject) => (
//                 <th key={subject} className="p-3 border border-gray-600">{subject}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {studentsByYear[selectedYear].map((student) => (
//               <tr key={student} className="bg-gray-700">
//                 <td className="p-3 border border-gray-600 font-semibold">{student}</td>
//                 {subjectsByYear[selectedYear].map((subject) => (
//                   <td key={subject} className="p-3 border border-gray-600">
//                     <input
//                       type="number"
//                       min="0"
//                       max="100"
//                       className="w-16 p-1 text-black rounded-md"
//                       value={marks[selectedYear]?.[student]?.[subject] || ""}
//                       onChange={(e) => handleMarksChange(selectedYear, student, subject, e.target.value)}
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MarksUpload;



import React, { useState, useEffect } from "react";

const subjectsByYear = {
  FY: ["Mathematics 1", "Physics", "Chemistry", "Basic Electrical Engineering", "Programming in C"],
  SY: ["Data Structures", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Operating Systems"],
  TY: ["Software Engineering", "Artificial Intelligence", "Web Development", "Cyber Security", "Machine Learning"],
  "Final Year": ["Cloud Computing", "Big Data Analytics", "Blockchain Technology", "IoT", "Project Work"]
};

const studentsByYear = {
  FY: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8", "Student 9", "Student 10"],
  SY: ["Student 11", "Student 12", "Student 13", "Student 14", "Student 15", "Student 16", "Student 17", "Student 18", "Student 19", "Student 20"],
  TY: ["Student 21", "Student 22", "Student 23", "Student 24", "Student 25", "Student 26", "Student 27", "Student 28", "Student 29", "Student 30"],
  "Final Year": ["Student 31", "Student 32", "Student 33", "Student 34", "Student 35", "Student 36", "Student 37", "Student 38", "Student 39", "Student 40"]
};

const MarksUpload = () => {
  const [selectedYear, setSelectedYear] = useState("FY");
  const [marks, setMarks] = useState({});

  useEffect(() => {
    const storedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    setMarks(storedMarks);
  }, []);

  const handleMarksChange = (year, student, subject, value) => {
    setMarks((prev) => {
      const updatedMarks = {
        ...prev,
        [year]: {
          ...prev[year],
          [student]: {
            ...prev[year]?.[student],
            [subject]: Number(value),
          },
        },
      };
      localStorage.setItem("marks", JSON.stringify(updatedMarks));
      return updatedMarks;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">📊 Upload Student Marks</h2>

      {/* Year Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(subjectsByYear).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
              selectedYear === year ? "bg-blue-600" : "bg-gray-700 hover:bg-blue-500"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Marks Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border border-gray-600">Student</th>
              {subjectsByYear[selectedYear].map((subject) => (
                <th key={subject} className="p-3 border border-gray-600">{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {studentsByYear[selectedYear].map((student) => (
              <tr key={student} className="bg-gray-700">
                <td className="p-3 border border-gray-600 font-semibold">{student}</td>
                {subjectsByYear[selectedYear].map((subject) => (
                  <td key={subject} className="p-3 border border-gray-600">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-16 p-1 text-black rounded-md"
                      value={marks[selectedYear]?.[student]?.[subject] || ""}
                      onChange={(e) => handleMarksChange(selectedYear, student, subject, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarksUpload;
