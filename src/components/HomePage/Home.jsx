import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Welcome</h1>
      <div className="flex space-x-4">
        <Link to="/signup">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
        </Link>
        <Link to="/schedule">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Student Dashboard</button>
        </Link>
        <Link to="/dailyYogaChallenge">
          <button className="px-4 py-2 bg-green-500 text-white rounded">dailyYogaChallenge</button>
        </Link>
        <Link to="/yogaMeditation">
          <button className="px-4 py-2 bg-green-500 text-white rounded">yogaMeditation</button>
        </Link>
        <Link to="/mainStudentPage">
          <button className="px-4 py-2 bg-green-500 text-white rounded">mainStudentPage</button>
        </Link>
        <Link to="/motivationalQuote">
          <button className="px-4 py-2 bg-green-500 text-white rounded">motivationalQuote</button>
        </Link>
        <Link to="/parentLogin">
          <button className="px-4 py-2 bg-green-500 text-white rounded">parentLogin</button>
        </Link>
        <Link to="/adminLogin">
          <button className="px-4 py-2 bg-green-500 text-white rounded">adminLogin</button>
        </Link> 
        <Link to="/facultyLogin">
          <button className="px-4 py-2 bg-green-500 text-white rounded">parentLogin</button>
        </Link>
        <Link to="/studentLogin">
          <button className="px-4 py-2 bg-green-500 text-white rounded">studentLogin</button>
        </Link>
        <Link to="/roleSelection">
          <button className="px-4 py-2 bg-green-500 text-white rounded">roleSelection</button>
        </Link>
        <Link to="/landingPage">
          <button className="px-4 py-2 bg-green-500 text-white rounded">landingPage</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
