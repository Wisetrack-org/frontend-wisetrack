import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const podcastData = [
  {
    title: "Boosting Productivity",
    category: "Productivity",
    url: "https://sample-audio-url.com/audio1.mp3",
  },
  {
    title: "Career Growth Tips",
    category: "Career Advice",
    url: "https://sample-audio-url.com/audio2.mp3",
  },
  {
    title: "Mindfulness and Mental Health",
    category: "Mental Well-being",
    url: "https://sample-audio-url.com/audio3.mp3",
  },
  {
    title: "Time Management Hacks",
    category: "Productivity",
    url: "https://sample-audio-url.com/audio4.mp3",
  },
  {
    title: "Landing Your Dream Job",
    category: "Career Advice",
    url: "https://sample-audio-url.com/audio5.mp3",
  },
  {
    title: "Overcoming Anxiety",
    category: "Mental Well-being",
    url: "https://sample-audio-url.com/audio6.mp3",
  },
];

const categories = [
  "All",
  "Productivity",
  "Career Advice",
  "Mental Well-being",
];

const PodcastsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const filteredPodcasts =
    selectedCategory === "All"
      ? podcastData
      : podcastData.filter((podcast) => podcast.category === selectedCategory);

  const togglePlay = (url) => {
    if (currentAudio === url) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentAudio(url);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (currentAudio) {
      audioRef.current.src = currentAudio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentAudio]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    };
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen p-12 text-gray-200 max-w-5xl mx-auto">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-10 tracking-wide drop-shadow-lg text-blue-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Inspiring Podcasts
      </motion.h2>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              selectedCategory === category
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-blue-500"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPodcasts.map((podcast, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-2xl transition duration-300 flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {podcast.title}
              </h3>
              <p className="text-sm text-gray-400">{podcast.category}</p>
            </div>
            <button
              onClick={() => togglePlay(podcast.url)}
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
            >
              {currentAudio === podcast.url && isPlaying ? (
                <Pause size={20} />
              ) : (
                <Play size={20} />
              )}
            </button>
          </motion.div>
        ))}
      </div>

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
      {currentAudio && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 w-96">
          <p className="text-sm text-gray-300">Now Playing</p>
          <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default PodcastsPage;
