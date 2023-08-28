import { useContext } from "react";
import { getDisplayName } from "../../utils/helpers";
import { AuthContext } from "../AuthProvider";

const AuthWrapper = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { login, logout, user } = useContext(AuthContext);

    return (
      <WrappedComponent
        {...props}
        currentUser={user}
        login={login}
        logout={logout}
      />
    );
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

export default AuthWrapper;
