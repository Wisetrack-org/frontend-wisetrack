// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaPlus, FaTrash, FaEdit, FaCheck } from "react-icons/fa";

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editingTask, setEditingTask] = useState(null);
//   const [priority, setPriority] = useState("Medium");

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) setTasks(savedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (newTask.trim() === "") return;
//     if (editingTask !== null) {
//       setTasks(
//         tasks.map((task, index) =>
//           index === editingTask ? { ...task, text: newTask, priority } : task
//         )
//       );
//       setEditingTask(null);
//     } else {
//       setTasks([...tasks, { text: newTask, completed: false, priority }]);
//     }
//     setNewTask("");
//     setPriority("Medium");
//   };

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const toggleComplete = (index) => {
//     setTasks(
//       tasks.map((task, i) =>
//         i === index ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const editTask = (index) => {
//     setNewTask(tasks[index].text);
//     setPriority(tasks[index].priority);
//     setEditingTask(index);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
//       <h2 className="text-2xl font-bold text-center mb-4">📝 Student To-Do List</h2>

//       <div className="flex flex-col sm:flex-row items-center gap-2">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           className="w-full p-2 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />

//         <select
//           className="p-2 rounded-lg bg-[#1e3a8a] text-white border border-gray-500"
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//         >
//           <option value="High">🔥 High</option>
//           <option value="Medium">⚡ Medium</option>
//           <option value="Low">✅ Low</option>
//         </select>

//         <button
//           onClick={addTask}
//           className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
//         >
//           {editingTask !== null ? <FaEdit /> : <FaPlus />}
//         </button>
//       </div>

//       <ul className="mt-4 space-y-3">
//         {tasks.length === 0 ? (
//           <p className="text-gray-400 text-center">No tasks added yet.</p>
//         ) : (
//           tasks.map((task, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`flex items-center justify-between p-3 rounded-lg ${
//                 task.completed ? "bg-gray-600 line-through" : "bg-[#1e3a8a]"
//               }`}
//             >
//               <span className="flex-1">{task.text}</span>
//               <span
//                 className={`text-xs px-2 py-1 rounded ${
//                   task.priority === "High"
//                     ? "bg-red-500"
//                     : task.priority === "Medium"
//                     ? "bg-yellow-500"
//                     : "bg-green-500"
//                 }`}
//               >
//                 {task.priority}
//               </span>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => toggleComplete(index)}
//                   className="text-green-400 hover:text-green-300"
//                 >
//                   <FaCheck />
//                 </button>
//                 <button
//                   onClick={() => editTask(index)}
//                   className="text-yellow-400 hover:text-yellow-300"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button
//                   onClick={() => deleteTask(index)}
//                   className="text-red-400 hover:text-red-300"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </motion.li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [priority, setPriority] = useState("Medium");

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    if (editingTask !== null) {
      setTasks(
        tasks.map((task, index) =>
          index === editingTask ? { ...task, text: newTask, priority } : task
        )
      );
      setEditingTask(null);
    } else {
      setTasks([...tasks, { text: newTask, completed: false, priority }]);
    }
    setNewTask("");
    setPriority("Medium");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setPriority(tasks[index].priority);
    setEditingTask(index);
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-6 bg-black text-white rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">📝 Student To-Do List</h2>

      {/* Input + Priority Selection */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 focus:outline-none text-sm sm:text-base"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <select
          className="p-3 rounded-lg bg-[#1e3a8a] text-white border border-gray-500 text-sm sm:text-base"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">✅ Low</option>
        </select>

        <button
          onClick={addTask}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base"
        >
          {editingTask !== null ? <FaEdit /> : <FaPlus />}
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center justify-between p-3 rounded-lg ${
                task.completed ? "bg-gray-600 line-through" : "bg-[#1e3a8a]"
              }`}
            >
              <span className="flex-1 text-sm sm:text-base">{task.text}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {task.priority}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(index)}
                  className="text-green-400 hover:text-green-300 text-sm sm:text-base"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => editTask(index)}
                  className="text-yellow-400 hover:text-yellow-300 text-sm sm:text-base"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-400 hover:text-red-300 text-sm sm:text-base"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
