import { useEffect } from "react";

const LoginRoute = ({ navigate }) => {
  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
};

export default LoginRoute;
