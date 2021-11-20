import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PUBLIC_ROOT = "sign-in";

const AuthRoute = ({ component, render, ...props }) => {
  const { isPublic } = component ? component : {};
  const isAuthenticated = () => {
    return props.isAuthenticated ? true : false;
  };

  if (isAuthenticated()) {
    return render ? render(props) : <Route {...props} component={component} />;
  } else {
    return isPublic ? (
      render ? (
        render(props)
      ) : (
        <Route {...props} component={component} />
      )
    ) : (
      <Redirect to={PUBLIC_ROOT} />
    );
  }
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default AuthRoute;
