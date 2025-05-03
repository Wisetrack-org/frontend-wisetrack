// src/pages/TeacherDashboard.js
import { useSelector } from 'react-redux';
import Logout from '../components/logout';

const TeacherDashboard = () => {
  const { user } = useSelector(state => state.auth);
  
  // Make sure user exists before trying to access its properties
  const firstName = user?.first_name || '';
  const lastName = user?.last_name || '';
  const email = user?.email || '';
  const teacherId = user?.teacher_id || '';
  
  return (
    <div className="dashboard">
      <h1>Teacher Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {firstName} {lastName}</h2>
        <p>Email: {email}</p>
        <p>Teacher ID: {teacherId}</p>
      </div>
      <div className="dashboard-content">
        <h3>Your Classes</h3>
        <div className="classes-list">
          {/* This would be populated from API data */}
          <p>No classes to display yet.</p>
        </div>
        
        <h3>Your Schedule</h3>
        <div className="schedule">
          {/* This would be populated from API data */}
          <p>No scheduled classes yet.</p>
        </div>
        
        <h3>Recent Activities</h3>
        <div className="activities">
          {/* This would be populated from API data */}
          <p>No recent activities to display.</p>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default TeacherDashboard;