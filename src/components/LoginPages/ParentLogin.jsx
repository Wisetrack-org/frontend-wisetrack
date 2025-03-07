import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

=======
>>>>>>> 90a23bc9cab568cfa37e6fd888eb060975f10e72

const ParentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> 90a23bc9cab568cfa37e6fd888eb060975f10e72

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Parent Logging in:", { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6">
      <div className="bg-yellow-700 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <FaUserTie className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Parent Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-800 hover:bg-yellow-900 text-white font-bold py-3 rounded-lg transition-all"
<<<<<<< HEAD
            onClick={() => navigate("/parentDashboard")}

=======
>>>>>>> 90a23bc9cab568cfa37e6fd888eb060975f10e72
          >
            Login as Parent
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
