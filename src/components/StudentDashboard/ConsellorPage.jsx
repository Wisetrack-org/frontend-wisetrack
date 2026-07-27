import React, { useState } from "react";
import { FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const counsellors = [
  { id: 1, name: "Dr. John Doe", phone: "+1 234 567 890", chat: [] },
  { id: 2, name: "Ms. Jane Smith", phone: "+1 987 654 321", chat: [] },
  { id: 3, name: "Prof. Alan Brown", phone: "+1 456 789 123", chat: [] },
];

const CounsellorPage = () => {
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🎓 University Counsellors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counsellors.map((counsellor) => (
          <div
            key={counsellor.id}
            className="p-4 bg-[#1e3a8a] rounded-xl shadow-lg flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold">{counsellor.name}</h3>
            <p className="mt-2 text-gray-300 flex items-center gap-2">
              <FaPhone /> {counsellor.phone}
            </p>

          </div>
        ))}
      </div>


    </div>
  );
};

export default CounsellorPage;
