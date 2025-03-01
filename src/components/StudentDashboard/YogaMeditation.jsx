import { useState } from "react";
import { FaPlay, FaPause, FaUserMd, FaSpa } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const meditationVideos = [
  { id: 1, title: "Guided Meditation for Beginners", url: "https://www.youtube.com/embed/inpok4MKVLM" },
  { id: 2, title: "5-Minute Deep Breathing Exercise", url: "https://www.youtube.com/embed/8zTTowG4S7E" },
];

const trainers = [
  { name: "Aarav Sharma", contact: "+91 98765 43210" },
  { name: "Meera Patel", contact: "+91 87654 32109" },
];

const YogaMeditation = () => {

  const navigate = useNavigate();

  const getNewPose = () => {
    navigate("/dailyYogaChallenge");  // Navigate to the correct route
  };


  const [playing, setPlaying] = useState(false);

  const music = new Audio("https://www.bensound.com/bensound-music/bensound-relaxing.mp3");

  const toggleMusic = () => {
    if (playing) {
      music.pause();
    } else {
      music.play();
    }
    setPlaying(!playing);
  };



  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#1e3a8a] mb-6">Yoga & Meditation</h1>

      {/* Daily Yoga Challenge */}
      <div className="bg-[#1e3a8a] p-4 rounded-xl text-center shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold">Today's Yoga Challenge</h2>
        <button
          onClick={getNewPose}
          className="mt-3 bg-[#142654] px-4 py-2 rounded-lg hover:bg-[#0f1c3d]"
        >
          Yoga Asanas
        </button>
      </div>

      {/* Meditation Videos */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Meditation Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meditationVideos.map((video) => (
            <iframe
              key={video.id}
              src={video.url}
              title={video.title}
              className="w-full h-48 rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* Deep Breathing Game */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Deep Breathing Exercise</h2>
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-24 h-24 bg-[#1e3a8a] rounded-full flex items-center justify-center text-xl font-bold"
        >
          Breathe
        </motion.div>
      </div>

      {/* Relaxation Music */}
      <button onClick={toggleMusic} className="mt-6 flex items-center gap-2 bg-[#1e3a8a] px-4 py-2 rounded-lg hover:bg-[#142654]">
        {playing ? <FaPause /> : <FaPlay />} {playing ? "Pause Music" : "Play Relaxing Music"}
      </button>

      {/* Yoga Trainers */}
      <div className="mt-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Yoga Trainers</h2>
        <div className="space-y-3">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-[#142654] p-4 rounded-lg flex items-center gap-3">
              <FaUserMd className="text-2xl" />
              <div>
                <p className="font-semibold">{trainer.name}</p>
                <p className="text-gray-300">{trainer.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaMeditation;
