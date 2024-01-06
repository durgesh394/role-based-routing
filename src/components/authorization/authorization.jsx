import React, { useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";

import hasPermission from "../../utils/authrizationUtils";
import { router } from "../../app/routes";

const Authorization = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const { userRole } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const matchedRoutes = matchRoutes(router, pathname);
    console.log(matchedRoutes[1]?.route.auth, "matchedRoutes");
    if (matchedRoutes && matchedRoutes.length > 0) {
      // const matchedRoute = matchedRoutes[1].route;
      const requiresAuth = matchedRoutes ? matchedRoutes[1]?.route.auth : false;

      // Assuming requiresAuth is an array of strings representing required permissions
      const isAuthorized = hasPermission(requiresAuth, userRole);
      console.log(isAuthorized, "isAuthidj");
      if (!isAuthorized) {
        // Redirect or handle unauthorized access as needed

        navigate("sign-in");
      }
    }
  }, [pathname, userRole]);

  return <div>{props.children}</div>;
};

export default Authorization;
