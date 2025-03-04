import { useState, useEffect } from "react";

export const useUserData = (user, logout, navigate) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
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
              Authorization: user.token ? `Bearer ${user.token}` : undefined,
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setUserData({
            ...responseData.data.studentProfile, 
            subjects: responseData.data.subjects
          });          
          // console.log("Fetched User Data:", responseData);
        } else if (response.status === 401) {
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

  return { userData, loading, error };
};
