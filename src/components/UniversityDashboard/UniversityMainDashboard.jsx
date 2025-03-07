// import { useNavigate } from "react-router-dom";

// const UniversityDashboard = () => {
//   const navigate = useNavigate();

//   const sections = [
//     { name: "Faculty List", path: "/faculty-list", bgColor: "bg-blue-600" },
//     { name: "Student List", path: "/student-list", bgColor: "bg-green-600" },
//     { name: "Results", path: "/results", bgColor: "bg-yellow-600" },
//     { name: "Complaint Box", path: "/universityComplaints", bgColor: "bg-red-600" },
//     { name: "Exam Timetable", path: "/universityTimeTable", bgColor: "bg-purple-600" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navbar */}
//       <nav className="bg-black p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">University Dashboard</h1>
//         <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
//       </nav>

//       {/* Filler Section */}
//       <div className="p-6">
//         <p className="text-lg text-gray-300">Manage faculty, students, exams, and complaints efficiently.</p>
//       </div>

//       {/* Dashboard Sections */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition transform duration-300 ${section.bgColor}`}
//             onClick={() => navigate(section.path)}
//           >
//             <h2 className="text-xl font-semibold">{section.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UniversityDashboard;




import { useNavigate } from "react-router-dom";
import { Users, GraduationCap, ClipboardList, MailWarning, CalendarDays, Building } from "lucide-react";

const UniversityDashboard = () => {
  const navigate = useNavigate();

  const sections = [
    { name: "Faculty List", path: "/teacherList", bgColor: "bg-blue-500", icon: <Users size={32} /> },
    { name: "Student List", path: "/studentData", bgColor: "bg-green-500", icon: <GraduationCap size={32} /> },
    { name: "Results", path: "/marksUpload", bgColor: "bg-yellow-500", icon: <ClipboardList size={32} /> },
    { name: "Complaint Box", path: "/universityComplaints", bgColor: "bg-red-500", icon: <MailWarning size={32} /> },
    { name: "Exam Timetable", path: "/universityTimeTable", bgColor: "bg-purple-500", icon: <CalendarDays size={32} /> },
    { name: "Annocement Box", path: "/postAnnouncement", bgColor: "bg-pink-500", icon: <CalendarDays size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="bg-blue-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">University Dashboard</h1>
        <div className="flex items-center justify-center">
          <Building size={32}className="text-white text-2xl" />
        </div>
      </nav>

      {/* Info Section */}
      <div className="p-6 text-center">
        <p className="text-lg text-gray-300">Manage faculty, students, exams, and complaints efficiently.</p>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 bg-opacity-80 backdrop-blur-md ${section.bgColor} flex items-center gap-4`}
            onClick={() => navigate(section.path)}
          >
            <div className="text-white bg-black bg-opacity-30 p-2 rounded-lg">{section.icon}</div>
            <h2 className="text-xl font-semibold flex-1">{section.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityDashboard;
