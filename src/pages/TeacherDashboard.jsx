// // src/pages/TeacherDashboard.js
// import { useSelector } from 'react-redux';
// import Logout from '../components/Logout';

// const TeacherDashboard = () => {
//   const { user } = useSelector(state => state.auth);
  
//   // Make sure user exists before trying to access its properties
//   const firstName = user?.first_name || '';
//   const lastName = user?.last_name || '';
//   const email = user?.email || '';
//   const teacherId = user?.teacher_id || '';
  
//   return (
//     <div className="dashboard">
//       <h1>Teacher Dashboard</h1>
//       <div className="user-info">
//         <h2>Welcome, {firstName} {lastName}</h2>
//         <p>Email: {email}</p>
//         <p>Teacher ID: {teacherId}</p>
//       </div>
//       <div className="dashboard-content">
//         <h3>Your Classes</h3>
//         <div className="classes-list">
//           {/* This would be populated from API data */}
//           <p>No classes to display yet.</p>
//         </div>
        
//         <h3>Your Schedule</h3>
//         <div className="schedule">
//           {/* This would be populated from API data */}
//           <p>No scheduled classes yet.</p>
//         </div>
        
//         <h3>Recent Activities</h3>
//         <div className="activities">
//           {/* This would be populated from API data */}
//           <p>No recent activities to display.</p>
//         </div>
//       </div>
//       <Logout />
//     </div>
//   );
// };

// export default TeacherDashboard;
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Logout from '../components/Logout';

const TeacherDashboard = () => {
  const { user, token } = useSelector(state => state.auth);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/teacher/teacherDashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setDashboardData(res.data?.data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
        setApiError('Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [token]);

  const firstName = dashboardData?.teacherFirstName || '';
  const lastName = dashboardData?.teacherLastName || '';
  const email = user?.email || '';
  const teacherId = user?.teacher_id || '';

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Welcome, {firstName} {lastName}</h2>
        <p>Email: {email}</p>
        <p>Teacher ID: {teacherId}</p>
      </div>

      {loading ? (
        <p>Loading dashboard...</p>
      ) : apiError ? (
        <p className="text-red-600">{apiError}</p>
      ) : (
        <>
          {/* Assigned Classes */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Assigned Classes</h3>
            {dashboardData.assigned_classes.length > 0 ? (
              <ul className="list-disc ml-5">
                {dashboardData.assigned_classes.map((cls, index) => (
                  <li key={index}>
                    Year: {cls.academic_year}, Branch: {cls.branch}, Class ID: {cls.class_id}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No assigned classes found.</p>
            )}
          </div>

          {/* Students */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Students</h3>
            {dashboardData.students.length > 0 ? (
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Semester</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Branch</th>
                    <th className="p-2 border">Year</th>
                    <th className="p-2 border">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.students.map((student) => (
                    <tr key={student.student_id} className="hover:bg-gray-50">
                      <td className="p-2 border">{student.first_name} {student.last_name}</td>
                      <td className="p-2 border">{student.email}</td>
                      <td className="p-2 border">{student.semester}</td>
                      <td className="p-2 border">{student.class_name}</td>
                      <td className="p-2 border">{student.branch}</td>
                      <td className="p-2 border">{student.academic_year}</td>
                      <td className="p-2 border">{student.subjects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No students found.</p>
            )}
          </div>
        </>
      )}

      <Logout />
    </div>
  );
};

export default TeacherDashboard;
