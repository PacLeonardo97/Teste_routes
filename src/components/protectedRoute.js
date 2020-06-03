/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isValidElementType } from 'react-is';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isLogged = true;
      if (isLogged) {
        return <Component {...props} />;
      }
      return <Redirect to="/login" />;
    }}
  />
);

const elementTypePropTypeChecker = (props, propName, componentName) => {
  if (props[propName] && !isValidElementType(props[propName])) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}': the prop is not a valid React component`
    );
  }
};

ProtectedRoute.propTypes = {
  component: elementTypePropTypeChecker,
  rest: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

ProtectedRoute.defaultProps = {
  component: null || undefined,
};

export { ProtectedRoute as default, ProtectedRoute };
