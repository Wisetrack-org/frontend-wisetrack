import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const StudentLogin = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Student Logging in:", { rollNumber, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6">
      <div className="bg-[#1e3a8a] p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <FaUserGraduate className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Student Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-all"
            onClick={() => navigate("/mainStudentPage")}

          >
            Login as Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
