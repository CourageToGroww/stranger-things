import { useState } from "react";
import { getDisplayName } from "../../utils/helpers";
import { login } from "../../utils/auth";

const AuthWrapper = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    const logout = async () => {
      try {
        const response = await fetch("/api/logout", { method: "POST" });

        if (response.ok) {
          setCurrentUser(null);
        } else {
          throw new Error("Logout failed.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const register = async (username, email, password) => {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          const user = await response.json();
          setCurrentUser(user);
        } else {
          throw new Error("Registration failed.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <WrappedComponent
        {...props}
        currentUser={currentUser}
        login={login}
        logout={logout}
        register={register}
      />
    );
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

export default AuthWrapper;
