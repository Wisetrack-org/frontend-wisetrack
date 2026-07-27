// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signup } from "../api/auth";

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     first_name: "",
//     last_name: "",
//     date_of_birth: "",
//     enrollment_date: "",
//     university_id: 1,
//     class_id: "",
//     semester: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const success = await signup(formData);
//       navigate(success ? "/login" : "/");
//     } catch (error) {
//       console.error("Signup failed", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="text"
//             name="first_name"
//             placeholder="First Name"
//             value={formData.first_name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Last Name"
//             value={formData.last_name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="date"
//             name="date_of_birth"
//             value={formData.date_of_birth}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="date"
//             name="enrollment_date"
//             value={formData.enrollment_date}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="number"
//             name="university_id"
//             placeholder="University ID"
//             value={formData.university_id}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="number"
//             name="class_id"
//             placeholder="Class ID (Optional)"
//             value={formData.class_id}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="number"
//             name="semester"
//             placeholder="Semester"
//             value={formData.semester}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = ["student", "teacher", "parent", "university"];

const initialForms = {
  student: {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    enrollment_date: "",
    university_id: "",
    class_id: "",
    semester: "",
  },
  teacher: {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    subject: "",
    hire_date: "",
    university_id: "",
  },
  university: {
    name: "",
    email: "",
    password: "",
    location: "",
    established_year: "",
  },
  parent: {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    student_id: "",
  },
};

const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData(initialForms[role]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting for", selectedRole, formData);
    // Replace with actual API call
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Sign Up</h1>

      {!selectedRole ? (
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleSelect(role)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 capitalize"
            >
              {role}
            </button>
          ))}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4 capitalize text-center">
            {selectedRole} Signup
          </h2>

          {Object.entries(formData).map(([key, value]) => (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {key.replace(/_/g, " ")}
              </label>
              <input
                type={
                  key.includes("password")
                    ? "password"
                    : key.includes("date") || key.includes("year")
                    ? "date"
                    : "text"
                }
                name={key}
                value={value}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedRole("");
                setFormData({});
              }}
              className="text-sm text-blue-600 hover:underline"
            >
              Change Role
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
