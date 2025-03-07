import { useEffect, useState } from "react";

export const predictStudent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "fastapi-wisetrack-production.up.railway.app/predict",
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          setUserData(responseData);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch user data");
        }
      } catch (error) {
        setError("An error occurred");
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [user, navigate, logout]);

  return { userData, loading, error };
};
