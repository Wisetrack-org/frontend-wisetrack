import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUserData } from "../api/university";

const UniversityMainDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { userData, loading, error } = useUserData(user, logout, navigate);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No university data available.</div>;

  return (
    <div>
      <h1>University Dashboard</h1>
      <p>Welcome, {userData?.university_name}!</p>
      <button 
        onClick={handleLogout} 
        className="bg-[#1e3a8a] hover:bg-[#142654] py-3 px-6 rounded-2xl text-white mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default UniversityMainDashboard;