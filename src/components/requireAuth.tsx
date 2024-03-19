import React, { ComponentType } from "react";
import { useAppSelector } from "../app/hooks";
import Auth from "../pages/Auth";

function withAuth(WrappedComponent: ComponentType): React.FC {
  function AuthComponent() {
    const isLoggedIn = useAppSelector((state) => state.auth.value);
    if (!isLoggedIn) {
      return <Auth />;
    }

    return <WrappedComponent />;
  }

  return AuthComponent;
}

export default withAuth;
