import { useState } from "react";
import axios from "axios";

const AssignmentUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("assignment", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Upload failed. Try again.");
    }
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Upload Assignment</h1>
      <input
        type="file"
        accept="application/pdf"
        className="mb-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 px-4 py-2 rounded-lg"
      >
        Upload
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AssignmentUploader;
