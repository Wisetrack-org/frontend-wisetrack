import { BASE_URL } from "../constants/constants";

export const signin = async (data, role, login, setError) => {
    setError("");
  
    try {
      const apiEndpoint = 
            role === "student" ? `${BASE_URL}/api/studentSignin` :
            role === "teacher" ? `${BASE_URL}/api/teacherSignin` :
            role === "university" ? `${BASE_URL}/api/universitySignin` :
            null;

        if (!apiEndpoint) {
            throw new Error("Invalid role selected");
        }


      const response = await fetch(
        apiEndpoint,
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
        await login({ user, role });
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

  export const signup = async (formData) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/studentSignup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Successful: ", data);
      } else {
        const text = await response.json();
        console.error("Non-JSON response:", text);
        alert("Signup failed: User with this email already exists");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  }
  