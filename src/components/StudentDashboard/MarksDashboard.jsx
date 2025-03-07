// import React, { useState, useEffect } from "react";

// const MarksDashboard = () => {
//   const [marksData, setMarksData] = useState([]);

//   useEffect(() => {
//     // Fetch marks data from localStorage
//     const storedMarks = JSON.parse(localStorage.getItem("studentMarks")) || [];
//     setMarksData(storedMarks);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0a192f] text-white p-6">
//       <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
//         📊 Student Marks & Performance
//       </h1>

//       {marksData.length === 0 ? (
//         <p className="text-center text-gray-400">No marks data available.</p>
//       ) : (
//         marksData.map((student, index) => (
//           <div key={index} className="bg-[#112240] p-4 rounded-lg mb-6 shadow-md">
//             <h2 className="text-xl font-semibold text-blue-300">
//               {student.name} ({student.year})
//             </h2>
//             <p className="text-gray-400">🎓 Roll No: {student.rollNumber}</p>

//             <div className="mt-4">
//               <table className="w-full text-left border border-gray-600">
//                 <thead>
//                   <tr className="bg-[#233554] text-blue-300">
//                     <th className="p-2">Subject</th>
//                     <th className="p-2">Marks (out of 100)</th>
//                     <th className="p-2">Result</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {student.marks.map((subject, subIndex) => (
//                     <tr key={subIndex} className="border-b border-gray-700">
//                       <td className="p-2">{subject.subject}</td>
//                       <td className="p-2">{subject.score}</td>
//                       <td
//                         className={`p-2 font-semibold ${
//                           subject.score >= 40 ? "text-green-400" : "text-red-400"
//                         }`}
//                       >
//                         {subject.score >= 40 ? "Pass ✅" : "Fail ❌"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="mt-4 text-right text-lg">
//               <span className="font-bold text-yellow-300">
//                 🎯 Percentage: {student.percentage.toFixed(2)}%
//               </span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MarksDashboard;



import React, { useState, useEffect } from "react";

const MarksDashboard = () => {
  const [marksData, setMarksData] = useState({});

  useEffect(() => {
    const storedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    setMarksData(storedMarks);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        📊 Student Marks & Performance
      </h1>

      {Object.keys(marksData).length === 0 ? (
        <p className="text-center text-gray-400">No marks data available.</p>
      ) : (
        Object.entries(marksData).map(([year, students]) => (
          <div key={year}>
            <h2 className="text-2xl font-bold text-blue-300 mt-6">{year}</h2>

            {Object.entries(students).map(([student, subjects]) => {
              const totalMarks = Object.values(subjects).reduce((acc, curr) => acc + curr, 0);
              const percentage = totalMarks / Object.keys(subjects).length;
              const isPass = Object.values(subjects).every((mark) => mark >= 40);

              return (
                <div key={student} className="bg-[#112240] p-4 rounded-lg mb-6 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-300">{student}</h3>

                  <table className="w-full text-left border border-gray-600 mt-2">
                    <thead>
                      <tr className="bg-[#233554] text-blue-300">
                        <th className="p-2">Subject</th>
                        <th className="p-2">Marks (out of 100)</th>
                        <th className="p-2">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(subjects).map(([subject, score]) => (
                        <tr key={subject} className="border-b border-gray-700">
                          <td className="p-2">{subject}</td>
                          <td className="p-2">{score}</td>
                          <td
                            className={`p-2 font-semibold ${
                              score >= 40 ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {score >= 40 ? "Pass ✅" : "Fail ❌"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 text-right text-lg">
                    <span className="font-bold text-yellow-300">
                      🎯 Percentage: {percentage.toFixed(2)}% - {isPass ? "Pass ✅" : "Fail ❌"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
};

export default MarksDashboard;
