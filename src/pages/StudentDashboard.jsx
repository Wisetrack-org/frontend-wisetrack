// src/pages/StudentDashboard.js
import { useSelector } from 'react-redux';
import Logout from '../components/Logout';

const StudentDashboard = () => {
  const { user } = useSelector(state => state.auth);

  const firstName = user?.first_name || '';
  const lastName = user?.last_name || '';
  const email = user?.email || '';
  
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {firstName} {lastName}</h2>
        <p>Email: {email}</p>
      </div>
      <div className="dashboard-content">
        <p>This is the student dashboard content</p>
      </div>
      <Logout />
    </div>
  );
};

export default StudentDashboard;