// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ComplaintList = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/university/complaints', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setComplaints(res.data.data);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch complaints');
//       }
//     };

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Complaint List</h2>

//       {error && <p className="text-red-500">{error}</p>}

//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">#</th>
//             <th className="border px-4 py-2">Description</th>
//             <th className="border px-4 py-2">Against</th>
//             <th className="border px-4 py-2">Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((c, index) => (
//             <tr key={c.complaint_id}>
//               <td className="border px-4 py-2">{index + 1}</td>
//               <td className="border px-4 py-2">{c.description}</td>
//               <td className="border px-4 py-2">{c.against_whom}</td>
//               <td className="border px-4 py-2">{new Date(c.created_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ComplaintList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/university/complaints', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setComplaints(res.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch complaints');
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full rounded-lg shadow-xl bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Complaint List</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="rounded-md overflow-hidden">
          <table className="min-w-full bg-gray-900 text-gray-100">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Against</th>
                <th className="px-6 py-3 text-left">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {complaints.map((c, index) => (
                <tr key={c.complaint_id} className="hover:bg-gray-600 transition-colors">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{c.description}</td>
                  <td className="px-6 py-4">{c.against_whom}</td>
                  <td className="px-6 py-4">{new Date(c.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {complaints.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No complaints found.</p>
        )}
      </div>
    </div>
  );
};

export default ComplaintList;
