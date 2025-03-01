// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Schedule from "../components/StudentDashboard/Schedule.jsx";

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/schedule" element={<Schedule />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;


import { createBrowserRouter } from "react-router-dom";
import Schedule from "../components/StudentDashboard/Schedule.jsx";
import SignUpPage from "../components/Signup/SignUpPage.jsx";
import Home from "../components/HomePage/Home.jsx";
import LandingPage from "../components/LandingPages/LandingPage.jsx"
import RoleSelection from "../components/LandingPages/RoleSelection.jsx"
import StudentLogin from "../components/LoginPages/StudentLogin.jsx"
import FacultyLogin from "../components/LoginPages/FacultyLogin.jsx"
import AdminLogin from "../components/LoginPages/AdminLogin.jsx";
import ParentLogin from "../components/LoginPages/ParentLogin.jsx";
import MotivationalQuote from "../components/StudentDashboard/MotivationalQuote.jsx"
import MainStudentPage from "../components/StudentDashboard/MainStudentPage.jsx"
import YogaMeditation from "../components/StudentDashboard/YogaMeditation.jsx"
import DailyYogaChallenge from "../components/StudentDashboard/DailyYogaChallenge.jsx"

const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/signup", element: <SignUpPage /> }, // Add the SignUp route
  { path: "/landingPage", element: <LandingPage /> }, 
  { path: "/roleSelection", element: <RoleSelection /> }, 
  { path: "/studentLogin", element: <StudentLogin /> }, 
  { path: "/facultyLogin", element: <FacultyLogin /> }, 
  { path: "/adminLogin", element: <AdminLogin /> }, 
  { path: "/parentLogin", element: <ParentLogin /> }, 
  { path: "/motivationalQuote", element: <MotivationalQuote /> }, 
  { path: "/mainStudentPage", element: <MainStudentPage /> }, 
   { path: "yogaMeditation", element: <YogaMeditation /> },
   { path: "dailyYogaChallenge", element: <DailyYogaChallenge /> },
]);

export default AppRouter;
