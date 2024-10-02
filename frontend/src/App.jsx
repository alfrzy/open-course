import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login/Login";
import ChangePassword from "./pages/ChangePassword/changePassword";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/auth/register/register";
import Dashboard from "./pages/adminDashboard/Dashboard";
import PageKelas from "./pages/kelas/PageKelas";
import { useAuth } from "./redux/auth/authSlice";
import MahasiswaDashboard from "./pages/mahasiswaDashboard/MahasiswaDashboard";
import DosenDashboard from "./pages/dosenDashboard/dosenDashboard";
import { Toaster } from "react-hot-toast";
import Dosen from "./components/Dosen/Dosen";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin */}
        <Route element={<PrivateRoute requiredRole="2" />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/kelas" element={<PageKelas />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/mahasiswa" element={<PageKelas />} />
        </Route>
        {/* dosen */}
        <Route element={<PrivateRoute requiredRole="1" />}>
          <Route path="/dosen-dashboard" element={<DosenDashboard />} />
        </Route>
        {/* mhs */}
        <Route element={<PrivateRoute requiredRole="0" />}>
          <Route path="/mahasiswa-dashboard" element={<MahasiswaDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
