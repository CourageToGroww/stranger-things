/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { login as loginAPI } from "../utils/auth";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Function to validate the token and set the authentication state
  const validateToken = () => {
    const token = localStorage.getItem("token");
    const userDetails = localStorage.getItem("user");

    if (token && userDetails) {
      try {
        const parsedUserDetails = JSON.parse(userDetails);
        setIsAuthenticated(true);
        setUser(parsedUserDetails);
      } catch (error) {
        console.error("Invalid JSON in local storage:", error);
      }
    }
  };
  // Call validateToken when the application loads
  useEffect(() => {
    validateToken();
  }, []);

  const login = async (userData) => {
    console.log("Login function in AuthProvider is called");
    console.log("About to call loginAPI");
    const response = await loginAPI(userData);

    if (response.success) {
      setIsAuthenticated(true);
      console.log("Setting user to:", response.user);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const contextValue = {
    user,
    isAuthenticated,
    setUser,
    setIsAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
