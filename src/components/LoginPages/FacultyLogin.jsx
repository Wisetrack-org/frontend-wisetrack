import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const FacultyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Faculty Logging in:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6">
      <div className="bg-green-700 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <FaChalkboardTeacher className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Faculty Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-green-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-green-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3 rounded-lg transition-all"
          >
            Login as Faculty
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyLogin;
