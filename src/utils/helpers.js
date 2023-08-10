import { createContext } from "react";

//HANDLERS

//Handlers for navigation and rendering
//show get rid of the login form and show the register form
export const handleRegisterClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/register");
};

export const handlePostsClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/posts");
};

export const handleProfileClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/profile");
};

export const handleHomeClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/");
};

//Handlers for login
export function handleLoginClick(setShowLoginForm) {
  return function () {
    setShowLoginForm(true);
  };
}

export function handleLoginFormClose(setShowLoginForm) {
  return function () {
    setShowLoginForm(false);
  };
}

//handlers for dark/light mode
export const toggleTheme = (setTheme) => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
