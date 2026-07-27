// src/components/Logout.js
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/features/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };
  
  return (
    <button 
      onClick={handleLogout}
      className="logout-button"
    >
      Logout
    </button>
  );
};

export default Logout;