// import { createSlice } from '@reduxjs/toolkit';
// import authService from './authService';

// // Get user from localStorage
// const loadUser = () => {
//   try {
//     const userData = localStorage.getItem('user');
//     return userData ? JSON.parse(userData) : null;
//   } catch (error) {
//     console.error('Error loading user from localStorage:', error);
//     return null;
//   }
// };

// const initialState = {
//   user: loadUser(),
//   isAuthenticated: Boolean(loadUser()),
//   isLoading: false,
//   error: null,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     // Login start
//     loginStart: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     // Login success
//     loginSuccess: (state, action) => {
//       state.isLoading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.error = null;
//     },
//     // Login fail
//     loginFail: (state, action) => {
//       state.isLoading = false;
//       state.isAuthenticated = false;
//       state.user = null;
//       state.error = action.payload;
//     },
//     // Logout
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       // Don't call localStorage here - it's a side effect
//       // We'll handle this in the thunk
//     },
//     // Reset state
//     reset: (state) => {
//       state.isLoading = false;
//       state.error = null;
//     },
//     // Clear error
//     clearError: (state) => {
//       state.error = null;
//     }
//   },
// });

// // Export actions
// export const { loginStart, loginSuccess, loginFail, logout, reset, clearError } = authSlice.actions;

// // Login action (thunk)
// export const login = (userData) => async (dispatch) => {
//   try {
//     dispatch(loginStart());
    
//     // Determine which endpoint to use based on user role
//     let endpoint;
//     switch (userData.role) {
//       case 'student':
//         endpoint = 'http://localhost:3000/api/studentSignin';
//         break;
//       case 'teacher':
//         endpoint = 'http://localhost:3000/api/teacherSignin';
//         break;
//       case 'university':
//         endpoint = 'http://localhost:3000/api/universitySignin';
//         break;
//       default:
//         endpoint = 'http://localhost:3000/api/studentSignin';
//     }
    
//     const response = await authService.login(endpoint, userData);
    
//     // Save user to localStorage
//     if (response) {
//       localStorage.setItem('user', JSON.stringify(response));
//     }
    
//     dispatch(loginSuccess(response));
//   } catch (error) {
//     const message = 
//       error.response?.data?.message || 
//       error.message || 
//       'Login failed';
//     dispatch(loginFail(message));
//   }
// };

// // Logout thunk - handles side effects properly
// export const logoutUser = () => async (dispatch) => {
//   try {
//     // Call logout service if needed
//     await authService.logout();
    
//     // Remove from localStorage
//     localStorage.removeItem('user');
    
//     // Update state
//     dispatch(logout());
//   } catch (error) {
//     console.error('Logout error:', error);
//   }
// };

// export default authSlice.reducer;
// src/redux/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const loadUser = () => {
  try {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
    return null;
  }
};

const initialState = {
  user: loadUser(),
  isAuthenticated: Boolean(loadUser()),
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    reset: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

// Export actions
export const { loginStart, loginSuccess, loginFail, logout, reset, clearError } = authSlice.actions;

// ithun login hota
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(loginStart());
    
    // he endpoints
    let endpoint;
    switch (userData.role) {
      case 'student':
        endpoint = 'http://localhost:3000/api/studentSignin';
        break;
      case 'teacher':
        endpoint = 'http://localhost:3000/api/teacherSignin';
        break;
      case 'university':
        endpoint = 'http://localhost:3000/api/universitySignin';
        break;
      case 'parent':
        endpoint = 'http://localhost:3000/api/parentSignin';
        break;
      default:
        endpoint = '/api/studentSignin';
    }
    
    const response = await authService.login(endpoint, userData);
    
    // safety sathi
    const userWithRole = {
      ...response,
      userType: response.userType || mapRoleToUserType(userData.role)
    };
    
    // localStorage
    if (userWithRole) {
      localStorage.setItem('user', JSON.stringify(userWithRole));
    }
    
    dispatch(loginSuccess(userWithRole));
  } catch (error) {
    const message = 
      error.response?.data?.message || 
      error.message || 
      'Login failed';
    dispatch(loginFail(message));
  }
};

const mapRoleToUserType = (role) => {
  switch (role) {
    case 'student':
      return 'students';
    case 'teacher':
      return 'teachers';
    case 'university':
      return 'universities';
    case 'parent':
      return 'parents';
    default:
      return 'students';
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await authService.logout();
    
    localStorage.removeItem('user');
    
    dispatch(logout());
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export default authSlice.reducer;