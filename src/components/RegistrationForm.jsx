import { useContext } from "react";
import { ThemeContext } from "../utils/helpers";

const RegistrationForm = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center h-screen overflow-y-hidden">
      <div className="relative w-full max-w-xs mx-auto">
        <form
          className={`px-8 pt-6 pb-8 mb-4 rounded shadow-md font-orbitron overflow-y-hidden ${
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
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400 dark:border-rose-400"
              }`}
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`block mb-2 text-sm font-bold text-center ${
                theme === "light" ? "text-white" : "text-red-400"
              }`}
              htmlFor="name"
            >
              Username:
            </label>
            <input
              className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400 dark:border-rose-400"
              }`}
              id="name"
              type="text"
              placeholder="Username"
              required
              maxLength={24}
              minLength={8}
            />
          </div>
          <div className="mb-4">
            <label
              className={`block mb-2 text-sm font-bold text-center ${
                theme === "light" ? "text-white" : "text-red-400"
              }`}
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "bg-white border-black"
                  : "dark:bg-gray-800 dark:text-rose-400 dark:border-rose-400"
              }`}
              id="password"
              type="password"
              placeholder="Password"
              required
              maxLength={24}
              minLength={8}
            />
          </div>

          <div className="flex flex-col items-center justify-between">
            <button
              className={`w-32 px-4 py-2 font-bold rounded focus:outline-none focus:shadow-outline ${
                theme === "light"
                  ? "text-black border-black bg-white border border-black-400 hover:text-yellow-500"
                  : "dark:text-rose-400 border border-rose-400 hover:text-red-500"
              }`}
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
