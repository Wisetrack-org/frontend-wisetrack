import React, { useState } from "react";
import axios from "axios";

const AddSubjectForm = () => {
  const [formData, setFormData] = useState({
    subject_id: "",
    subject_name: "",
    semester: "",
    class_id: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("user");
      const response = await axios.post(
        "http://localhost:3000/api/teacher/addSubject",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Subject added successfully!");
      setFormData({
        subject_id: "",
        subject_name: "",
        semester: "",
        class_id: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to add subject. Try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mt-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">Add New Subject</h2>

      <input
        type="number"
        name="subject_id"
        placeholder="Subject ID"
        value={formData.subject_id}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="subject_name"
        placeholder="Subject Name"
        value={formData.subject_name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="semester"
        placeholder="Semester"
        value={formData.semester}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="class_id"
        placeholder="Class ID"
        value={formData.class_id}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Add Subject
      </button>

      {message && <p className="text-center mt-2 text-sm">{message}</p>}
    </form>
  );
};

export default AddSubjectForm;
