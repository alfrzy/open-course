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
import ComponentEditDosen from "./components/Form/ComponentEditDosen";
import CRUDDosen from "./components/Dosen/CRUDDosen";
import MainLanding from "./pages/mainLanding/mainLanding";
import Siswa from "./pages/Siswa/Siswa";
import SiswaDashboard from "./pages/Siswa/SiswaDashboard";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainLanding" element={<MainLanding />} />
        {/* admin */}
        <Route element={<PrivateRoute requiredRole="2" />}>
          <Route path="/adddosen" element={<CRUDDosen />} />
          <Route path="/editdosen" element={<ComponentEditDosen />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/kelas" element={<PageKelas />} />
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
