// src/redux/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user')) || null;
// const token = localStorage.getItem('token') || null;
const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;

const token = localStorage.getItem('token') || null;

const initialState = {
  user: user,
  token: token,
  role: user?.student_id ? 'student' : 
        user?.teacher_id ? 'teacher' : 
        user?.university_id ? 'university' : null,
  isAuthenticated: !!token,
  isLoading: false,
  error: null,
  message: ''
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, role }, thunkAPI) => {
    try {
      // Select the correct endpoint based on role
      const endpoint = 
        role === "student" ? `${BASE_URL}/api/studentSignin` :
        role === "teacher" ? `${BASE_URL}/api/teacherSignin` :
        role === "university" ? `${BASE_URL}/api/universitySignin` :
        null;
      
      if (!endpoint) {
        return thunkAPI.rejectWithValue('Invalid role selected');
      }

      const response = await axios.post(endpoint, {
        email,
        password
      }, {withCredentials: true});

      // Store user and token in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      return {
        user: response.data.user,
        token: response.data.token,
        role
      };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { role, ...data } = userData;
      
      // Select the correct endpoint based on role
      const endpoint = 
        role === "student" ? `${BASE_URL}/api/studentSignup` :
        role === "teacher" ? `${BASE_URL}/api/teacherSignup` :
        role === "university" ? `${BASE_URL}/api/universitySignup` :
        null;
      
      if (!endpoint) {
        return thunkAPI.rejectWithValue('Invalid role selected');
      }

      const response = await axios.post(endpoint, data);

      // On successful registration, we'll automatically log the user in
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      return {
        user: response.data.user,
        token: response.data.token,
        role
      };
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    // Clear data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // You can optionally make a server logout request if needed
    // await axios.post(`${BASE_URL}/api/logout`);
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Get user profile
export const getUserProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const role = state.auth.role;
      
      if (!role) {
        return thunkAPI.rejectWithValue('User role not found');
      }

      const config = {
        headers: {
          Authorization: `Bearer ${state.auth.token}`
        }
      };

      // Get the correct profile endpoint based on role
      let endpoint;
      switch (role) {
        case 'student':
          endpoint = '/api/student/studentProfile';
          break;
        case 'teacher':
          endpoint = '/api/teacher/teacherProfile';
          break;
        case 'university':
          endpoint = '/api/university/universityProfile';
          break;
        default:
          return thunkAPI.rejectWithValue('Invalid user role');
      }

      const response = await axios.get(`${BASE_URL}${endpoint}`, config);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to get user profile';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.error = null;
      state.message = '';
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.message = 'Login successful';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.message = 'Registration successful';
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
        state.isAuthenticated = false;
        state.message = 'Logged out successfully';
      })
      // Get Profile
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reset, clearError } = authSlice.actions;
export default authSlice.reducer;