/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ThemeContext, handleLoginSubmit } from "../utils/helpers";
import { login } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen overflow-y-auto ">
      <div className="relative w-full max-w-xs mx-auto">
        <button
          className={`absolute top-0 right-0  mr-2 ${
            theme === "light" ? "text-black" : "text-red-400"
          }`}
          onClick={onClose}
        >
          x
        </button>
        <form
          onSubmit={(e) =>
            handleLoginSubmit(
              e,
              username,
              password,
              login,
              onClose,
              navigate,
              setMessage
            )
          }
          className={`px-8 pt-6 pb-8 mb-4 rounded shadow-md font-orbitron ${
            theme === "light"
              ? "bg-blue-300 text-black"
              : "bg-gray-800 text-rose-400"
          }`}
        >
          {message && (
            <div
              className={`text-center mb-8 ${
                theme === "light" ? "text-black" : "text-red-400"
              }`}
            >
              {message}
            </div>
          )}{" "}
          <div className="mb-4">
            <label
              className={`block mb-2 text-sm font-bold text-center ${
                theme === "light" ? "text-white" : "text-red-400"
              }`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={username} // Bind the value to the state
              onChange={(e) => setUsername(e.target.value)} // Update the state on change
              className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400 dark:border-rose-400"
              }`}
              id="username"
              type="text"
              placeholder="Username"
              required
              maxLength={24}
              minLength={8}
            />
          </div>
          <div className="mb-6">
            <label
              className={`block mb-2 text-sm font-bold text-center ${
                theme === "light" ? "text-white" : "text-red-400"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password} // Bind the value to the state
              onChange={(e) => setPassword(e.target.value)} // Update the state on change
              className={`w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400 dark:border-rose-400"
              }`}
              id="password"
              type="password"
              placeholder="***********"
              required
              maxLength={24}
              minLength={8}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className={`w-32 px-4 py-2 font-bold rounded focus:outline-none  focus:shadow-outline ${
                theme === "light"
                  ? "text-black border-black bg-white border border-black-400 hover:text-yellow-500"
                  : " dark:text-rose-400 border border-rose-400 hover:text-red-500"
              }`}
            >
              Log In
            </button>
            <Link
              to="/register"
              className={`inline-block text-sm font-bold align-baseline  mt-5 ${
                theme === "light"
                  ? "text-white border-black hover:text-yellow-500"
                  : " dark:text-rose-400 hover:text-red-500"
              }`}
            >
              No account? <br />
              No problem!
              <br /> Sign up now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
