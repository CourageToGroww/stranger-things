//A form component for user login.
import { useContext } from "react";
import { ThemeContext } from "./NavBar";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-xs mx-auto ">
        <form
          className={`px-8 pt-6 pb-8 mb-4 rounded shadow-md font-orbitron ${
            theme === "light"
              ? "bg-blue-300 text-white"
              : "bg-gray-800 text-rose-400"
          }`}
        >
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
              className={`w-full px-3 py-2 leading-tight text-gray-700 border border-red-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400"
              }`}
              id="username"
              type="text"
              placeholder="Username"
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
              className={`w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400"
              }`}
              id="password"
              type="password"
              placeholder="***********"
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className={`w-32 px-4 py-2 font-bold rounded focus:outline-none hover:text-red-500 focus:shadow-outline ${
                theme === "light"
                  ? "text-black border-black bg-white border border-black-400"
                  : " dark:text-rose-400 border border-rose-400 "
              }`}
              type="button"
            >
              Log In
            </button>
            <Link
              to="/register"
              className={`inline-block text-sm font-bold text-blue-500 align-baseline hover:text-red-500 mt-5 ${
                theme === "light"
                  ? "text-white border-black"
                  : " dark:text-rose-400 "
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
