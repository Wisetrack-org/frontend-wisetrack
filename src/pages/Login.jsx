// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login, reset, clearError } from '../redux/features/auth/authSlice';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: 'student' // default ahe
//   });
  
//   const { email, password, role } = formData;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   const { user, isLoading, isAuthenticated, error } = useSelector(state => state.auth);
  
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       const userType = user.userType || role;
      
//       switch (userType) {
//         case 'students':
//         case 'student':
//           navigate('/student/dashboard');
//           break;
//         case 'teachers':
//         case 'teacher':
//           navigate('/teacher/dashboard');
//           break;
//         case 'universities':
//         case 'university':
//           navigate('/university/dashboard');
//           break;
//         case 'parents':
//         case 'parent':
//           navigate('/parent/dashboard');
//           break;
//         default:
//           navigate('/student/dashboard');
//       }
//     }
    
//     return () => {
//       dispatch(reset());
//     };
//   }, [isAuthenticated, user, navigate, dispatch]);
  
//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
    
//     if (error) {
//       dispatch(clearError());
//     }
//   };
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password, role }));
//   };
  
//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       {error && <div className="error-message">{error}</div>}
      
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label htmlFor="role">I am a:</label>
//           <select
//             id="role"
//             name="role"
//             value={role}
//             onChange={onChange}
//           >
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//             <option value="university">University</option>
//             <option value="parent">Parent</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={onChange}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={onChange}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
        
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Loading...' : 'Login'}
//         </button>
//       </form>
      
//       <p>
//         Don't have an account? <a href="/register">Register here</a>
//       </p>
//     </div>
//   );
// };

// export default Login;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login, reset, clearError } from "../redux/features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student", // default
  });

  const { email, password, role } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated && user) {
      const userType = user.userType || role;

      switch (userType) {
        case "students":
        case "student":
          navigate("/student/dashboard");
          break;
        case "teachers":
        case "teacher":
          navigate("/teacher/dashboard");
          break;
        case "universities":
        case "university":
          navigate("/university/dashboard");
          break;
        case "parents":
        case "parent":
          navigate("/parent/dashboard");
          break;
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [isAuthenticated, user, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (error) {
      dispatch(clearError());
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, role }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-white px-6">
      <div className="bg-[#1e3a8a] p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <FaUserGraduate className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Login</h2>

        {error && (
          <div className="text-red-400 text-sm mb-4 bg-red-800 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4 text-left">
          <select
            name="role"
            value={role}
            onChange={onChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="university">University</option>
            <option value="parent">Parent</option>
          </select>

          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-all"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-300 underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
