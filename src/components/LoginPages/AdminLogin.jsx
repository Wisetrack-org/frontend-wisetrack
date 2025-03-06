import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin Logging in:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6">
      <div className="bg-red-700 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <FaUniversity className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-red-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-red-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 rounded-lg transition-all"
            onClick={() => navigate("/universityMainDashboard")}
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
