// import { useAnnouncements } from "../../context/AnnouncementContext";
// import { motion } from "framer-motion";

// const GetAnnouncement = () => {
//   const { announcements } = useAnnouncements();

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <motion.div 
//         className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📢 Announcements
//         </h2>

//         {announcements.length === 0 ? (
//           <p className="text-center text-gray-500">No announcements yet.</p>
//         ) : (
//           <div className="space-y-4 max-h-72 overflow-y-auto">
//             {announcements.map((announcement, index) => (
//               <motion.div 
//                 key={index}
//                 className="p-4 border rounded-md shadow-sm bg-blue-50"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <p className="text-gray-800">{announcement.text}</p>
//                 <small className="text-gray-500">{announcement.date}</small>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default GetAnnouncement;

import { useAnnouncements } from "../../context/AnnouncementContext";
import { motion } from "framer-motion";

const GetAnnouncement = () => {
  const { announcements } = useAnnouncements();

  return (
    <div className="flex flex-col items-center bg-black p-2">
      <motion.div 
        className="w-full max-w-md bg-gray-900 shadow-lg rounded-xl p-4 border border-gray-700"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-semibold text-center text-blue-400 mb-2">
          📢 Announcements
        </h2>

        {announcements.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">No announcements yet.</p>
        ) : (
          <div className="space-y-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {announcements.map((announcement, index) => (
              <motion.div 
                key={index}
                className="p-2 border border-gray-600 rounded-md shadow-md bg-gray-800"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-white text-sm">{announcement.text}</p>
                <small className="text-gray-400 text-xs">{announcement.date}</small>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GetAnnouncement;
