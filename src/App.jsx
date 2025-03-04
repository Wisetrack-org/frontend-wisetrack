// import { RouterProvider } from "react-router-dom";
// import AppRouter from "./router/AppRouter";

// function App() {
//   return <RouterProvider router={AppRouter} />;
// }

// export default App;




import React from 'react';
import MainLayout from "./components/MainLayout";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from "./components/StudentDashboard/Schedule.jsx";
import SignUpPage from "./components/Signup/SignUpPage.jsx";
import Home from "./components/HomePage/Home.jsx";
import LandingPage from "./components/LandingPages/LandingPage.jsx"
import RoleSelection from "./components/LandingPages/RoleSelection.jsx"
import StudentLogin from "./components/LoginPages/StudentLogin.jsx"
import FacultyLogin from "./components/LoginPages/FacultyLogin.jsx"
import AdminLogin from "./components/LoginPages/AdminLogin.jsx";
import ParentLogin from "./components/LoginPages/ParentLogin.jsx";
import MotivationalQuote from "./components/StudentDashboard/MotivationalQuote.jsx"
import MainStudentPage from "./components/StudentDashboard/MainStudentPage.jsx"
import YogaMeditation from "./components/StudentDashboard/YogaMeditation.jsx"
import DailyYogaChallenge from "./components/StudentDashboard/DailyYogaChallenge.jsx"
import VideoLibrary from "./components/StudentDashboard/VideoLibrary.jsx";
import GamesPage from "./components/StudentDashboard/GamesPage.jsx"
import RelaxationMusic from "./components/StudentDashboard/MusicLibrary.jsx";
import AdditionalCourses from "./components/StudentDashboard/AdditionalCourses.jsx";
import WelcomeSection from "./components/StudentDashboard/WelcomeSection.jsx";
import TodoList from './components/StudentDashboard/TodoList.jsx';
import Gamification from "./components/StudentDashboard/Gamification/Gamification.jsx"
import ProfilePage from "./components/StudentDashboard/Gamification/ProfilePage.jsx"
import LogicGames from "./components/StudentDashboard/Gamification/LogicGames.jsx";
import MathChallenges from "./components/StudentDashboard/Gamification/MathChallenges.jsx"
import MemoryBoost from "./components/StudentDashboard/Gamification/MemoryBoost.jsx"
import PuzzleQuest from "./components/StudentDashboard/Gamification/PuzzleQuest.jsx"
import RiddlesFun from "./components/StudentDashboard/Gamification/RiddlesFun.jsx"
import SpeedTest from "./components/StudentDashboard/Gamification/SpeedTest.jsx"
import CounsellorPage from './components/StudentDashboard/ConsellorPage.jsx';
import StudentNotesViewer from "./components/StudentDashboard/StudentNotesViewer";
import TeacherNotesUploader from "./components/TeacherDashboard/TeacherNotesUploader";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/roleSelection" element={<RoleSelection />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/facultyLogin" element={<FacultyLogin />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/parentLogin" element={<ParentLogin />} />
          <Route path="/motivationalQuote" element={<MotivationalQuote />} />
          <Route path="/mainStudentPage" element={<MainStudentPage />} />
          <Route path="/yogaMeditation" element={<YogaMeditation />} />
          <Route path="/dailyYogaChallenge" element={<DailyYogaChallenge />} />
          <Route path="/videoLibrary" element={<VideoLibrary />} />
          <Route path="/gamesPage" element={<GamesPage />} />
          <Route path="/relaxationMusic" element={<RelaxationMusic />} />
          <Route path="/additionalCourses" element={<AdditionalCourses />} />
          <Route path="/welcomeSection" element={<WelcomeSection />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/logicGames" element={<LogicGames />} />
          <Route path="/mathChallenges" element={<MathChallenges />} />
          <Route path="/memoryBoost" element={<MemoryBoost />} />
          <Route path="/puzzleQuest" element={<PuzzleQuest />} />
          <Route path="/riddlesFun" element={<RiddlesFun />} />
          <Route path="/speedTest" element={<SpeedTest />} />
          <Route path="/counsellorPage" element={<CounsellorPage />} />
          <Route path="/studentNotesViewer" element={<StudentNotesViewer />} />
          <Route path="/teacherNotesUploader" element={<TeacherNotesUploader />} />

          {/* Optional: Add a catch-all route for unknown URLs */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
}

export default App;