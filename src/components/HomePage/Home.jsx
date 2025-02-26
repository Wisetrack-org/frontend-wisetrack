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
      </div>
    </div>
  );
};

export default Home;
