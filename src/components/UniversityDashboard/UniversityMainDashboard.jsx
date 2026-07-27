import { useNavigate } from "react-router-dom";
import {
  Users,
  GraduationCap,
  ClipboardList,
  MailWarning,
  CalendarDays,
  Building,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUniversityDashboardData } from "../api/university"; // 👈 your API
import Logout from "../Logout";

const UniversityDashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.auth);

  const handleNavigateToStudents = () => {
    navigate("/studentData", { state: { students: dashboardData?.students } });
  };

  const handleNavigateToteachers = () => {
    navigate("/teacherList", { state: { teachers: dashboardData?.teachers } });
  };

  const sections = [
    {
      name: "Faculty List",
      path: handleNavigateToteachers,
      bgColor: "bg-blue-500",
      icon: <Users size={32} />,
    },
    {
      name: "Student List",
      path: handleNavigateToStudents,
      bgColor: "bg-green-500",
      icon: <GraduationCap size={32} />,
    },
    {
      name: "Assign teachers",
      path: "/assignTeachers",
      bgColor: "bg-yellow-500",
      icon: <ClipboardList size={32} />,
    },
    {
      name: "Complaint Box",
      path: "/universityComplaints",
      bgColor: "bg-red-500",
      icon: <MailWarning size={32} />,
    },
    {
      name: "Create Classes",
      path: "/createClasses",
      bgColor: "bg-purple-500",
      icon: <CalendarDays size={32} />,
    },
    {
      name: "Announcement Box",
      path: "/postAnnouncement",
      bgColor: "bg-pink-500",
      icon: <CalendarDays size={32} />,
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUniversityDashboardData(token);
        setDashboardData(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch university dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token]);

  console.log("Data: ", dashboardData?.students);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="bg-blue-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">
          University Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Logout />
          <Building size={32} className="text-white" />
        </div>
      </nav>

      {/* Info */}
      <div className="p-6 text-center">
        <p className="text-lg text-gray-300">
          Manage faculty, students, exams, and complaints efficiently.
        </p>
      </div>

      {/* Status */}
      {loading && <p className="text-center text-yellow-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Sections */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 ${section.bgColor} flex items-center gap-4`}
              onClick={() => {
                if (typeof section.path === "function") {
                  section.path();
                } else {
                  navigate(section.path);
                }
              }}
            >
              <div className="text-white bg-black bg-opacity-30 p-2 rounded-lg">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold flex-1">{section.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversityDashboard;
