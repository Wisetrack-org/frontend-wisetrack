import { useState } from "react";

const teachersData = {
  "First Year": [
    { id: "CE101", name: "Dr. Rajesh Kumar", qualification: "PhD in Computer Science", subjects: "Programming Fundamentals, Data Structures" },
    { id: "CE102", name: "Ms. Anjali Sharma", qualification: "M.Tech in Information Technology", subjects: "Computer Networks, Operating Systems" },
    { id: "CE103", name: "Mr. Vinay Patel", qualification: "MSc in Cyber Security", subjects: "Ethical Hacking, Network Security" },
    { id: "CE104", name: "Dr. Pooja Mehta", qualification: "PhD in Artificial Intelligence", subjects: "AI & Machine Learning, Neural Networks" },
    { id: "CE105", name: "Mr. Suresh Reddy", qualification: "M.Tech in Software Engineering", subjects: "Software Development, Agile Methodologies" },
    { id: "CE106", name: "Ms. Ritu Verma", qualification: "MSc in Data Science", subjects: "Statistics, Data Visualization" },
    { id: "CE107", name: "Mr. Kunal Iyer", qualification: "M.Tech in Embedded Systems", subjects: "Microprocessors, IoT" },
    { id: "CE108", name: "Ms. Priya Kapoor", qualification: "M.Tech in Cloud Computing", subjects: "AWS, Cloud Security" },
    { id: "CE109", name: "Dr. Amit Desai", qualification: "PhD in Computational Theory", subjects: "Discrete Mathematics, Automata Theory" },
    { id: "CE110", name: "Ms. Shruti Bansal", qualification: "M.Tech in Database Systems", subjects: "SQL, NoSQL Databases" },
  ],
  "Second Year": [
    { id: "CE201", name: "Mr. Deepak Sharma", qualification: "M.Tech in Web Technologies", subjects: "Frontend & Backend Development" },
    { id: "CE202", name: "Ms. Nidhi Rao", qualification: "M.Tech in Mobile Computing", subjects: "Android Development, iOS Development" },
    { id: "CE203", name: "Dr. Ravi Joshi", qualification: "PhD in Cryptography", subjects: "Blockchain, Data Encryption" },
    { id: "CE204", name: "Ms. Aarti Deshmukh", qualification: "M.Tech in Data Analytics", subjects: "Big Data, Hadoop" },
    { id: "CE205", name: "Mr. Akash Mehta", qualification: "M.Tech in Machine Learning", subjects: "Deep Learning, Reinforcement Learning" },
    { id: "CE206", name: "Ms. Tanya Sharma", qualification: "M.Tech in Network Security", subjects: "Cyber Forensics, Ethical Hacking" },
    { id: "CE207", name: "Dr. Vishal Kumar", qualification: "PhD in High-Performance Computing", subjects: "Parallel Processing, Cloud Infrastructure" },
    { id: "CE208", name: "Mr. Rohit Nair", qualification: "M.Tech in IoT", subjects: "Smart Systems, Edge Computing" },
    { id: "CE209", name: "Ms. Sneha Jain", qualification: "M.Tech in Human-Computer Interaction", subjects: "UI/UX Design, Accessibility" },
    { id: "CE210", name: "Dr. Sunil Pandey", qualification: "PhD in Database Optimization", subjects: "Indexing, Query Optimization" },
  ],
  "Third Year": [
    { id: "CE301", name: "Mr. Arjun Malhotra", qualification: "M.Tech in Software Testing", subjects: "Automation Testing, Debugging" },
    { id: "CE302", name: "Ms. Riya Sen", qualification: "M.Tech in Robotics", subjects: "Control Systems, AI in Robotics" },
    { id: "CE303", name: "Dr. Sameer Trivedi", qualification: "PhD in Quantum Computing", subjects: "Quantum Algorithms, Qiskit" },
    { id: "CE304", name: "Ms. Neha Kapoor", qualification: "M.Tech in Game Development", subjects: "Unity, Unreal Engine" },
    { id: "CE305", name: "Mr. Pranav Iyer", qualification: "M.Tech in Cloud Architecture", subjects: "AWS, Azure, Google Cloud" },
    { id: "CE306", name: "Ms. Poonam Sharma", qualification: "M.Tech in Network Engineering", subjects: "Network Protocols, Wireless Security" },
    { id: "CE307", name: "Dr. Kartik Bose", qualification: "PhD in Bioinformatics", subjects: "Computational Biology, Genomic Data" },
    { id: "CE308", name: "Ms. Aishwarya Gupta", qualification: "M.Tech in AI Ethics", subjects: "Bias in AI, Ethical AI Development" },
    { id: "CE309", name: "Mr. Rajiv Nair", qualification: "M.Tech in Multimedia Systems", subjects: "Digital Image Processing, VR/AR" },
    { id: "CE310", name: "Ms. Kavya Mehta", qualification: "M.Tech in Blockchain", subjects: "Ethereum, Smart Contracts" },
  ],
  "Final Year": [
    { id: "CE401", name: "Dr. Vikram Tandon", qualification: "PhD in AI Research", subjects: "Self-Learning Systems, AI Algorithms" },
    { id: "CE402", name: "Ms. Divya Chopra", qualification: "M.Tech in Cyber Security", subjects: "Penetration Testing, Dark Web Analysis" },
    { id: "CE403", name: "Mr. Anil Khanna", qualification: "M.Tech in Data Engineering", subjects: "ETL, Data Pipelines" },
    { id: "CE404", name: "Ms. Saira Iqbal", qualification: "M.Tech in VR/AR", subjects: "Augmented Reality, Virtual Reality" },
    { id: "CE405", name: "Mr. Jayesh Patel", qualification: "M.Tech in Software Architecture", subjects: "Microservices, Scalable Systems" },
    { id: "CE406", name: "Ms. Sonali Verma", qualification: "M.Tech in Embedded AI", subjects: "AI for Edge Devices, FPGA Programming" },
    { id: "CE407", name: "Dr. Gopal Prasad", qualification: "PhD in Quantum Networks", subjects: "Quantum Key Distribution, Secure Communications" },
    { id: "CE408", name: "Ms. Akansha Saxena", qualification: "M.Tech in Bioinformatics", subjects: "AI in Drug Discovery, Protein Structure Prediction" },
    { id: "CE409", name: "Mr. Nitin Rao", qualification: "M.Tech in IoT Security", subjects: "Secure IoT Frameworks, AI-driven Security" },
    { id: "CE410", name: "Ms. Preeti Nair", qualification: "M.Tech in Full-Stack Development", subjects: "React, Node.js, PostgreSQL" },
  ],
};

const TeacherList = () => {
  const [selectedYear, setSelectedYear] = useState("First Year");

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6 md:p-12 text-gray-200">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-400">
        Computer Engineering Teachers
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(teachersData).map((year) => (
          <button key={year} onClick={() => setSelectedYear(year)}
            className={`px-6 py-3 rounded-lg border-2 ${
              selectedYear === year ? "bg-blue-600 text-gray-900" : "border-gray-500 hover:bg-blue-700"
            } transition duration-300`}>
            {year}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachersData[selectedYear].map((teacher) => (
          <div key={teacher.id} className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-blue-400">{teacher.name}</h3>
            <p className="text-gray-300">Qualification: {teacher.qualification}</p>
            <p className="text-gray-400">Subjects: {teacher.subjects}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
