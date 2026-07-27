import React, { useState } from 'react';
import axios from 'axios';

const MarkAttendanceForm = () => {
  const [formData, setFormData] = useState({
    student_id: '',
    subject_id: '',
    semester: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:3000/api/student/markAttendance', formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded-lg shadow-lg bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Mark Attendance</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="student_id"
          type="number"
          placeholder="Student ID"
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.student_id}
          onChange={handleChange}
          required
        />
        <input
          name="subject_id"
          type="number"
          placeholder="Subject ID"
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.subject_id}
          onChange={handleChange}
          required
        />
        <input
          name="semester"
          type="number"
          placeholder="Semester"
          className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.semester}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>

      {message && (
        <div className="mt-8 text-center font-semibold text-green-400 bg-green-900/50 border border-green-700/50 p-3 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default MarkAttendanceForm;
