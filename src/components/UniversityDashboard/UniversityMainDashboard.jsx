import { useNavigate } from "react-router-dom";

const UniversityDashboard = () => {
  const navigate = useNavigate();

  const sections = [
    { name: "Faculty List", path: "/faculty-list", bgColor: "bg-blue-600" },
    { name: "Student List", path: "/student-list", bgColor: "bg-green-600" },
    { name: "Results", path: "/results", bgColor: "bg-yellow-600" },
    { name: "Complaint Box", path: "/universityComplaints", bgColor: "bg-red-600" },
    { name: "Exam Timetable", path: "/exam-timetable", bgColor: "bg-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">University Dashboard</h1>
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
      </nav>

      {/* Filler Section */}
      <div className="p-6">
        <p className="text-lg text-gray-300">Manage faculty, students, exams, and complaints efficiently.</p>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition transform duration-300 ${section.bgColor}`}
            onClick={() => navigate(section.path)}
          >
            <h2 className="text-xl font-semibold">{section.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityDashboard;
