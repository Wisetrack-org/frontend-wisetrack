// src/components/PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ allowedRoles = [] }) => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  
  const userType = user?.userType || (user ? 'students' : '');
  
  const isAuthorized = 
    isAuthenticated && 
    (allowedRoles.length === 0 || allowedRoles.includes(userType));
  
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};

export default PrivateRoute;