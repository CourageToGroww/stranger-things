import { useState } from "react";

export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save the token or any other successful login logic
      localStorage.setItem("token", data.token);
      console.log("Login Successful");
      return { success: true };
    } else {
      // Handle error from the server
      return { success: false, message: data.error };
    }
  } catch (error) {
    console.error(error);
    // Handle other errors, such as network issues
    return {
      success: false,
      message: "An error occurred while logging in. Please try again.",
    };
  }
};

//useAuth hook

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userDetails) => {
    setIsAuthenticated(true);
    setUser(userDetails);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};
