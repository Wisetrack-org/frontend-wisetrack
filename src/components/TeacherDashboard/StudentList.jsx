const Students = ({ students }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 text-black">
      <h3 className="text-lg font-semibold mb-2">Students</h3>
      {students?.length > 0 ? (
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Semester</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Branch</th>
              <th className="p-2 border">Year</th>
              <th className="p-2 border">Subject</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.student_id} className="hover:bg-gray-50">
                <td className="p-2 border">{student.first_name} {student.last_name}</td>
                <td className="p-2 border">{student.email}</td>
                <td className="p-2 border">{student.semester}</td>
                <td className="p-2 border">{student.class_name}</td>
                <td className="p-2 border">{student.branch}</td>
                <td className="p-2 border">{student.academic_year}</td>
                <td className="p-2 border">{student.subjects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default Students;
