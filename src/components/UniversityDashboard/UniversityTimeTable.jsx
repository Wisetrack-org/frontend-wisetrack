// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UniversityTimetable = () => {
//   const navigate = useNavigate();
//   const [timetable, setTimetable] = useState([
//     { subject: "", date: "", time: "" },
//     { subject: "", date: "", time: "" },
//     { subject: "", date: "", time: "" },
//     { subject: "", date: "", time: "" },
//   ]);

//   const handleChange = (index, field, value) => {
//     const newTimetable = [...timetable];
//     newTimetable[index][field] = value;
//     setTimetable(newTimetable);
//   };

//   const handleSubmit = () => {
//     console.log("Timetable being sent:", timetable); // Debugging
//     navigate("/TimetableView", { state: { timetable } });
//   };
  

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-bold mb-4">Upload Exam Timetable</h2>
//       {timetable.map((entry, index) => (
//         <div key={index} className="mb-2 flex gap-2">
//           <input
//             type="text"
//             placeholder="Subject"
//             value={entry.subject}
//             onChange={(e) => handleChange(index, "subject", e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="date"
//             value={entry.date}
//             onChange={(e) => handleChange(index, "date", e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="time"
//             value={entry.time}
//             onChange={(e) => handleChange(index, "time", e.target.value)}
//             className="border p-2 rounded"
//           />
//         </div>
//       ))}
//       <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2">
//         Upload Timetable
//       </button>
//     </div>
//   );
// };

// export default UniversityTimetable;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UniversityTimetable = () => {
  const navigate = useNavigate();
  const [timetable, setTimetable] = useState([
    { subject: "", date: "", time: "" },
    { subject: "", date: "", time: "" },
    { subject: "", date: "", time: "" },
    { subject: "", date: "", time: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newTimetable = [...timetable];
    newTimetable[index][field] = value;
    setTimetable(newTimetable);
  };

  const handleSubmit = () => {
    console.log("Timetable being sent:", timetable);
    navigate("/TimetableView", { state: { timetable } });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-black shadow-lg rounded-lg mt-5 md:mt-10">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Upload Exam Timetable
      </h2>
      {timetable.map((entry, index) => (
        <div key={index} className="mb-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Subject"
            value={entry.subject}
            onChange={(e) => handleChange(index, "subject", e.target.value)}
            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full"
          />
          <input
            type="date"
            value={entry.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full"
          />
          <input
            type="time"
            value={entry.time}
            onChange={(e) => handleChange(index, "time", e.target.value)}
            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-bold"
      >
        Upload Timetable
      </button>
    </div>
  );
};

export default UniversityTimetable;
