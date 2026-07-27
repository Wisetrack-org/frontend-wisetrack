import axios from "axios";

export const fetchTeacherDashboardData = async (token) => {
  const res = await axios.get(
    "http://localhost:3000/api/teacher/teacherDashboard",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return res.data?.data;
};
