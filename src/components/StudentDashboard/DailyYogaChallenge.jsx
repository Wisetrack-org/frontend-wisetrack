import { useEffect, useState } from "react";

const DailyYogaChallenge = () => {
  const [asanas, setAsanas] = useState([]);

  useEffect(() => {
    fetch("/data/asana.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setAsanas(data);
      })
      .catch((error) => console.error("Error fetching asanas:", error));
  }, []);
  

  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🧘‍♂️ Daily Yoga Challenge</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {asanas.map((asana, index) => (
          <div key={index} className="bg-[#1e3a8a] p-4 rounded-xl shadow-lg flex flex-col items-center">
            <img src={asana.image} alt={asana.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{asana.name}</h3>
            <p className="text-gray-300 text-center mt-2">{asana.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyYogaChallenge;
