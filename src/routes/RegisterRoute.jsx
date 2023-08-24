import RegistrationForm from "../components/RegistrationForm";
import { useEffect } from "react";

const RegisterRoute = ({ navigate }) => {
  useEffect(() => {
    navigate("/register");
  }, [navigate]);

  return <RegistrationForm />;
};

export default RegisterRoute;
