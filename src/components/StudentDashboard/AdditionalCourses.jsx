// import React, { useState } from "react";
// import { Capacitor } from "@capacitor/core";
// import { jsPDF } from "jspdf";
// import courseData from "../../../public/data/courseData.json";

// const AdditionalCourses = () => {
//   const [openedCourses, setOpenedCourses] = useState(new Set());
//   const [isCompleted, setIsCompleted] = useState(false);

//   const openCourse = (url) => {
//     if (!url || typeof url !== "string") {
//       console.error("Invalid course link:", url);
//       return;
//     }

//     // Open the course in a new tab
//     window.open(url, "_blank");
//   };




//   const markCompleted = () => {
//     if (openedCourses.size === courseData.length) {
//       setIsCompleted(true);
//     }
//   };

//   const generateCertificate = () => {
//     const doc = new jsPDF();
//     doc.text("Certificate of Completion", 20, 20);
//     doc.text("This certifies that you have completed all additional courses.", 20, 40);
//     doc.text("Congratulations!", 20, 60);
//     doc.save("Additional_Courses_Certificate.pdf");
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Additional Courses</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {courseData.map((course) => (
//           <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
//             <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover rounded" />
//             <h2 className="text-lg font-semibold mt-2">{course.title}</h2>
//             <p className="text-sm text-gray-600">{course.description}</p>
//             <button
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={() => openCourse(course.link)}
//             >
//               Open Course
//             </button>

//           </div>
//         ))}
//       </div>

//       {/* Mark Complete Button */}
//       {!isCompleted && (
//         <button
//           className={`mt-6 px-6 py-3 text-white rounded ${openedCourses.size === courseData.length ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"}`}
//           onClick={markCompleted}
//           disabled={openedCourses.size !== courseData.length}
//         >
//           Mark All as Completed
//         </button>
//       )}

//       {/* Generate Certificate Button */}
//       {isCompleted && (
//         <button
//           className="mt-6 px-6 py-3 bg-purple-500 text-white rounded"
//           onClick={generateCertificate}
//         >
//           Get Certificate
//         </button>
//       )}
//     </div>
//   );
// };

// export default AdditionalCourses;





import React, { useState } from "react";
import { jsPDF } from "jspdf";
import courseData from "../../../public/data/courseData.json";

const AdditionalCourses = () => {
  const [selectedYear, setSelectedYear] = useState("First Year");
  const [openedCourses, setOpenedCourses] = useState(new Set());
  const [isCompleted, setIsCompleted] = useState(false);

  const openCourse = (url) => {
    if (!url || typeof url !== "string") {
      console.error("Invalid course link:", url);
      return;
    }
    window.open(url, "_blank");
  };

  const markCompleted = () => {
    const coursesForYear = courseData[selectedYear] || [];
    if (openedCourses.size === coursesForYear.length) {
      setIsCompleted(true);
    }
  };

  const generateCertificate = () => {
    const doc = new jsPDF();
    doc.text("Certificate of Completion", 20, 20);
    doc.text(
      `This certifies that you have completed all additional courses for ${selectedYear}.`,
      20,
      40
    );
    doc.text("Congratulations!", 20, 60);
    doc.save(`${selectedYear}_Courses_Certificate.pdf`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Additional Courses</h1>
      
      {/* Year Selection Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {["First Year", "Second Year", "Third Year", "Fourth Year"].map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-lg transition-all duration-300 text-white font-semibold ${selectedYear === year ? "bg-blue-500 shadow-lg shadow-blue-500/50 scale-105" : "bg-gray-700 hover:bg-gray-600"}`}
            onClick={() => {
              setSelectedYear(year);
              setIsCompleted(false);
              setOpenedCourses(new Set());
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {(courseData[selectedYear] || []).map((course) => (
          <div key={course.id} className="bg-gray-900 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-3 text-blue-300">{course.title}</h2>
            <p className="text-sm text-gray-400">{course.description}</p>
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
              onClick={() => openCourse(course.link)}
            >
              Open Course
            </button>
          </div>
        ))}
      </div>

      {/* Mark Complete Button */}
      {!isCompleted && (
        <button
          className={`mt-6 px-6 py-3 block mx-auto text-white rounded-lg font-semibold transition-all ${openedCourses.size === (courseData[selectedYear] || []).length ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}`}
          onClick={markCompleted}
          disabled={openedCourses.size !== (courseData[selectedYear] || []).length}
        >
          Mark All as Completed
        </button>
      )}

      {/* Generate Certificate Button */}
      {isCompleted && (
        <button className="mt-6 px-6 py-3 block mx-auto bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all" onClick={generateCertificate}>
          Get Certificate
        </button>
      )}
    </div>
  );
};

export default AdditionalCourses;
