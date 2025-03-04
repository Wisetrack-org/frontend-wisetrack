import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoutes/ProtectedRoutes.jsx";
import { AuthProvider } from "./components/hooks/useAuth.jsx";
import Schedule from "./components/StudentDashboard/Schedule.jsx";
import SignUpPage from "./components/Signup/SignUpPage.jsx";
import Home from "./components/HomePage/Home.jsx";
import Signin from "./components/signin/page.jsx";
import ProtectedPage from "./components/protectedPage/Page.jsx";
import LandingPage from "./components/LandingPages/LandingPage.jsx";
import RoleSelection from "./components/LandingPages/RoleSelection.jsx";
import StudentLogin from "./components/LoginPages/StudentLogin.jsx";
import UniversityMainDashboard from "./components/UniversityDashboard/UniversityMainDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="roleSelection" element={<RoleSelection />} />
          <Route path="studentLogin" element={<StudentLogin />} />

          <Route
            path="/studentProfile"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/universityDashboard"
            element={
              <ProtectedRoute>
                <UniversityMainDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
