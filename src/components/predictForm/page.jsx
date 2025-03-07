import { useState } from "react";

const FeatureForm = () => {
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
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">Feature Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(formData).map((key, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 font-medium">{key.replace(/_/g, " ")}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter ${key.replace(/_/g, " ")}`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default FeatureForm;