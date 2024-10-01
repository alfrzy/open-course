import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import Login from "./pages/auth/Login/Login";
import ChangePassword from "./pages/ChangePassword/changePassword";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/auth/register/register";
import Dashboard from "./pages/adminDashboard/Dashboard";
import PageKelas from "./pages/kelas/PageKelas";
import { useAuth } from "./redux/auth/authSlice";
import MhsDashboard from "./pages/mhsDashboard/mhsDashboard";
import DosenDashboard from "./pages/dosenDashboard/dosenDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin */}
        <Route element={<PrivateRoute requiredRole="2" />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/kelas" element={<PageKelas />} />
        </Route>
        {/* dosen */}
        <Route element={<PrivateRoute requiredRole="1" />}>
          <Route path="/dosen-dashboard" element={<DosenDashboard />} />
        </Route>
        {/* mhs */}
        <Route element={<PrivateRoute requiredRole="0" />}>
          <Route path="/mhs-dashboard" element={<MhsDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
