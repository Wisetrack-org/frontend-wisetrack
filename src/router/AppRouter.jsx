import { createBrowserRouter } from "react-router-dom";
import Schedule from "../components/StudentDashboard/Schedule.jsx";
import SignUpPage from "../components/Signup/SignUpPage.jsx";
import Home from "../components/HomePage/Home.jsx";
import Signin from "../components/signin/page.jsx";
import ProtectedPage from "../components/protectedPage/Page.jsx";

const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/signin", element: <Signin /> },
  { path: "/studentProfile", element: <ProtectedPage /> },
]);

export default AppRouter;
