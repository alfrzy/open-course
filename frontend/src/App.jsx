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
import CRUDDosen from "./components/Dosen/CRUDDosen";
import Dosen from "./components/Dosen/Dosen";
import DosenKelas from "./pages/dosenDashboard/dosenKelas";
import AddKelas from "./pages/dosenDashboard/addKelas";
import MainLanding from "./pages/mainLanding/mainLanding";
import SiswaDashboard from "./pages/Siswa/SiswaDashboard";
import ComponentEditDosen from "./components/Form/ComponentEditDosen";
import Detail from "./pages/kelas/DetailKelas";
import Checkout from "./pages/kelas/checkoutKelas";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/dosen" element={<CRUDDosen />} />
        <Route path="/editdosen" element={<ComponentEditDosen />} />
        <Route path="/siswa" element={<SiswaDashboard/>}/>
        <Route path="/" element={<MainLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-kelas/:id" element={<Detail />} />
        {/* admin */}
        <Route element={<PrivateRoute requiredRole="2" />}>
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/kelas" element={<PageKelas />} />
          <Route path="/mahasiswa" element={<PageKelas />} />
        </Route>
        {/* dosen */}
        <Route element={<PrivateRoute requiredRole="1" />}>
          <Route path="/dosen-dashboard" element={<DosenDashboard />} />
          <Route path="/dosen-kelas" element={<DosenKelas />} />
          <Route path="/dosen-addkelas" element={<AddKelas />} />
        </Route>
        {/* mhs */}
        <Route element={<PrivateRoute requiredRole="0" />}>
          <Route path="/mahasiswa-dashboard" element={<MahasiswaDashboard />} />
          <Route path="/checkout-kelas/:id" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
