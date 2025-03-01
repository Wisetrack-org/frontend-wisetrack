import MotivationalQuote from "../StudentDashboard/MotivationalQuote.jsx";
import Schedule from "../StudentDashboard/Schedule.jsx";


const MainPage = () => {
  return (
    <div >
      {/* Daily Quotes Section */}
      <MotivationalQuote />

      {/* Schedule Section */}
      <Schedule />
    </div>
  );
};

export default MainPage;
