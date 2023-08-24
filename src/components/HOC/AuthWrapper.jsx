import { useState } from "react";
import { getDisplayName } from "../../utils/helpers";

const AuthWrapper = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (username, password) => {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.token) {
          // Store the token and update the current user
          localStorage.setItem("token", data.token);
          setCurrentUser({ username: data.username });
        } else {
          throw new Error("Login failed.");
        }
      } catch (error) {
        console.error(error);
      }
    };

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
