import React, { useState } from "react";
import { FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const counsellors = [
  { id: 1, name: "Dr. John Doe", phone: "+1 234 567 890", chat: [] },
  { id: 2, name: "Ms. Jane Smith", phone: "+1 987 654 321", chat: [] },
  { id: 3, name: "Prof. Alan Brown", phone: "+1 456 789 123", chat: [] },
];

const CounsellorPage = () => {
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState({});

  const sendMessage = () => {
    if (!message.trim() || !selectedCounsellor) return;
    setChats((prevChats) => ({
      ...prevChats,
      [selectedCounsellor]: [...(prevChats[selectedCounsellor] || []), message],
    }));
    setMessage("");
  };

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
            <button
              className="mt-3 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2"
              onClick={() => setSelectedCounsellor(counsellor.id)}
            >
              <FaCommentDots /> Chat
            </button>
          </div>
        ))}
      </div>

      {selectedCounsellor && (
        <div className="mt-6 p-4 bg-[#1e3a8a] rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Chat with {counsellors.find(c => c.id === selectedCounsellor).name}</h3>
          <div className="h-40 overflow-y-auto bg-gray-800 p-3 rounded-lg">
            {chats[selectedCounsellor]?.map((msg, index) => (
              <p key={index} className="bg-blue-600 p-2 rounded-lg mb-2">{msg}</p>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg" onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounsellorPage;
