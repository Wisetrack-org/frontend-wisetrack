import { useState } from "react";

const studentsData = {
  "First Year": [
    { id: 1, name: "Aarav Sharma", roll: "FY101", email: "aarav@uni.com" },
    { id: 2, name: "Ishita Verma", roll: "FY102", email: "ishita@uni.com" },
    { id: 3, name: "Rohan Mehta", roll: "FY103", email: "rohan@uni.com" },
    { id: 4, name: "Neha Kapoor", roll: "FY104", email: "neha@uni.com" },
    { id: 5, name: "Kabir Joshi", roll: "FY105", email: "kabir@uni.com" },
    { id: 6, name: "Meera Singh", roll: "FY106", email: "meera@uni.com" },
    { id: 7, name: "Aryan Choudhary", roll: "FY107", email: "aryan@uni.com" },
    { id: 8, name: "Priya Deshmukh", roll: "FY108", email: "priya@uni.com" },
    { id: 9, name: "Rahul Nair", roll: "FY109", email: "rahul@uni.com" },
    { id: 10, name: "Simran Kaur", roll: "FY110", email: "simran@uni.com" },
  ],
  "Second Year": [
    { id: 1, name: "Aditya Kulkarni", roll: "SY201", email: "aditya@uni.com" },
    { id: 2, name: "Sneha Patil", roll: "SY202", email: "sneha@uni.com" },
    { id: 3, name: "Dev Sharma", roll: "SY203", email: "dev@uni.com" },
    { id: 4, name: "Ananya Gupta", roll: "SY204", email: "ananya@uni.com" },
    { id: 5, name: "Vikram Rao", roll: "SY205", email: "vikram@uni.com" },
    { id: 6, name: "Tanya Jain", roll: "SY206", email: "tanya@uni.com" },
    { id: 7, name: "Arjun Iyer", roll: "SY207", email: "arjun@uni.com" },
    { id: 8, name: "Pooja Bhandari", roll: "SY208", email: "pooja@uni.com" },
    { id: 9, name: "Nikhil Saxena", roll: "SY209", email: "nikhil@uni.com" },
    { id: 10, name: "Riya Malhotra", roll: "SY210", email: "riya@uni.com" },
  ],
  "Third Year": [
    { id: 1, name: "Aman Yadav", roll: "TY301", email: "aman@uni.com" },
    { id: 2, name: "Sanya Kohli", roll: "TY302", email: "sanya@uni.com" },
    { id: 3, name: "Rajesh Menon", roll: "TY303", email: "rajesh@uni.com" },
    { id: 4, name: "Pallavi Saxena", roll: "TY304", email: "pallavi@uni.com" },
    { id: 5, name: "Kunal Desai", roll: "TY305", email: "kunal@uni.com" },
    { id: 6, name: "Divya Nair", roll: "TY306", email: "divya@uni.com" },
    { id: 7, name: "Harsh Vardhan", roll: "TY307", email: "harsh@uni.com" },
    { id: 8, name: "Sakshi Kapoor", roll: "TY308", email: "sakshi@uni.com" },
    { id: 9, name: "Mohit Sharma", roll: "TY309", email: "mohit@uni.com" },
    { id: 10, name: "Aditi Chauhan", roll: "TY310", email: "aditi@uni.com" },
  ],
  "Final Year": [
    { id: 1, name: "Vedant Bansal", roll: "FY401", email: "vedant@uni.com" },
    { id: 2, name: "Ayesha Khan", roll: "FY402", email: "ayesha@uni.com" },
    { id: 3, name: "Manish Goyal", roll: "FY403", email: "manish@uni.com" },
    { id: 4, name: "Simran D'Souza", roll: "FY404", email: "simran@uni.com" },
    { id: 5, name: "Ankur Jain", roll: "FY405", email: "ankur@uni.com" },
    { id: 6, name: "Pooja Mehta", roll: "FY406", email: "pooja@uni.com" },
    { id: 7, name: "Vishal Raj", roll: "FY407", email: "vishal@uni.com" },
    { id: 8, name: "Isha Kapoor", roll: "FY408", email: "isha@uni.com" },
    { id: 9, name: "Sameer Reddy", roll: "FY409", email: "sameer@uni.com" },
    { id: 10, name: "Tina Joseph", roll: "FY410", email: "tina@uni.com" },
  ],
};

const StudentList = () => {
  const [selectedYear, setSelectedYear] = useState("First Year");

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6 md:p-12 text-gray-200">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400">
        Student List
      </h2>

      {/* Year Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-6">
        {Object.keys(studentsData).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold border-2 ${
              selectedYear === year
                ? "bg-blue-600 border-blue-600 text-gray-900"
                : "border-gray-500 hover:bg-blue-700 hover:border-blue-700"
            } transition duration-300`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentsData[selectedYear].map((student) => (
          <div
            key={student.id}
            className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold text-blue-400">{student.name}</h3>
            <p className="text-gray-300">Roll No: {student.roll}</p>
            <p className="text-gray-400">{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
