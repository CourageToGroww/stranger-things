import { useEffect } from "react";

const ProfileRoute = () => {
  const handleProfileClick = (setShowLoginForm, navigate) => {
    setShowLoginForm(false);
    useEffect(() => {
      navigate("/profile");
    }, []);
  };
  return;
};

export default ProfileRoute;
