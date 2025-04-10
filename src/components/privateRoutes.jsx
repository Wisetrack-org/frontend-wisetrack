// src/components/PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, role } = useSelector(state => state.auth);
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If allowedRoles is empty array or includes the user's role, allow access
  if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
    return <Outlet />;
  }
  
  // Otherwise, redirect to an unauthorized page
  return <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;