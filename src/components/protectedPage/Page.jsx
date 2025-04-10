// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import { useUserData } from "../api/student";

// const ProtectedContent = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const { userData, loading, error } = useUserData(user, logout, navigate);

//   const handleLogout = () => {
//     logout();
//     navigate("/signin");
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!userData) return <div>No user data available.</div>;

//   return (
//   <div>
//     <h1>Protected Content</h1>
//     <p>Welcome, {userData?.first_name} {userData?.last_name}!</p>
    
//     <h2>Subjects:</h2>
//     {userData?.subjects?.length > 0 ? (
//       <ul>
//         {userData.subjects.map((subject) => (
//           <li key={subject.subject_id}>{subject.subject_name}</li>
//         ))}
//       </ul>
//     ) : (
//       <p>No subjects found.</p>
//     )}

//     <button 
//       onClick={handleLogout} 
//       className="bg-[#1e3a8a] hover:bg-[#142654] py-3 px-6 rounded-2xl text-white mt-4"
//     >
//       Logout
//     </button>
//   </div>
// );
// };

// export default ProtectedContent;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (!isAuthenticated) return <div>Please login to continue.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
