import { useState, useEffect } from "react";

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
      return { success: true, user: data.user };
    } else {
      // Handle error from the server
      return { success: false, message: data.error };
    }
  } catch (error) {
    console.error(error);
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

  // Function to validate the token and set the authentication state
  const validateToken = () => {
    const token = localStorage.getItem("token");
    const userDetails = localStorage.getItem("user");
    if (token && userDetails) {
      // Validate the token (e.g., by decoding it or making a request to the server)
      // Set the authentication state
      setIsAuthenticated(true);
      setUser(JSON.parse(userDetails));
    }
  };

  // Call validateToken when the application loads
  useEffect(() => {
    validateToken();
  }, []);

  const authenticate = (userDetails) => {
    setIsAuthenticated(true);
    setUser(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return { isAuthenticated, user, authenticate, logout };
};
