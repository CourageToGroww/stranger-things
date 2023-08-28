import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../components/AuthProvider";

const LoginRoute = () => {
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const authenticate = (user) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  return <LoginForm authenticate={authenticate} />;
};

export default LoginRoute;
