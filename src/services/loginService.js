import { login } from "../utils/auth"; //add this line
import { loginSuccessful } from "../utils/helpers";

export const handleLoginSubmit = async (
  e,
  username,
  password,
  authenticate,

  navigate,
  setMessage
) => {
  e.preventDefault();

  try {
    const result = await login(username, password);
    if (result && result.success) {
      authenticate(result.user);

      navigate("/");
    } else {
      setMessage(
        result.message ||
          "Invalid login. Please check your username and password."
      );
    }
  } catch (error) {
    console.error(error);
    setMessage("An error occurred while logging in. Please try again.");
  }

  if (loginSuccessful) {
    authenticate(true);
    navigate("/");
  }
};
