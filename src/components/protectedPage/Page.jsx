import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUserData } from "../api/student";

const ProtectedContent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { userData, loading, error } = useUserData(user, logout, navigate);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No user data available.</div>;

  return (
    <div>
      <h1>Protected Content</h1>
      <p>Welcome, {userData?.first_name} {userData?.last_name}!</p>
      
      <h2>Subjects:</h2>
      {userData?.subjects?.length > 0 ? (
        <ul>
          {userData.subjects.map((subject) => (
            <li key={subject.subject_id}>{subject.subject_name}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects found.</p>
      )}
  
      <button 
        onClick={handleLogout} 
        className="bg-[#1e3a8a] hover:bg-[#142654] py-3 px-6 rounded-2xl text-white mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default ProtectedContent;
