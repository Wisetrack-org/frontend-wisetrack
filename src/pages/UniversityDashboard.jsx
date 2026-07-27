// src/pages/UniversityDashboard.js
import { useSelector } from 'react-redux';
import Logout from '../components/logout.jsx';

const UniversityDashboard = () => {
  const { user } = useSelector(state => state.auth);
  
  const name = user?.name || 'University';
  const email = user?.email || '';
  const universityId = user?.university_id || '';
  
  return (
    <div className="dashboard">
      <h1>University Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {name}</h2>
        <p>Email: {email}</p>
        <p>University ID: {universityId}</p>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Programs</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Faculty</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Students</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Applications</h3>
            <div className="stat-value">0</div>
          </div>
        </div>
        
        <h3>Recent Activities</h3>
        <div className="activities">
          {/* ithe apla api mdhun data yeil e.g. user.college_name */}
          <p>No recent activities to display.</p>
        </div>
        
        <h3>Upcoming Events</h3>
        <div className="events">
          <p>No upcoming events to display.</p>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default UniversityDashboard;