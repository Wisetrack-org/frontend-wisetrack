
// import { useState } from "react";
// import { FaUserGraduate } from "react-icons/fa";
// import { motion } from "framer-motion";

// const LoginStudent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Logging in:", { email, password });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e0e25] text-white px-6">
//       {/* Login Container */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#1e1e2e] p-8 rounded-xl shadow-md w-full max-w-md border border-[#2a2a3a]"
//       >
//         <div className="flex flex-col items-center">
//           <FaUserGraduate className="text-5xl text-[#1e3a8a] mb-3" />
//           <h2 className="text-3xl font-bold mb-6">Student Login</h2>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 bg-[#2a2a3a] rounded-lg focus:ring focus:ring-blue-500 outline-none border border-[#3a3a4a] text-white"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 bg-[#2a2a3a] rounded-lg focus:ring focus:ring-blue-500 outline-none border border-[#3a3a4a] text-white"
//             required
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-all"
//           >
//             Login
//           </motion.button>
//         </form>

//         {/* Additional Links */}
//         <div className="mt-4 text-sm text-gray-400 text-center">
//           <p>
//             Forgot Password? <span className="text-blue-500 cursor-pointer hover:underline">Reset here</span>
//           </p>
//           <p className="mt-2">
//             Don't have an account? <span className="text-blue-500 cursor-pointer hover:underline">Sign Up</span>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginStudent;





import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

const StudentLogin = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

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
          >
            Login as Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
