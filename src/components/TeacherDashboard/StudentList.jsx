// const Students = ({ students }) => {
//   return (
//     <div className="bg-white p-4 rounded shadow mb-6 text-black">
//       <h3 className="text-lg font-semibold mb-2">Students</h3>
//       {students?.length > 0 ? (
//         <table className="min-w-full border border-gray-300 text-sm text-left">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Email</th>
//               <th className="p-2 border">Semester</th>
//               <th className="p-2 border">Class</th>
//               <th className="p-2 border">Branch</th>
//               <th className="p-2 border">Year</th>
//               <th className="p-2 border">Subject</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.student_id} className="hover:bg-gray-50">
//                 <td className="p-2 border">{student.first_name} {student.last_name}</td>
//                 <td className="p-2 border">{student.email}</td>
//                 <td className="p-2 border">{student.semester}</td>
//                 <td className="p-2 border">{student.class_name}</td>
//                 <td className="p-2 border">{student.branch}</td>
//                 <td className="p-2 border">{student.academic_year}</td>
//                 <td className="p-2 border">{student.subjects}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No students found.</p>
//       )}
//     </div>
//   );
// };

// export default Students;
const Students = ({ students }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Students</h3>
      {students?.length > 0 ? (
        <table className="min-w-full border border-gray-700 text-sm text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3 border border-gray-700 text-gray-300">Name</th>
              <th className="p-3 border border-gray-700 text-gray-300">Email</th>
              <th className="p-3 border border-gray-700 text-gray-300">Semester</th>
              <th className="p-3 border border-gray-700 text-gray-300">Class</th>
              <th className="p-3 border border-gray-700 text-gray-300">Branch</th>
              <th className="p-3 border border-gray-700 text-gray-300">Year</th>
              <th className="p-3 border border-gray-700 text-gray-300">Subject</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.student_id} className="hover:bg-gray-600 transition-colors">
                <td className="p-3 border border-gray-700 text-white">{student.first_name} {student.last_name}</td>
                <td className="p-3 border border-gray-700 text-blue-400">{student.email}</td>
                <td className="p-3 border border-gray-700 text-yellow-300">{student.semester}</td>
                <td className="p-3 border border-gray-700 text-green-400">{student.class_name}</td>
                <td className="p-3 border border-gray-700 text-purple-300">{student.branch}</td>
                <td className="p-3 border border-gray-700 text-orange-300">{student.academic_year}</td>
                <td className="p-3 border border-gray-700 text-cyan-300">{student.subjects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-400">No students found.</p>
      )}
    </div>
  );
};

export default Students;
