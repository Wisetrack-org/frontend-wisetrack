// const AssignedClasses = ({ assignedClasses }) => {
//   return (
//     <div className="bg-white p-4 rounded shadow mb-6 text-black">
//       <h3 className="text-lg font-semibold mb-2">Assigned Classes</h3>
//       {assignedClasses?.length > 0 ? (
//         <ul className="list-disc ml-5">
//           {assignedClasses.map((cls, index) => (
//             <li key={index}>
//               Year: {cls.academic_year}, Branch: {cls.branch}, Class ID: {cls.class_id}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No assigned classes found.</p>
//       )}
//     </div>
//   );
// };

// export default AssignedClasses;
const AssignedClasses = ({ assignedClasses }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Assigned Classes</h3>
      {assignedClasses?.length > 0 ? (
        <ul className="list-disc pl-6 space-y-2">
          {assignedClasses.map((cls, index) => (
            <li key={index} className="text-gray-300">
              <span className="font-medium text-blue-400">Year:</span>{" "}
              <span className="text-white">{cls.academic_year}</span>,{" "}
              <span className="font-medium text-blue-400">Branch:</span>{" "}
              <span className="text-white">{cls.branch}</span>,{" "}
              <span className="font-medium text-blue-400">Class ID:</span>{" "}
              <span className="text-white">{cls.class_id}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No assigned classes found.</p>
      )}
    </div>
  );
};

export default AssignedClasses;
