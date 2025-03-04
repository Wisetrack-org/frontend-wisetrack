import { Link } from "react-router-dom";

const VideoLibrary = () => {
  const videoCategories = {
    Yoga: [
      { id: 1, title: "Morning Yoga Routine", url: "https://www.youtube.com/embed/0RyB8c_qZfI" },
      { id: 2, title: "Flexibility Yoga", url: "https://www.youtube.com/embed/X3-gKPNyrTA" }
    ],
    Meditation: [
      { id: 3, title: "10-Minute Meditation", url: "https://www.youtube.com/embed/U9YKY7fdwyg" },
      { id: 4, title: "Deep Relaxation", url: "https://www.youtube.com/embed/EJbUujD5Fzo" }
    ],
    Exercise: [
      { id: 5, title: "Home Workout", url: "https://www.youtube.com/embed/Z8G1gjsHYDg" },
      { id: 6, title: "Stretching Routine", url: "https://www.youtube.com/embed/JXzxiZ9qJ6g" }
    ]
  };

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🎥 Video Library</h2>

      {Object.entries(videoCategories).map(([category, videos]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video) => (
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
      ))}

      {/* Back Button */}
      <div className="mt-6 flex justify-center">
        <Link to="/">
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoLibrary;
