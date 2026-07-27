import axios from "axios";

export const fetchUniversityDashboardData = async (token) => {
  const res = await axios.get("http://localhost:3000/api/university/universityDashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};
