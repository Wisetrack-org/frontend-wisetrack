// import React from "react";
// import { useNavigate } from "react-router-dom";
// import WelcomeSection from "../StudentDashboard/WelcomeSection";

// const TeacherMainDashboard = () => {
//   const navigate = useNavigate();

//   <div className="bg-black text-white min-h-screen ">
//     {/* Navbar */}
//     <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
//       <h1 className="text-xl font-bold">Student Dashboard</h1>
//       <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
//     </div>

//     <div className="px-5 pd-20">


//       {/* Section 1 */}
//       <div>
//         {/* Greeting & Quote */}
//         <div className="mt-4 tezxt-center">
//           <WelcomeSection />
//         </div>
//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <div className="bg-blue-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/schedule")}>Schedule</div>
//           <div className="bg-purple-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/qna")}>Q&A Handling</div>
//           <div className="bg-green-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/upload-notes")}>Upload Notes</div>
//           <div className="bg-yellow-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/assignment-due")}>Assignment Due Dates</div>
//           <div className="bg-red-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/feedback-parents")}>Feedback to Parents</div>
//         </div>

//         {/* Section 2 */}
//         <div className="mt-10 grid grid-cols-2 gap-4">
//           <div className="bg-indigo-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/upload-exam-marks")}>Upload Exam Marks</div>
//           <div className="bg-teal-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/upload-weekly-test")}>Upload Weekly Test</div>
//           <div className="bg-orange-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/assignment-viewer")}>Assignment Viewer</div>
//           <div className="bg-pink-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/university-counsellor")}>University Counsellor</div>
//           <div className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/exam-timetable")}>Exam Timetable</div>
//         </div>

//         {/* Section Navigation */}
//         <div className="mt-6 flex justify-center items-center gap-4 border-t border-gray-600 pt-4">
//           <div className="w-3 h-3 bg-white rounded-full"></div>
//           <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// };

// export default TeacherMainDashboard;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSection from "../StudentDashboard/WelcomeSection";
import Schedule from "../StudentDashboard/Schedule";

const TeacherMainDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
        <h1 className="text-xl font-bold">Teacher Dashboard</h1>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>

      <div className="px-5 py-10 pd-10">
        {/* Section Switching Logic */}
        {activeSection === 1 && (
          <div>
            {/* Greeting & Quote */}
            <div className="mt-4 text-center">
              <WelcomeSection />
            </div>

            {/* schedule */}
            <div className="mt-4 text-center">
              <Schedule />
            </div>


            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-purple-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/facultyQnA")}>Q&A Handling</div>
              <div className="bg-green-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/teacherNotesUploader")}>Upload Notes</div>
              <div className="bg-yellow-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/assignmentUpload")}>Assignment Due Dates</div>
              <div className="bg-red-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/feedback-parents")}>Feedback to Parents</div>
            </div>
          </div>
        )}

        {activeSection === 2 && (
          <div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-indigo-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/upload-exam-marks")}>Upload Exam Marks</div>
              <div className="bg-teal-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/upload-weekly-test")}>Upload Weekly Test</div>
              <div className="bg-orange-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/assignment-viewer")}>Assignment Viewer</div>
              <div className="bg-pink-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/counsellorPage")}>University Counsellor</div>
              <div className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/exam-timetable")}>Exam Timetable</div>
              <div className="bg-green-700 p-4 rounded-lg text-center cursor-pointer" onClick={() => navigate("/defaulter")}>Defaulter List</div>
            </div>
          </div>
        )}
      </div>

      {/* Section Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-4 flex justify-center gap-6 border-t-4 border-blue-600 z-50">
        <div
          className={`w-3 h-3 rounded-full cursor-pointer ${activeSection === 1 ? "bg-white" : "bg-gray-500"}`}
          onClick={() => setActiveSection(1)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full cursor-pointer ${activeSection === 2 ? "bg-white" : "bg-gray-500"}`}
          onClick={() => setActiveSection(2)}
        ></div>
      </div>
    </div>
  );
};

export default TeacherMainDashboard;

