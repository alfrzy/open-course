import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login/Login";
import ChangePassword from "./pages/ChangePassword/changePassword";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/auth/register/register";
import Dashboard from "./pages/adminDashboard/Dashboard";
import PageKelas from "./pages/adminDashboard/kelas/PageKelas";
import { useAuth } from "./redux/auth/authSlice";
import MahasiswaDashboard from "./pages/mahasiswaDashboard/MahasiswaDashboard";
import DosenDashboard from "./pages/dosenDashboard/dosenDashboard";
import { Toaster } from "react-hot-toast";
import Dosen from "./pages/adminDashboard/Dosen/Dosen";
import DosenKelas from "./pages/dosenDashboard/dosenKelas";
import AddKelas from "./pages/dosenDashboard/addKelas";
import MainLanding from "./pages/mainLanding/mainLanding";
import SiswaDashboard from "./pages/adminDashboard/Siswa/SiswaDashboard";
import AddMateri from "./pages/dosenDashboard/addMateri";
import ComponentEditDosen from "./components/Form/ComponentEditDosen";
import Detail from "./pages/kelas/DetailKelas";
import Checkout from "./pages/kelas/checkoutKelas";
import Invoice from "./pages/invoice/invoice";
import ListPurchase from "./pages/mahasiswaDashboard/ListPurchase";
import InvoicePage from "./pages/kelas/pembelianKelasSuccess";
import SiswaDetail from "./pages/adminDashboard/Siswa/siswaDetail";
import MahasiswaKelas from "./pages/mahasiswaDashboard/mahasiswaKelas";
import CourseDetail from "./pages/dosenDashboard/dosenDetailKelas";
import ModuleDetail from "./pages/dosenDashboard/detailModule";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/siswa" element={<SiswaDashboard />} />
        <Route path="/" element={<MainLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/register" element={<Register />} />
        {/* test ui sebelum masuk ke private route */}
        {/* mhs */}
        <Route path="/listpurchase" element={<ListPurchase />} />
        {/* dosen */}
        <Route path="/addmateri" element={<AddMateri />} />
        <Route path="/detail-kelas/:id" element={<Detail />} />
        {/* admin */}
        <Route path="/dosen" element={<Dosen />} />
        <Route path="/editdosen" element={<ComponentEditDosen />} />
        {/* admin */}
        <Route element={<PrivateRoute requiredRole="2" />}>
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/kelas" element={<PageKelas />} />
          <Route path="/siswa" element={<SiswaDashboard />} />
          <Route path="/siswa/:id" element={<SiswaDetail />} />
          <Route path="/admin-detail-kelas/:id/dashboard" element={<CourseDetail />} />
          <Route path="/admin-detail-kelas/:id/dashboard/module/:moduleId" element={<ModuleDetail />} />
          {/* <Route path="/mahasiswa" element={<PageKelas />} /> */}
          <Route path="/admin-kelas" element={<DosenKelas />} />
          <Route path="/mahasiswa" element={<PageKelas />} />
        </Route>
        {/* dosen */}
        <Route element={<PrivateRoute requiredRole="1" />}>
          <Route path="/dosen-dashboard" element={<DosenDashboard />} />
          <Route path="/dosen-kelas" element={<DosenKelas />} />
          <Route path="/dosen-addkelas" element={<AddKelas />} />
          <Route path="/dosen-detail-kelas/:id/dashboard" element={<CourseDetail />} />
          <Route path="/dosen-detail-kelas/:id/dashboard/module/:moduleId" element={<ModuleDetail />} />
        </Route>
        {/* mhs */}
        <Route element={<PrivateRoute requiredRole="0" />}>
          <Route path="/mahasiswa-dashboard" element={<MahasiswaDashboard />} />
          <Route path="/mahasiswa-kelas" element={<MahasiswaKelas />} />
          <Route path="/checkout-kelas/:id" element={<Checkout />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/mahasiswa-detail-kelas/:id/dashboard" element={<CourseDetail />} />
          <Route path="/mahasiswa-detail-kelas/:id/dashboard/module/:moduleId" element={<ModuleDetail />} />
          <Route
            path="/pembelian-kelas-berhasil/:id"
            element={<InvoicePage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
