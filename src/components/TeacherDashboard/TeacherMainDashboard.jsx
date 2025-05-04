// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import WelcomeSection from "../StudentDashboard/WelcomeSection";
// import Schedule from "../StudentDashboard/Schedule";
// import { BookOpen, Upload, ClipboardList, MessageSquare, FileText, List, Calendar, Eye, Users, AlarmClock, Ban } from "lucide-react";

// const TeacherMainDashboard = () => {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState(1);

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Navbar */}
//       <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
//         <h1 className="text-xl font-bold">Teacher Dashboard</h1>
//         <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
//       </div>

//       <div className="px-5 py-10 pd-10">
//         {/* Section Switching Logic */}
//         {activeSection === 1 && (
//           <div>
//             {/* Greeting & Quote */}
//             <div className="mt-4 text-center">
//               <WelcomeSection />
//             </div>

//             {/* schedule */}
//             <div className="mt-4 text-center">
//               <Schedule />
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div
//                 className="bg-purple-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/facultyQnA")}
//               >
//                 <MessageSquare size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Q&A Handling</span>
//               </div>

//               <div
//                 className="bg-green-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/teacherNotesUploader")}
//               >
//                 <Upload size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Upload Notes</span>
//               </div>

//               <div
//                 className="bg-yellow-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/assignmentUpload")}
//               >
//                 <ClipboardList size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Assignment Due Dates</span>
//               </div>

//               <div
//                 className="bg-red-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/feedback-parents")}
//               >
//                 <FileText size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Feedback to Parents</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeSection === 2 && (
//           <div>

//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div
//                 className="bg-indigo-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/marksUpload")}
//               >
//                 <List size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Upload Exam Marks</span>
//               </div>

//               <div
//                 className="bg-teal-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/weeklyTestMarks")}
//               >
//                 <BookOpen size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Upload Weekly Test</span>
//               </div>

//               <div
//                 className="bg-orange-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/assignment-viewer")}
//               >
//                 <Eye size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Assignment Viewer</span>
//               </div>

//               <div
//                 className="bg-pink-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/counsellorPage")}
//               >
//                 <Users size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">University Counsellor</span>
//               </div>

//               <div
//                 className="bg-gray-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/timetableView")}
//               >
//                 <Calendar size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Exam Timetable</span>
//               </div>

//               <div
//                 className="bg-green-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
//                 onClick={() => navigate("/defaulter")}
//               >
//                 <Ban size={28} className="mb-2 text-white" />
//                 <span className="text-lg font-semibold">Defaulter List</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Section Navigation */}
//       <div className="fixed bottom-0 left-0 w-full bg-black py-4 flex justify-center gap-6 border-t-4 border-blue-600 z-50">
//         <div
//           className={`w-3 h-3 rounded-full cursor-pointer ${activeSection === 1 ? "bg-white" : "bg-gray-500"}`}
//           onClick={() => setActiveSection(1)}
//         ></div>
//         <div
//           className={`w-3 h-3 rounded-full cursor-pointer ${activeSection === 2 ? "bg-white" : "bg-gray-500"}`}
//           onClick={() => setActiveSection(2)}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default TeacherMainDashboard;

import { useNavigate } from "react-router-dom";
import WelcomeSection from "../StudentDashboard/WelcomeSection";
import Schedule from "../StudentDashboard/Schedule";
import {
  BookOpen,
  Upload,
  ClipboardList,
  MessageSquare,
  FileText,
  List,
  Calendar,
  Eye,
  Users,
  Ban,
} from "lucide-react";
import axios from "axios";
import Logout from "../Logout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchTeacherDashboardData } from "../api/teacher";
import AssignedClasses from "./AssignedClasses";
import Students from "./StudentList";

const TeacherMainDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(1);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTeacherDashboardData(token);
        setDashboardData(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token]);

  // console.log(dashboardData);
  const handleNavigate = () => {
    // Pass the data you want to the assigned-classes route
    navigate('/assigned-classes', { state: { assignedClasses: dashboardData?.assigned_classes } });
  };
  

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between bg-blue-700 items-center p-3 border-b border-gray-700">
        <h1 className="text-xl font-bold">Teacher Dashboard</h1>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>

      <div className="px-5 py-10 pd-10">
        {/* Default UI Sections */}
        {activeSection === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-black">
              <WelcomeSection studentName={dashboardData?.teacherFirstName}/>
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Schedule
              </h3>
              <p className="text-black">
                Here’s your upcoming schedule and assignments.
              </p>
            </div>

            {loading ? (
              <p className="text-red-400">Loading dashboard...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <>
                <AssignedClasses
                  assignedClasses={dashboardData?.assigned_classes}
                />
                <Students students={dashboardData?.students} />
              </>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div
                className="bg-purple-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
                onClick={handleNavigate}
              >
                <MessageSquare size={28} className="mb-2 text-white" />
                <span className="text-lg font-semibold">Assigned Classes</span>
              </div>

              <div
                className="bg-red-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
                onClick={() => navigate("/feedback-parents")}
              >
                <FileText size={28} className="mb-2 text-white" />
                <span className="text-lg font-semibold">
                  Feedback to Parents
                </span>
              </div>
            </div>
          </>
        )}

        {activeSection === 2 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div
              className="bg-indigo-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
              onClick={() => navigate("/marksUpload")}
            >
              <List size={28} className="mb-2 text-white" />
              <span className="text-lg font-semibold">Upload Exam Marks</span>
            </div>

            <div
              className="bg-teal-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
              onClick={() => navigate("/weeklyTestMarks")}
            >
              <BookOpen size={28} className="mb-2 text-white" />
              <span className="text-lg font-semibold">Upload Weekly Test</span>
            </div>

            <div
              className="bg-pink-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
              onClick={() => navigate("/counsellorPage")}
            >
              <Users size={28} className="mb-2 text-white" />
              <span className="text-lg font-semibold">
                University Counsellor
              </span>
            </div>

            <div
              className="bg-green-700 p-4 rounded-xl text-center cursor-pointer shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center"
              onClick={() => navigate("/defaulter")}
            >
              <Ban size={28} className="mb-2 text-white" />
              <span className="text-lg font-semibold">Defaulter List</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-4 flex justify-center gap-6 border-t-4 border-blue-600 z-50">
        <div
          className={`w-3 h-3 rounded-full cursor-pointer ${
            activeSection === 1 ? "bg-white" : "bg-gray-500"
          }`}
          onClick={() => setActiveSection(1)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full cursor-pointer ${
            activeSection === 2 ? "bg-white" : "bg-gray-500"
          }`}
          onClick={() => setActiveSection(2)}
        ></div>
      </div>

      {/* Optional Logout */}
      <Logout />
    </div>
  );
};

export default TeacherMainDashboard;
