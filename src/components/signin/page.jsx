import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://nodebackend-wisetrack-production.up.railway.app/api/studentSignin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include"
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Success:", responseData);
        const user = {
          ...responseData.data,
          token: document.cookie.split('; ')
                 .find(row => row.startsWith('Authorization='))
                 ?.split('=')[1]
        };
        await login({user, role: "student"});
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setError(errorData.message || "Signin failed");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred during signin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-center">Signin form</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
