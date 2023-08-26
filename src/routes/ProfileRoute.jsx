/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ProfileRoute = ({ navigate }) => {
  useEffect(() => {
    navigate("/profile");
  }, [navigate]);

  return null;
};

export default ProfileRoute;
