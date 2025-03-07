import React, { useState, useEffect } from "react";

const FacultyQnA = () => {
  const [year, setYear] = useState("FY");
  const [topic, setTopic] = useState("Mathematics");
  const [reply, setReply] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history when year or topic changes
  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem(`chat_${year}_${topic}`)) || [];
    setChatHistory(storedChats);
  }, [year, topic]);

  // Function to send reply
  const sendReply = () => {
    if (!reply.trim()) return;

    const newMessage = {
      sender: "Faculty",
      text: reply,
      timestamp: new Date().toLocaleString(),
    };

    const updatedChat = [...chatHistory, newMessage];
    setChatHistory(updatedChat);
    localStorage.setItem(`chat_${year}_${topic}`, JSON.stringify(updatedChat));
    setReply(""); // Clear input field
  };

  return (
    <div className="w-full h-screen flex flex-col bg-black text-white">
      <h2 className="text-2xl font-bold text-center py-4 text-blue-400">
        👨‍🏫 Faculty Q&A Dashboard
      </h2>

      {/* Year & Topic Selection (Stacked on Mobile, Side-by-Side on Larger Screens) */}
      <div className="flex flex-col md:flex-row md:gap-3 px-4">
        <select
          className="w-full md:w-1/2 p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 mb-3 md:mb-0"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="FY">First Year</option>
          <option value="SY">Second Year</option>
          <option value="TY">Third Year</option>
          <option value="FinalYear">Final Year</option>
        </select>

        <select
          className="w-full md:w-1/2 p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Chat Display - Takes Up Most of Screen */}
      <div className="flex-grow overflow-y-auto bg-gray-800 p-4 mx-4 rounded-lg mt-3 space-y-3">
        {chatHistory.length === 0 ? (
          <p className="text-gray-400 text-center">No messages yet.</p>
        ) : (
          chatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "Faculty" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-xs md:max-w-sm bg-[#1e3a8a] text-white p-3 rounded-lg">
                <p>{msg.text}</p>
                <span className="block text-xs text-gray-300 text-right mt-1">{msg.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reply Input */}
      <div className="p-4 flex">
        <input
          type="text"
          className="flex-grow p-3 rounded-lg bg-gray-700 text-white border border-gray-500"
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button
          onClick={sendReply}
          className="ml-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default FacultyQnA;
