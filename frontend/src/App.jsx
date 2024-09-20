import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import Register from "./pages/auth/register/register";
import ComponentNavbar from "./components/navbar/ComponentNavbar";
import PageKelas from "./pages/kelas/PageKelas";
import PageSertifikat from "./pages/sertifikat/PageSertifikat";
import PageTentang from "./pages/tentang/PageTentang";

const App = () => {
  return (
    <Router>
      <ComponentNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kelas" element={<PageKelas />} />
        <Route path="/sertifikat" element={<PageSertifikat />} />
        <Route path="/tentang" element={<PageTentang />} />
      </Routes>
    </Router>
  );
};

export default App;
