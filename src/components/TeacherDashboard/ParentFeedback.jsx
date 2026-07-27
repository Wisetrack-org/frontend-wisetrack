import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const FeedbackForm = () => {
  const { token } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/teacher/submitFeedback",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setSuccessMsg("Feedback submitted successfully!");
      setMessage("");
    } catch (err) {
      setErrorMsg(
        err.response?.data?.message || "Failed to submit feedback. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg min-w-max min-h-screen mt-10">
      <h2 className="text-2xl font-semibold mb-4">Submit Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          rows="5"
          placeholder="Enter your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>

        {successMsg && <p className="text-green-400">{successMsg}</p>}
        {errorMsg && <p className="text-red-400">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
