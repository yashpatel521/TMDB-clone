import React from "react";
import { Navigate } from "react-router-dom";

let isAdmin = Boolean(localStorage.isAdmin);
let isAuthenticated = Boolean(localStorage.isAuthenticated);
const PrivateAdminRoute = ({ children }) => {
  if (isAuthenticated === true) {
    if (isAdmin === true) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateAdminRoute;
