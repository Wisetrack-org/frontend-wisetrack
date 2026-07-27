import { useState, useEffect } from "react";
import studentData from "./student.json";

const calculateRequiredClasses = (attended, total) => {
  const required = Math.ceil(0.75 * total) - attended;
  return required > 0 ? required : 0;
};

export default function Defaulter() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
    <div className="p-4 bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-400">📊 Teacher Dashboard</h1>

      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse w-full">
            <thead className="bg-gray-800 text-blue-400">
              <tr className="text-sm md:text-base">
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-center">Attended</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-center">%</th>
                <th className="p-3 text-center">Classes Needed</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                const percentage = ((student.attended / student.total) * 100).toFixed(2);
                const requiredClasses = calculateRequiredClasses(student.attended, student.total);
                
                return (
                  <tr 
                    key={index} 
                    className="border-t border-gray-700 hover:bg-gray-800 transition duration-200"
                  >
                    <td className="p-3 text-left font-medium text-white">{student.name}</td>
                    <td className="p-3 text-center text-white">{student.attended}</td>
                    <td className="p-3 text-center text-white">{student.total}</td>
                    <td className="p-3 text-center font-semibold text-blue-400">{percentage}%</td>
                    <td className={`p-3 text-center font-bold ${requiredClasses > 0 ? "text-red-500" : "text-green-500"}`}>
                      {requiredClasses > 0 ? requiredClasses : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
