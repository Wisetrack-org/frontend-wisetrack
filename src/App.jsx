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
import StudentComplaintBox from './components/StudentDashboard/StudentComplaintBox.jsx';
import UniversityComplaints from './components/UniversityDashboard/UniversityComplaints.jsx';
import StudentQnA from './components/StudentDashboard/StudentQnA.jsx';
import FacultyQnA from './components/TeacherDashboard/FacultyQnA.jsx';
import CodingPlatform from './components/StudentDashboard/CodingPlatform.jsx';
import TeacherMainDashboard from './components/TeacherDashboard/TeacherMainDashboard.jsx';
import MilestoneTracker from './components/StudentDashboard/MilestoneTracker.jsx'
import ParentDashboard from './components/ParentDashboard/ParentMainDashboard.jsx';
import Motivation from './components/StudentDashboard/Motivation/Motivation.jsx';
import AssignmentUpload from './components/TeacherDashboard/AssignmentUploads.jsx';
import AssignmentViewer from './components/StudentDashboard/AssignmentViewer.jsx';
import SkillDevlopment from './components/StudentDashboard/SkillDevlopment.jsx'
import CarrerGoalModule from './components/StudentDashboard/CarrerGoalModule.jsx'
import Defaulter from "./components/TeacherDashboard/Defaulter.jsx";
import DailyQuote from "./components/StudentDashboard/Motivation/DailyQuiote.jsx"
import MotivationVideo from "./components/StudentDashboard/Motivation/MotivationVideo.jsx"
import Podcast from "./components/StudentDashboard/Motivation/Podcast.jsx"
import Productivity from "./components/StudentDashboard/Motivation/Productivity.jsx"
import AssignmentUploadValidator from './components/AssignmentUploader.jsx'
import AssignmentViewerValidator from './components/AssignmentViewer.jsx'
import UniversityDashboard from './components/UniversityDashboard/UniversityMainDashboard.jsx';
import DropoutPredictionForm from './components/StudentDashboard/DroupoutPredictionForm.jsx';
import UniversityTimeTable from './components/UniversityDashboard/UniversityTimeTable.jsx'
import TimetableView from './components/StudentDashboard/TimetableView.jsx';
import GetAnnouncement from './components/Announcement/GetAnnouncement.jsx';
import PostAnnouncement from './components/Announcement/PostAnnouncement.jsx';
import MarksUpload from './components/UniversityDashboard/MarksUpload.jsx';
import MarksDashboard from './components/StudentDashboard/MarksDashboard.jsx';
import StudentData from './components/UniversityDashboard/StudentData.jsx'
import TeacherList from './components/UniversityDashboard/TeacherList.jsx';
import WeeklyTestMarks from './components/TeacherDashboard/WeeklyTestMarks.jsx';
import WeeklyTestMarksS from './components/StudentDashboard/WeeklyTestMarksS.jsx';
import AssignmentManager from './components/StudentDashboard/AssignmentManager.jsx';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
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
          <Route path="/studentComplaintBox" element={<StudentComplaintBox />} />
          <Route path="/universityComplaints" element={<UniversityComplaints />} />
          <Route path="/studentQnA" element={<StudentQnA />} />
          <Route path="/facultyQnA" element={<FacultyQnA />} />
          <Route path="/codingPlatform" element={<CodingPlatform />} />
          <Route path="/teacherMainDashboard" element={<TeacherMainDashboard />} />
          <Route path="/milestoneTracker" element={<MilestoneTracker />} />
          <Route path="/parentDashboard" element={<ParentDashboard />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/assignmentUpload" element={<AssignmentUpload />} />
          <Route path="/assignmentViewer" element={<AssignmentViewer />} />
          <Route path="/skillDevlopment" element={<SkillDevlopment />} />
          <Route path="/carrerGoalModule" element={<CarrerGoalModule />} />
          <Route path="/defaulter" element={<Defaulter />} />
          <Route path="/dailyQuote" element={<DailyQuote />} />
          <Route path="/motivationVideo" element={<MotivationVideo />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/assignmentUploadValidator" element={<AssignmentUploadValidator />} />
          <Route path="/assignmentViewerValidator" element={<AssignmentViewerValidator />} />
          <Route path="/universityDashboard" element={<UniversityDashboard />} />
          <Route path="/dropoutPredictionForm" element={<DropoutPredictionForm />} />
          <Route path="/universityTimeTable" element={<UniversityTimeTable />} />
          <Route path="/timetableView" element={<TimetableView />} />
          <Route path="/getAnnouncement" element={<GetAnnouncement />} />
          <Route path="/postAnnouncement" element={<PostAnnouncement />} />
          <Route path="/marksUpload" element={<MarksUpload />} />
          <Route path="/marksDashboard" element={<MarksDashboard />} />
          <Route path="/studentData" element={<StudentData />} />
          <Route path="/teacherList" element={<TeacherList />} />
          <Route path="/weeklyTestMarks" element={<WeeklyTestMarks />} />
          <Route path="/weeklyTestMarksS" element={<WeeklyTestMarksS />} />
          <Route path="/assignmentManager" element={<AssignmentManager />} />

          {/* Optional: Add a catch-all route for unknown URLs */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
}

export default App;