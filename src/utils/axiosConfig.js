// src/utils/axiosConfig.js
import axios from 'axios';
import store from '../redux/store';
import { logout } from '../redux/features/auth/authSlice';

const BASE_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    
    // Handle unauthorized errors (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Check if the error is due to token expiration
      if (error.response?.data?.message?.includes('expired')) {
        // Logout the user
        store.dispatch(logout());
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;