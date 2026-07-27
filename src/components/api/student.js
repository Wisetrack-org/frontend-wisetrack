// // src/api/student.js
// import axios from "axios";

// export const fetchStudentDashboardData = async (token) => {
//   const res = await axios.get(
//     "http://localhost:3000/api/student/studentProfile",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     }
//   );

//   return res.data?.data;
// };
import axios from "axios";

export const fetchStudentDashboardData = async (token) => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/student/studentProfile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    console.log("Page", res.data?.data);

    return res.data?.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
};
