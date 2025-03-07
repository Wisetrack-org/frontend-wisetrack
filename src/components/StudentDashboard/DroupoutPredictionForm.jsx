// import { useState } from "react";

// const DropoutPredictionForm = () => {
//     const [formData, setFormData] = useState({
//         Backlogs: "",
//         Scholarship: "",
//         Tuition_Delay: "",
//         Financial_Stress_Index: "",
//         Finance_Issue: "",
//         Work_Hours: "",
//         Academic_Consistency: "",
//         Homework_Streak: "",
//         Grades: "",
//         Weekly_Test_Scores: "",
//         Attention_Score: "",
//         Attendance: "",
//         Absences: "",
//         Engagement_Score: "",
//         Not_Interested: "",
//         Discrimination: "",
//         Participation: "",
//         Physical_Health_Issues: "",
//         Social_Engagement: "",
//         Mental_Health_Issues: "",
//         Physical_Disability: "",
//         School_Far: "",
//         Sudden_Drop: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitted Data:", formData);
//     };

//     return (
//         <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-5">
//             <h2 className="text-xl font-bold text-center mb-4">Dropout Prediction Form</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {Object.keys(formData).map((key) => (
//                     <div key={key} className="flex flex-col">
//                         <label className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
//                         <input
//                             type="text"
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
//                         />
//                     </div>
//                 ))}
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default DropoutPredictionForm;



import { useState } from "react";

const DropoutPredictionForm = () => {
    const [formData, setFormData] = useState({
        Backlogs: "",
        Scholarship: "",
        Tuition_Delay: "",
        Financial_Stress_Index: "",
        Finance_Issue: "",
        Work_Hours: "",
        Academic_Consistency: "",
        Homework_Streak: "",
        Grades: "",
        Weekly_Test_Scores: "",
        Attention_Score: "",
        Attendance: "",
        Absences: "",
        Engagement_Score: "",
        Not_Interested: "",
        Discrimination: "",
        Participation: "",
        Physical_Health_Issues: "",
        Social_Engagement: "",
        Mental_Health_Issues: "",
        Physical_Disability: "",
        School_Far: "",
        Sudden_Drop: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-black m-1 md:mt-10">
            <h2 className="text-2xl font-bold text-center text-white mb-6">Dropout Prediction Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-300 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                            placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-bold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DropoutPredictionForm;
