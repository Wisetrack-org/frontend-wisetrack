import React, { useState } from 'react';
import axios from 'axios';

const AssignTeacherForm = () => {
  const [formData, setFormData] = useState({
    teacher_id: '',
    class_id: '',
    academic_year: '',
    branch: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await axios.post(
        'http://localhost:3000/api/university/assignTeachers', // Replace with your actual API endpoint
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`, // Adjust if you're using auth
          },
        }
      );

      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-lg w-full rounded-lg shadow-xl bg-gray-800 p-6">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Assign Teacher to Class</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="number"
            name="teacher_id"
            placeholder="Teacher ID"
            value={formData.teacher_id}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
            name="academic_year"
            placeholder="Academic Year (e.g. 2024-2025)"
            value={formData.academic_year}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch (e.g. CSE, ECE)"
            value={formData.branch}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Assign
          </button>
        </form>

        {message && <p className="mt-6 text-green-400 bg-green-900/50 border border-green-700/50 p-3 rounded-md text-center">{message}</p>}
        {error && <p className="mt-6 text-red-400 bg-red-900/50 border border-red-700/50 p-3 rounded-md text-center">{error}</p>}
      </div>
    </div>
  );
};

export default AssignTeacherForm;
