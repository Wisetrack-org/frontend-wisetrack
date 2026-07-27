import React, { useState } from "react";
import axios from "axios";

const CreateClassForm = () => {
  const [formData, setFormData] = useState({
    class_id: "",
    class_name: "",
    academic_year: "",
    branch: "",
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
      const token = localStorage.getItem("user"); // if you're using auth
      const response = await axios.post(
        "http://localhost:3000/api/university/createClass",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Class created successfully!");
      setFormData({
        class_id: "",
        class_name: "",
        academic_year: "",
        branch: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to create class. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <form className="max-w-4xl w-full rounded-lg shadow-xl bg-gray-800 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-400 text-center">Create a New Class</h2>

        <input
          type="number"
          name="class_id"
          placeholder="Class ID"
          value={formData.class_id}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="class_name"
          placeholder="Class Name"
          value={formData.class_name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="academic_year"
          placeholder="Academic Year (e.g., 2024)"
          value={formData.academic_year}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch (e.g., Engineering)"
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Create Class
        </button>

        {message && <p className="text-center text-gray-300 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default CreateClassForm;
