import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./redux/auth/authSlice";

const PrivateRoute = ({ requiredRole, redirectPath = "/" }) => {
  const auth = useAuth();

  const { role } = auth || {};
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    alert("Access Denied");
    localStorage.removeItem("token");
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
