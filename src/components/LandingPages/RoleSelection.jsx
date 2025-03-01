import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie, FaUniversity } from "react-icons/fa";

const roles = [
  { name: "Student", icon: <FaUserGraduate />, route: "/studentLogin", color: "bg-blue-700" },
  { name: "Faculty", icon: <FaChalkboardTeacher />, route: "/facultyLogin", color: "bg-green-700" },
  { name: "Parent", icon: <FaUserTie />, route: "/parentLogin", color: "bg-yellow-700" },
  { name: "Admin (University)", icon: <FaUniversity />, route: "/adminLogin", color: "bg-red-700" },
];

const SelectCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6 text-center">
      
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-3xl md:text-5xl font-extrabold mb-6"
      >
        Select Your Role
      </motion.h1>

      {/* Role Selection Cards */}
      <div className="w-full max-w-md md:max-w-3xl flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
        {roles.map((role, index) => (
          <motion.div
            key={role.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(role.route)}
            className={`cursor-pointer w-full md:w-[45%] lg:w-[22%] p-6 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg ${role.color} hover:brightness-110 transition-all duration-300`}
          >
            <div className="text-5xl md:text-6xl mb-3">{role.icon}</div>
            <h2 className="text-xl md:text-2xl font-semibold">{role.name}</h2>
          </motion.div>
        ))}
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-6 text-gray-400 text-sm"
      >
        Wisetrack - Empowering Education
      </motion.div>
    </div>
  );
};

export default SelectCategory;
