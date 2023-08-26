import { login } from "../utils/auth";
export const handleLoginSubmit = async (
  e,
  username,
  password,
  authenticate,
  onClose,
  navigate,
  setMessage
) => {
  e.preventDefault();
  console.log("Form state:", { username, password });
  try {
    const result = await login(username, password);
    if (result && result.success) {
      authenticate(result.user);
      onClose();
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
};
