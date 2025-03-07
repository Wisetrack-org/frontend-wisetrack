// import { useState } from "react";
// import { useAnnouncements } from "../../context/AnnouncementContext";
// import { motion } from "framer-motion";

// const PostAnnouncement = () => {
//   const { addAnnouncement } = useAnnouncements();
//   const [text, setText] = useState("");

//   const handlePost = () => {
//     if (text.trim() !== "") {
//       addAnnouncement({ text, date: new Date().toLocaleString() });
//       setText("");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <motion.div 
//         className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📢 Post an Announcement
//         </h2>
//         <textarea
//           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
//           rows="4"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Enter your announcement..."
//         />
//         <button
//           className="mt-4 p-3 bg-blue-500 text-white rounded-md w-full font-semibold hover:bg-blue-600 transition-all"
//           onClick={handlePost}
//         >
//           Post Announcement
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default PostAnnouncement;



import { useState } from "react";
import { useAnnouncements } from "../../context/AnnouncementContext";
import { motion } from "framer-motion";

const PostAnnouncement = () => {
  const { addAnnouncement } = useAnnouncements();
  const [text, setText] = useState("");

  const handlePost = () => {
    if (text.trim() !== "") {
      addAnnouncement({ text, date: new Date().toLocaleString() });
      setText("");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-4">
      <motion.div 
        className="w-full max-w-lg bg-gray-900 shadow-xl rounded-2xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
          📢 Post an Announcement
        </h2>
        <textarea
          className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your announcement..."
        />
        <button
          className="mt-4 p-3 bg-blue-600 text-white rounded-lg w-full font-semibold hover:bg-blue-700 transition-all"
          onClick={handlePost}
        >
          Post Announcement
        </button>
      </motion.div>
    </div>
  );
};

export default PostAnnouncement;
