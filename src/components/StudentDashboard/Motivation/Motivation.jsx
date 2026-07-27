// import { useState, useEffect, useRef } from "react";
// import {
//   FaVideo,
//   FaPodcast,
//   FaBook,
//   FaTrophy,
//   FaTasks,
//   FaQuoteLeft,
//   FaMedal,
//   FaSmile,
// } from "react-icons/fa";

// const MotivationModule = () => {
//   const [gratitude, setGratitude] = useState("");
//   const [gratitudeList, setGratitudeList] = useState([]);
//   const gratitudeRef = useRef(null);

//   const handleGratitudeSubmit = () => {
//     if (gratitude.trim()) {
//       setGratitudeList([...gratitudeList, gratitude]);
//       setGratitude("");
//     }
//   };

//   useEffect(() => {
//     if (gratitudeRef.current) {
//       gratitudeRef.current.scrollTop = gratitudeRef.current.scrollHeight;
//     }
//   }, [gratitudeList]);

//   return (
//     <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl shadow-2xl text-gray-200 transition-all duration-300 max-w-5xl mx-auto border border-gray-700">
//       <h2 className="text-5xl font-extrabold text-center mb-10 tracking-wide drop-shadow-lg text-blue-400">
//         Stay Inspired & Motivated!
//       </h2>

//       {/* Gratitude Section */}
//       <div className="mb-8 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700">
//         <h3 className="text-3xl font-semibold flex items-center text-blue-300">
//           <FaSmile className="text-yellow-400 mr-3 text-4xl" /> Express Your
//           Gratitude
//         </h3>
//         <div className="mt-6 flex gap-4 items-center">
//           <textarea
//             className="flex-grow p-4 rounded-lg text-gray-900 shadow-inner focus:ring-4 focus:ring-blue-500 transition border border-blue-500 bg-gray-100"
//             rows="3"
//             placeholder="Write something you're grateful for..."
//             value={gratitude}
//             onChange={(e) => setGratitude(e.target.value)}
//           ></textarea>
//           <button
//             className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110 shadow-lg font-bold text-lg"
//             onClick={handleGratitudeSubmit}
//           >
//             Save
//           </button>
//         </div>
//         <div
//           ref={gratitudeRef}
//           className="mt-6 max-h-40 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-700 p-2"
//         >
//           {gratitudeList.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-700 p-4 rounded-lg text-gray-200 shadow-md border border-gray-600 hover:bg-gray-600 transition"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Motivation Sections */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//         {[
//           {
//             icon: FaVideo,
//             text: "Motivational Videos",
//             color: "text-blue-400",
//           },
//           { icon: FaPodcast, text: "Podcasts", color: "text-green-400" },
//           { icon: FaBook, text: "Study Resources", color: "text-yellow-400" },
//           { icon: FaTrophy, text: "Success Stories", color: "text-red-400" },
//           { icon: FaQuoteLeft, text: "Daily Quotes", color: "text-purple-400" },
//           {
//             icon: FaTasks,
//             text: "Productivity Tips",
//             color: "text-orange-400",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 p-8 rounded-lg flex flex-col items-center cursor-pointer hover:scale-110 transition duration-300 shadow-lg hover:shadow-2xl border border-gray-700"
//           >
//             <item.icon
//               className={`text-6xl mb-4 ${item.color} drop-shadow-2xl`}
//             />
//             <p className="text-xl font-medium tracking-wide text-gray-200">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Leaderboard & Daily Challenge */}
//       <div className="mt-10 text-center">
//         <button className="px-10 py-5 bg-blue-500 text-gray-900 font-bold rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110 shadow-lg animate-pulse text-xl">
//           Take Today’s Challenge & Earn Rewards{" "}
//           <FaMedal className="inline ml-2 text-yellow-300" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MotivationModule;



import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaVideo,
  FaPodcast,
  FaBook,
  FaTrophy,
  FaTasks,
  FaQuoteLeft,
  FaMedal,
  FaSmile,
} from "react-icons/fa";

const MotivationModule = () => {
  const [gratitude, setGratitude] = useState("");
  const [gratitudeList, setGratitudeList] = useState([]);
  const gratitudeRef = useRef(null);
  const navigate = useNavigate();

  const handleGratitudeSubmit = () => {
    if (gratitude.trim()) {
      setGratitudeList([...gratitudeList, gratitude]);
      setGratitude("");
    }
  };

  useEffect(() => {
    if (gratitudeRef.current) {
      gratitudeRef.current.scrollTop = gratitudeRef.current.scrollHeight;
    }
  }, [gratitudeList]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-12 rounded-3xl shadow-2xl text-gray-200 transition-all duration-300 max-w-6xl mx-auto border border-gray-700">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 md:mb-10 tracking-wide drop-shadow-lg text-blue-400">
        Stay Inspired & Motivated!
      </h2>

      {/* Gratitude Section */}
      <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700">
        <h3 className="text-2xl md:text-3xl font-semibold flex items-center text-blue-300">
          <FaSmile className="text-yellow-400 mr-3 text-3xl md:text-4xl" /> Express Your Gratitude
        </h3>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4">
          <textarea
            className="flex-grow p-3 md:p-4 rounded-lg text-gray-900 shadow-inner focus:ring-4 focus:ring-blue-500 transition border border-blue-500 bg-gray-100"
            rows="3"
            placeholder="Write something you're grateful for..."
            value={gratitude}
            onChange={(e) => setGratitude(e.target.value)}
          ></textarea>
          <button
            className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110 shadow-lg font-bold text-lg"
            onClick={handleGratitudeSubmit}
          >
            Save
          </button>
        </div>
        <div
          ref={gratitudeRef}
          className="mt-4 md:mt-6 max-h-40 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-700 p-2"
        >
          {gratitudeList.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 p-3 md:p-4 rounded-lg text-gray-200 shadow-md border border-gray-600 hover:bg-gray-600 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Motivation Sections */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {[
          { icon: FaVideo, text: "Motivational Videos", color: "text-blue-400", path: "/motivationVideo" },
          { icon: FaPodcast, text: "Podcasts", color: "text-green-400", path: "/podcast" },
          { icon: FaBook, text: "Study Resources", color: "text-yellow-400", path: "/motivation/resources" },
          { icon: FaTrophy, text: "Success Stories", color: "text-red-400", path: "/motivation/success" },
          { icon: FaQuoteLeft, text: "Daily Quotes", color: "text-purple-400", path: "/dailyQuote" },
          { icon: FaTasks, text: "Productivity Tips", color: "text-orange-400", path: "/productivity" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 md:p-8 rounded-lg flex flex-col items-center cursor-pointer hover:scale-110 transition duration-300 shadow-lg hover:shadow-2xl border border-gray-700"
            onClick={() => navigate(item.path)}
          >
            <item.icon className={`text-5xl md:text-6xl mb-3 md:mb-4 ${item.color} drop-shadow-2xl`} />
            <p className="text-lg md:text-xl font-medium tracking-wide text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard & Daily Challenge */}
      <div className="mt-6 md:mt-10 text-center">
        <button
          className="px-6 md:px-10 py-4 md:py-5 bg-blue-500 text-gray-900 font-bold rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110 shadow-lg animate-pulse text-lg md:text-xl"
          onClick={() => navigate("/motivation/challenge")}
        >
          Take Today’s Challenge & Earn Rewards{" "}
          <FaMedal className="inline ml-2 text-yellow-300" />
        </button>
      </div>
    </div>
  );
};

export default MotivationModule;
