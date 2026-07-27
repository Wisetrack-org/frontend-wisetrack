// src/api/parent.js
import axios from "axios";

export const fetchParentDashboardData = async (token) => {
  const response = await axios.get("http://localhost:3000/api/parent/parentDashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true
  });
  console.log("Response: ", response.data);
  
  return response.data;
};
