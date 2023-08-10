/* eslint-disable react/prop-types */
//navbar for the app
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../utils/helpers";

const NavBar = ({ onLoginClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "lightblue";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`sticky top-0 p-4 ${
          theme === "light"
            ? "bg-blue-400 text-white "
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
              <button
                className={`${
                  theme === "light"
                    ? "hover:text-yellow-500 text-rose-glow"
                    : "hover:text-red-700 text-red-glow"
                }`}
                onClick={toggleTheme}
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              <FiMenu
                className={`${
                  theme === "light"
                    ? "hover:text-yellow-500 text-rose-glow"
                    : "hover:text-red-700 text-red-glow"
                }`}
              />

              <button
                className={`hover:text-red-700 ${
                  theme === "light" ? "text-rose-glow" : "text-red-glow"
                }`}
                onClick={onLoginClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default NavBar;
