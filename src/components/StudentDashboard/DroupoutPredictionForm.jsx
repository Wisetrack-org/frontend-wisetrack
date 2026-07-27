import { useState } from "react";

const DropoutPredictionForm = () => {
  const [formData, setFormData] = useState({
    Backlogs: 2,
    Scholarship: 0,
    Tuition_Delay: 1,
    Financial_Stress_Index: 4.5,
    Finance_Issue: 1,
    Work_Hours: 20,
    Academic_Consistency: 0.6,
    Homework_Streak: 2,
    Grades: 70,
    Weekly_Test_Scores: 65,
    Attention_Score: 6,
    Attendance: 80,
    Absences: 10,
    Engagement_Score: 0.6,
    Not_Interested: 1,
    Discrimination: 0,
    Participation: 3,
    Physical_Health_Issues: 1,
    Social_Engagement: 4,
    Mental_Health_Issues: 1,
    Physical_Disability: 0,
    School_Far: 1,
    Sudden_Drop: 1,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    const tokenData = JSON.parse(localStorage.getItem("token"));
    const token = tokenData?.token;
    const studentId = tokenData?.studentProfile?.student_id;
    try {
      const payload = {};
      for (let key in formData) {
        const value = formData[key];
        payload[key] = isNaN(Number(value)) ? value : Number(value);
      }

      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to get prediction");
      }

      setResult(data.Risk_Status);

    //   const res = await fetch("http://localhost:3000/api/student/mail", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-6 bg-black m-1 min-w-max md:mt-10 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Dropout Prediction Form
      </h2>
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
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center text-white text-xl font-semibold">
          Prediction: <span className="text-yellow-400">{result}</span>
        </div>
      )}

      {error && (
        <div className="mt-6 text-center text-red-500 font-semibold">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default DropoutPredictionForm;
