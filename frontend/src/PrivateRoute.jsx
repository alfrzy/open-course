import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./redux/auth/authSlice";

const PrivateRoute = ({ requiredRole, redirectPath = "/" }) => {
  const auth = useAuth();

  const { role } = auth || {};
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && role.toString() !== requiredRole) {
    alert("Access Denied");
    localStorage.removeItem("token");
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
