// src/pages/ParentDashboard.js
import { useSelector } from 'react-redux';
import Logout from '../components/logout';

const ParentDashboard = () => {
  const { user } = useSelector(state => state.auth);
  
  const firstName = user?.first_name || '';
  const lastName = user?.last_name || '';
  const email = user?.email || '';
  const parentId = user?.parent_id || '';
  
  return (
    <div className="dashboard">
      <h1>Parent Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {firstName} {lastName}</h2>
        <p>Email: {email}</p>
        <p>Parent ID: {parentId}</p>
      </div>
      <div className="dashboard-content">
        <h3>Your Children</h3>
        <div className="children-list">
          {/* apla api cha data ithe fill kr e.g. user?.je kai asel te*/}
          <p>No children information to display yet.</p>
        </div>
        
        <h3>Academic Progress</h3>
        <div className="academic-progress">
          <p>No academic progress data available yet.</p>
        </div>
        
        <h3>Upcoming Events</h3>
        <div className="events">
          <p>No upcoming events to display.</p>
        </div>
        
        <h3>Notifications</h3>
        <div className="notifications">
          <p>No notifications to display.</p>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default ParentDashboard;