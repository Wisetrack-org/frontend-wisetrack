// // src/utils/axiosConfig.js
// import axios from 'axios';
// import { store } from '../redux/store';
// import { logout } from '../redux/features/auth/authSlice';

// // axios.defaults.baseURL = 'http://localhost:5000';

// // Include credentials
// axios.defaults.withCredentials = true;

// // Request interceptor
// axios.interceptors.request.use(
//   (config) => {
//     // if (user?.token) {
//     //   config.headers.Authorization = `Bearer ${user.token}`;
//     // }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle 401 errors (unauthorized)
//     if (error.response && error.response.status === 401) {
//       // Dispatch logout action
//       store.dispatch(logout());
      
//       // Redirect to login (you might want to handle this differently)
//       window.location.href = '/login';
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default axios;

import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/features/auth/authSlice';

// Set the base URL for all requests - adjust this to match your server
axios.defaults.baseURL = 'http://localhost:3000';

// Include credentials for all requests
axios.defaults.withCredentials = true;

// Keep track of if we're already redirecting to avoid infinite loops
let isRedirecting = false;

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Get the current state from the Redux store
    const state = store.getState();
    const token = state.auth?.token;
    
    // Only add the token if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 errors (unauthorized) but prevent infinite loops
    if (error.response && error.response.status === 401 && !isRedirecting) {
      console.log('401 Unauthorized, logging out');
      isRedirecting = true;
      
      // Dispatch logout action to clear auth state
      store.dispatch(logout());
      
      // Reset the redirecting flag after a short delay
      setTimeout(() => {
        isRedirecting = false;
      }, 1000);
      
      // Redirect to login (you might want to handle this differently)
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default axios;