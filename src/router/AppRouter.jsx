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

const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/signup", element: <SignUpPage /> }, // Add the SignUp route
  // { path: "*", element: <NotFound /> },
]);

export default AppRouter;
