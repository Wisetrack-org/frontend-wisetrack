// src/pages/Login.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset, clearError } from '../redux/features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' // Default role
  });
  
  const { email, password, role } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, isLoading, isAuthenticated, error } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect based on user role
      switch (role) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'university':
          navigate('/university/dashboard');
          break;
        default:
          navigate('/');
      }
    }
    
    // Reset the state when component unmounts
    return () => {
      dispatch(reset());
    };
  }, [isAuthenticated, user, navigate, dispatch, role]);
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
    // Clear errors when user starts typing again
    if (error) {
      dispatch(clearError());
    }
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, role }));
  };
  
  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="role">I am a:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={onChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="university">University</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
      
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;