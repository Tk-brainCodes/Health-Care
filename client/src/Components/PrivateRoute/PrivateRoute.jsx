import React from "react";
import { Route, Redirect } from "react-router-dom";
//redux imports
import { useSelector } from "react-redux";

export const grantUserAccess = (moduleAuth, userRole) => {
  if (!userRole) {
    return false;
  }
  // console.log({ moduleAuth, userRole });
  if (moduleAuth === userRole) {
    return true;
  } else {
    return false;
  }
};

// export const

const PrivateRoute = ({
  children,
  component,
  path,
  moduleName,
  ...otherProps
}) => {
  const userProfile = useSelector((state) => state.auth.userProfile);
  const userPermissions = useSelector((state) => state.auth.userRole);

  // console.log({ userProfile, userPermissions });

  const ProtectedComponent = component;
  //verify that user has access to view this module
  //return forbidden page if user does not have the requisite permissions

  if (!userProfile) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      path={path}
      {...otherProps}
      render={() => {
        if (!userProfile) {
          return <Redirect to="/login" />;
        }
        return grantUserAccess(moduleName, userPermissions) ? (
          <ProtectedComponent />
        ) : (
          <Redirect to="/forbidden" />
        );
      }}
    >
      {!userProfile ? (
        <Redirect to="/login" />
      ) : grantUserAccess(moduleName, userPermissions) ? (
        children
      ) : (
        <Redirect to="/forbidden" />
      )}
    </Route>
  );
};

export default PrivateRoute;
