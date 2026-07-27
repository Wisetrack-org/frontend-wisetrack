// import { useLocation } from "react-router-dom";

// const TimetableView = () => {
//   const location = useLocation();
//   const timetable = location.state?.timetable || []; // Receiving data

//   console.log("Timetable received:", timetable); // Debugging

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-bold mb-4">Exam Timetable</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Subject</th>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {timetable.length > 0 ? (
//             timetable.map((entry, index) => (
//               <tr key={index} className="border">
//                 <td className="border p-2">{entry.subject}</td>
//                 <td className="border p-2">{entry.date}</td>
//                 <td className="border p-2">{entry.time}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center text-gray-500 p-4">
//                 No timetable data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TimetableView;


import { useLocation } from "react-router-dom";

const TimetableView = () => {
  const location = useLocation();
  const timetable = location.state?.timetable || [];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-black shadow-lg rounded-lg mt-5 md:mt-10">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Exam Timetable</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-600 text-white">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border border-gray-600 p-3">Subject</th>
              <th className="border border-gray-600 p-3">Date</th>
              <th className="border border-gray-600 p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.length > 0 ? (
              timetable.map((entry, index) => (
                <tr key={index} className="border border-gray-600 text-center bg-gray-800 hover:bg-gray-700 transition">
                  <td className="border border-gray-600 p-3">{entry.subject}</td>
                  <td className="border border-gray-600 p-3">{entry.date}</td>
                  <td className="border border-gray-600 p-3">{entry.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-400 p-5">No timetable data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableView;
