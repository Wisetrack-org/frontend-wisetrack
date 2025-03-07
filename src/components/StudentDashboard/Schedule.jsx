// import React, { useState, useEffect, useRef } from "react";
// import timetableData from "../../../public/data/timetable.json"; // Import JSON file

// const Schedule = () => {
//   const [schedule, setSchedule] = useState({});
//   const [selectedDay, setSelectedDay] = useState("Monday");
//   const containerRef = useRef(null);

//   useEffect(() => {
//     setSchedule(timetableData);
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = 0; // Reset scroll when changing day
//     }
//   }, [selectedDay]);

//   // Array of light background colors for subjects
//   const colors = [
//     "bg-red-100",
//     "bg-green-100",
//     "bg-blue-100",
//     "bg-yellow-100",
//     "bg-purple-100",
//     "bg-pink-100",
//     "bg-orange-100",
//     "bg-teal-100",
//   ];

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4">College Timetable</h2>

//       {/* Scrollable Day Selector */}
//       <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
//         {Object.keys(schedule).map((day) => (
//           <button
//             key={day}
//             onClick={() => setSelectedDay(day)}
//             className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg shadow-md transition-all ${
//               selectedDay === day ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       {/* Schedule Container */}
//       <div className="bg-white p-4 rounded-lg shadow-md mt-4">
//         {schedule[selectedDay] && schedule[selectedDay].length > 0 ? (
//           <div
//             ref={containerRef}
//             className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2"
//           >
//             {schedule[selectedDay].map((slot, index) => (
//               <div
//                 key={index}
//                 className={`min-w-[220px] p-4 rounded-md shadow-md flex flex-col justify-center ${colors[index % colors.length]}`}
//               >
//                 <p className="font-semibold text-sm text-black">{slot.time}</p>
//                 <p className="text-lg font-bold text-black">{slot.subject}</p>
//                 <p className="text-sm font-light text-black">{slot.teacher}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No schedule available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Schedule;



// import React, { useState, useEffect, useRef } from "react";
// import timetableData from "../../../public/data/timetable.json"; // Import JSON file

// const Schedule = () => {
//   const [schedule, setSchedule] = useState({});
//   const [selectedDay, setSelectedDay] = useState("Monday");
//   const containerRef = useRef(null);

//   useEffect(() => {
//     setSchedule(timetableData);
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = 0; // Reset scroll when changing day
//     }
//   }, [selectedDay]);

//   // Array of light background colors for subjects
//   const colors = [
//     "bg-red-100",
//     "bg-green-100",
//     "bg-blue-100",
//     "bg-yellow-100",
//     "bg-purple-100",
//     "bg-pink-100",
//     "bg-orange-100",
//     "bg-teal-100",
//   ];

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4">College Timetable</h2>

//       {/* Scrollable Day Selector */}
//       <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
//         {Object.keys(schedule).map((day) => (
//           <button
//             key={day}
//             onClick={() => setSelectedDay(day)}
//             className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg shadow-md transition-all ${
//               selectedDay === day ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       {/* Schedule Container */}
//       <div className="bg-white p-4 rounded-lg shadow-md mt-4">
//         {schedule[selectedDay] && schedule[selectedDay].length > 0 ? (
//           <div
//             ref={containerRef}
//             className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2"
//           >
//             {schedule[selectedDay].map((slot, index) => (
//               <div
//                 key={index}
//                 className={`min-w-[220px] p-4 rounded-md shadow-md flex flex-col justify-center ${colors[index % colors.length]}`}
//               >
//                 <p className="font-semibold text-sm text-black">{slot.time}</p>
//                 <p className="text-lg font-bold text-black">{slot.subject}</p>
//                 <p className="text-sm font-light text-black">{slot.teacher}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No schedule available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Schedule;




import React, { useState, useEffect, useRef } from "react";
import timetableData from "../../../public/data/timetable.json"; // Import JSON file

const Schedule = () => {
  const [schedule, setSchedule] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");
  const containerRef = useRef(null);

  useEffect(() => {
    setSchedule(timetableData);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0; // Reset scroll when changing day
    }
  }, [selectedDay]);

  // Array of light background colors for subjects
  const colors = [
    "bg-blue-800", "bg-gray-800", "bg-indigo-800", "bg-slate-800",
    "bg-purple-800", "bg-cyan-800", "bg-teal-800", "bg-emerald-800"
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto text-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">College Timetable</h2>

      {/* Scrollable Day Selector */}
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg shadow-md transition-all whitespace-nowrap ${
              selectedDay === day
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Container */}
      <div className="bg-black p-4 rounded-lg shadow-md mt-4 border border-gray-700">
        {schedule[selectedDay] && schedule[selectedDay].length > 0 ? (
          <div
            ref={containerRef}
            className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2"
          >
            {schedule[selectedDay].map((slot, index) => (
              <div
                key={index}
                className={`min-w-[220px] p-4 rounded-md shadow-md flex flex-col justify-center ${colors[index % colors.length]}`}
              >
                <p className="font-semibold text-sm text-gray-300">{slot.time}</p>
                <p className="text-lg font-bold text-white">{slot.subject}</p>
                <p className="text-sm font-light text-gray-300">{slot.teacher}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No schedule available</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
