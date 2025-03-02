import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";

const ProtectedContent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://nodebackend-wisetrack-production.up.railway.app/api/student/studentProfile",
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Authorization": user.token ? `Bearer ${user.token}` : undefined
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setUserData(responseData.data);
        }else if (response.status === 401) {
          console.error("Unauthorized:", response.status);
          logout();
          navigate("/");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError("An error occurred");
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, navigate, logout]);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
    <h1>Protected Content</h1>
    <p>Welcome, {userData?.first_name} {userData?.last_name}!</p>
    <button onClick={handleLogout} className="bg-[#1e3a8a] hover:bg-[#142654] py-3 px-6 rounded-2xl text-white mt-4">Logout</button>
  </div>
  );
};

export default ProtectedContent;
