//navbar for the app
import { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "orange";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`sticky top-0 p-4 ${
          theme === "light"
            ? "bg-gray-800 text-white inset-1"
            : "bg-gray-800 text-rose-400"
        } glass font-orbitron `}
      >
        <div className="">
          <div className="flex justify-between">
            <nav className="flex space-x-4">
              <Link
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                to="/posts"
              >
                Posts
              </Link>
              <Link
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                to="/profile"
              >
                Profile
              </Link>
            </nav>
            <div>
              <Link
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                to="/"
              >
                Stranger Things
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FiMenu
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
              />
              <button
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                onClick={toggleTheme}
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              <Link
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default NavBar;
