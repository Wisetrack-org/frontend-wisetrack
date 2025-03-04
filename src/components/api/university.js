import { useState, useEffect } from "react";
import {BASE_URL} from "../constants/constants"

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
        console.log("Fetching user data with token:", user.token);
        const response = await fetch(
          `${BASE_URL}/api/university/universityDashboard`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: user.token ? `Bearer ${user.token}` : undefined,
            },
          }
        );

        console.log("User token:", user?.token);


        console.log("response: ", response);
        

        if (response.ok) {
          const responseData = await response.json();
          setUserData(responseData.data);
          console.log("Fetched User Data:", responseData);
        } else if (response.status === 401) {
          console.error("Unauthorized:", response.status);
          logout();
          navigate("/");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch data");
        }
      } catch (err) {
        setError("An error occurred");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, navigate, logout]);

  return { userData, loading, error };
};
