// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Editor from "@monaco-editor/react";

// const CodingPlatform = () => {
//   const [language, setLanguage] = useState("54"); // Default: C++
//   const [code, setCode] = useState("// Write your code here...");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const savedCode = localStorage.getItem("student_code");
//     if (savedCode) {
//       setCode(savedCode);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("student_code", code);
//   }, [code]);

//   const runCode = async () => {
//     setLoading(true);
//     setOutput("Running...");

//     const options = {
//       method: "POST",
//       url: "http://your-own-server.com/submissions?base64_encoded=false&wait=true",
//       headers: { "Content-Type": "application/json" },
//       data: {
//         language_id: language,
//         source_code: code,
//         stdin: "",
//       },
//     };
    
//     try {
//       const response = await axios.request(options);
//       const token = response.data.token;

//       setTimeout(async () => {
//         const result = await axios.get(
//           `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
//           { headers: options.headers }
//         );
//         setOutput(result.data.stdout || result.data.stderr || "No output");
//       }, 3000);
//     } catch (error) {
//       setOutput("Error running code");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121826] p-4 sm:p-6">
//       <div className="w-full max-w-6xl bg-[#1e293b] text-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400">💻 Online Coding Platform</h2>

//         {/* Language Selection */}
//         <select
//           className="w-full p-3 mb-4 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//         >
//           <option value="54">C++</option>
//           <option value="50">C</option>
//           <option value="62">Java</option>
//           <option value="71">Python</option>
//           <option value="63">JavaScript</option>
//         </select>

//         {/* Code Editor */}
//         <div className="border border-gray-600 rounded-lg overflow-hidden">
//           <Editor
//             height="400px"
//             theme="vs-dark"
//             language={language === "71" ? "python" : language === "63" ? "javascript" : "cpp"}
//             value={code}
//             onChange={(newCode) => setCode(newCode)}
//           />
//         </div>

//         {/* Run Button */}
//         <button
//           onClick={runCode}
//           className="w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
//           disabled={loading}
//         >
//           {loading ? "Running..." : "Run Code"}
//         </button>

//         {/* Output Section */}
//         <div className="mt-6 bg-gray-800 p-4 rounded-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
//           <h3 className="text-lg font-semibold text-blue-400">📤 Output:</h3>
//           <pre className="text-gray-300 whitespace-pre-wrap">{output}</pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodingPlatform;




import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { runJS } from "../../runners/jsRunner"; // Custom function for JS execution
import { runPython } from "../../runners/pythonRunner"; // Custom function for Python execution

const CodingPlatform = () => {
  const [language, setLanguage] = useState("javascript"); // Default: JavaScript
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCode = localStorage.getItem("student_code");
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("student_code", code);
  }, [code]);

  const runCode = async () => {
    setLoading(true);
    setOutput("Running...");

    try {
      let result = "";
      if (language === "javascript") {
        result = runJS(code); // Run JavaScript
      } else if (language === "python") {
        result = await runPython(code); // Run Python using Pyodide
      } else {
        result = "❌ Unsupported Language! Only JS & Python work.";
      }
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121826] p-4 sm:p-6">
      <div className="w-full max-w-6xl bg-[#1e293b] text-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400">💻 Online Coding Platform</h2>

        {/* Language Selection */}
        <select
          className="w-full p-3 mb-4 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>

        {/* Code Editor */}
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <Editor
            height="400px"
            theme="vs-dark"
            language={language}
            value={code}
            onChange={(newCode) => setCode(newCode)}
          />
        </div>

        {/* Run Button */}
        <button
          onClick={runCode}
          className="w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Running..." : "Run Code"}
        </button>

        {/* Output Section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <h3 className="text-lg font-semibold text-blue-400">📤 Output:</h3>
          <pre className="text-gray-300 whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodingPlatform;
