import React, { useState } from "react";
import axios from "axios";

const StudentComplaintBox = () => {
  const [description, setDescription] = useState("");
  const [against, setAgainst] = useState("");
  const [status, setStatus] = useState("");

  const tokenData = JSON.parse(localStorage.getItem("token"));
  const token = tokenData?.token;
  const studentId = tokenData?.studentProfile?.student_id;

  const submitComplaint = async () => {
    if (description.trim() === "" || against.trim() === "") {
      setStatus("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/student/raiseComplaint",
        {
          description,
          against,
          student_id: studentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setStatus("✅ Complaint submitted successfully!");
      setDescription("");
      setAgainst("");
    } catch (err) {
      console.error("Error submitting complaint:", err);
      setStatus("❌ Failed to submit complaint. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#121826] p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-[#1e293b] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400">
          📢 Raise a Complaint
        </h2>

        {/* Against Input */}
        <input
          type="text"
          className="w-full p-3 mb-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Who is this complaint against?"
          value={against}
          onChange={(e) => setAgainst(e.target.value)}
        />

        {/* Description Textarea */}
        <textarea
          className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={submitComplaint}
          className="w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Submit Complaint
        </button>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-center text-sm font-semibold text-yellow-400">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentComplaintBox;
