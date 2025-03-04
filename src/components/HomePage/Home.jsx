




import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Welcome</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-2xl">
        <Link to="/signup">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
        </Link>
        <Link to="/schedule">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Student Dashboard</button>
        </Link>

        <Link to="/yogaMeditation">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Yoga & Meditation</button>
        </Link>
        <Link to="/mainStudentPage">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Main Student Page</button>
        </Link>
        <Link to="/parentLogin">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Parent Login</button>
        </Link>
        <Link to="/adminLogin">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Admin Login</button>
        </Link>
        <Link to="/facultyLogin">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Faculty Login</button>
        </Link>
        <Link to="/studentLogin">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Student Login</button>
        </Link>
        <Link to="/roleSelection">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Role Selection</button>
        </Link>
        <Link to="/landingPage">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Landing Page</button>
        </Link>
        <Link to="/yogaMeditation">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">yoga & Meditation</button>
        </Link>

        <Link to="/additionalCourses">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">additional Courses</button>
        </Link>
        <Link to="/welcomeSection">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Welcome Section </button>
        </Link>
        <Link to="/gamification">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">Gamification </button>
        </Link>
        <Link to="/todoList">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">To do List </button>
        </Link>
        <Link to="/profilePage">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">profile Page</button>
        </Link>
        <Link to="/counsellorPage">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded">CounsellorPage </button>
        </Link>

       
      </div>
    </div>
  );
};

export default Home;
