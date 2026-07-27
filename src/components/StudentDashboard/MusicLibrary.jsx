// import { useState } from "react";
// import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

// const relaxationTracks = {
//   Sleep: [
//     { id: 1, name: "Deep Sleep Tones", src: "/music/deep_sleep.mp3" },
//     { id: 2, name: "Calm Night Waves", src: "/music/night_waves.mp3" },
//   ],
//   "Stress Relief": [
//     { id: 3, name: "Soothing Piano", src: "/music/soothing_piano.mp3" },
//     { id: 4, name: "Relaxing Flute", src: "/music/relaxing_flute.mp3" },
//   ],
//   Focus: [
//     { id: 5, name: "Concentration Beats", src: "/music/concentration.mp3" },
//     { id: 6, name: "Mindfulness Sounds", src: "/music/mindfulness.mp3" },
//   ],
//   Healing: [
//     { id: 7, name: "Heart Chakra Healing", src: "/music/chakra_healing.mp3" },
//     { id: 8, name: "Therapeutic Vibrations", src: "/music/therapeutic.mp3" },
//   ],
// };

// const RelaxationMusic = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Sleep");
//   const [playingTrack, setPlayingTrack] = useState(null);
//   const [audio, setAudio] = useState(null);

//   const toggleMusic = (track) => {
//     if (playingTrack === track.id) {
//       audio.pause();
//       setPlayingTrack(null);
//     } else {
//       if (audio) {
//         audio.pause(); // Stop previous track
//       }
//       const newAudio = new Audio(track.src);
//       newAudio.play();
//       setAudio(newAudio);
//       setPlayingTrack(track.id);
//     }
//   };

//   return (
//     <div className="bg-[#0a0a1a] text-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
//         <FaMusic /> Relaxation Music
//       </h2>

//       {/* Category Selector */}
//       <div className="flex justify-center gap-3 mb-4">
//         {Object.keys(relaxationTracks).map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//               selectedCategory === category ? "bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Music List */}
//       <div className="space-y-3">
//         {relaxationTracks[selectedCategory].map((track) => (
//           <div key={track.id} className="flex items-center justify-between bg-[#1e3a8a] px-4 py-2 rounded-lg shadow">
//             <span className="text-white">{track.name}</span>
//             <button
//               onClick={() => toggleMusic(track)}
//               className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-lg flex items-center gap-2"
//             >
//               {playingTrack === track.id ? <FaPause /> : <FaPlay />} {playingTrack === track.id ? "Pause" : "Play"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelaxationMusic;


import { useState, useRef } from "react";
import { FaPlay, FaPause, FaMusic, FaHeadphones, FaLeaf, FaMoon, FaSpa } from "react-icons/fa";

const musicLibrary = {
  Sleep: [
    { title: "Deep Sleep Music", src: "/music/deep_sleep.mp3" },
    { title: "Night Rain Sounds", src: "/music/night_rain.mp3" },
  ],
  "Stress Relief": [
    { title: "Calm Ocean Waves", src: "/music/ocean_waves.mp3" },
    { title: "Nature Sounds", src: "/music/nature_sounds.mp3" },
  ],
  Focus: [
    { title: "Binaural Beats", src: "/music/binaural_beats.mp3" },
    { title: "Lo-Fi Study Beats", src: "/music/lofi_study.mp3" },
  ],
  Meditation: [
    { title: "Guided Meditation", src: "/music/guided_meditation.mp3" },
    { title: "Zen Flute", src: "/music/zen_flute.mp3" },
  ],
};

const RelaxationMusic = () => {
  const [currentCategory, setCurrentCategory] = useState("Sleep");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playMusic = (track) => {
    if (currentTrack?.src === track.src && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = track.src;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <FaMusic /> Relaxation Music
      </h2>

      {/* Category Selection */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {Object.keys(musicLibrary).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              currentCategory === category ? "bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
            } flex items-center gap-2`}
          >
            {category === "Sleep" && <FaMoon />}
            {category === "Stress Relief" && <FaSpa />}
            {category === "Focus" && <FaHeadphones />}
            {category === "Meditation" && <FaLeaf />}
            {category}
          </button>
        ))}
      </div>

      {/* Music Tracks List */}
      <div className="mt-6 w-full max-w-md">
        {musicLibrary[currentCategory].map((track) => (
          <div
            key={track.title}
            className="flex justify-between items-center bg-[#1e3a8a] p-3 rounded-lg mb-2 shadow-lg"
          >
            <span>{track.title}</span>
            <button
              onClick={() => playMusic(track)}
              className="text-white bg-green-600 hover:bg-green-800 p-2 rounded-full"
            >
              {currentTrack?.src === track.src && isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaxationMusic;
