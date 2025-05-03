// src/utils/axiosConfig.js
import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/features/auth/authSlice';

// axios.defaults.baseURL = 'http://localhost:5000';

// Include credentials
axios.defaults.withCredentials = true;

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 errors (unauthorized)
    if (error.response && error.response.status === 401) {
      // Dispatch logout action
      store.dispatch(logout());
      
      // Redirect to login (you might want to handle this differently)
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default axios;