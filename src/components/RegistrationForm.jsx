import { useContext } from "react";
import { ThemeContext } from "../utils/helpers";

const RegistrationForm = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />

        <label htmlFor="name">username</label>
        <input type="text" id="name" />
      </form>
    </div>
  );
};

export default RegistrationForm;
