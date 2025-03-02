export const signin = async (data, login, setError) => {
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
        await login({ user, role: "student" });
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
  