import { Navigate } from "react-router-dom";

export const AuthProtectedRoute = ({ element: Component, ...props }) => {

  return !props.loggedIn ? (
    <Component {...props} replace />
  ) : (
    <Navigate to="/"></Navigate>
  );
};