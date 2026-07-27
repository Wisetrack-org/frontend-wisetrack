import { useState } from "react";
import { motion } from "framer-motion";

const videoData = [
  {
    title: "Study Smarter, Not Harder",
    category: "Study Motivation",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Building a Successful Career",
    category: "Career",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Personal Growth Strategies",
    category: "Personal Growth",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    title: "Overcoming Procrastination",
    category: "Study Motivation",
    url: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
  {
    title: "Networking for Career Success",
    category: "Career",
    url: "https://www.youtube.com/embed/VIDEO_ID_5",
  },
  {
    title: "Mindfulness and Productivity",
    category: "Personal Growth",
    url: "https://www.youtube.com/embed/VIDEO_ID_6",
  },
  {
    title: "Exam Preparation Tips",
    category: "Study Motivation",
    url: "https://www.youtube.com/embed/VIDEO_ID_7",
  },
  {
    title: "Interview Skills for Freshers",
    category: "Career",
    url: "https://www.youtube.com/embed/VIDEO_ID_8",
  },
  {
    title: "Developing a Growth Mindset",
    category: "Personal Growth",
    url: "https://www.youtube.com/embed/VIDEO_ID_9",
  },
];

const categories = ["All", "Study Motivation", "Career", "Personal Growth"];

const MotivationalVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-12 text-gray-200 max-w-5xl mx-auto">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-10 tracking-wide drop-shadow-lg text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Motivational Videos
      </motion.h2>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              selectedCategory === category
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-blue-400"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              {video.title}
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-56 rounded-lg"
                src={video.url}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MotivationalVideos;
