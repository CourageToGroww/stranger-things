import { useContext } from "react";
import { AuthContext, getDisplayName } from "../../utils/helpers";

const AuthWrapper = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { login, logout, register, user } = useContext(AuthContext);

    return (
      <WrappedComponent
        {...props}
        currentUser={user}
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
