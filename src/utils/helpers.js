import { createContext } from "react";

//event handlers for conditionally rendering the login form

//handlers

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
