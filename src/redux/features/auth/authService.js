import axios from 'axios';

axios.defaults.withCredentials = true;

// Login user
const login = async (endpoint, userData) => {
  const response = await axios.post(endpoint, {
    email: userData.email,
    password: userData.password
  });

  if (response.data && response.data.data) {
    return response.data.data;
  }
  
  return null;
};

// Logout user
const logout = async () => {
  // If you have a server endpoint to clear cookies, call it here
  // For example: await axios.post('/api/logout');
  
  return true;
};

// Get current user
const getCurrentUser = () => {
  try {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user from localStorage:', error);
    return null;
  }
};

const authService = {
  login,
  logout,
  getCurrentUser
};

export default authService;