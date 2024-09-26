import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import Login from "./pages/auth/Login/Login";
import ChangePassword from "./pages/ChangePassword/changePassword";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/auth/register/register";
import Table from "./components/Table/Table";
import ComponentAddDosen from "./components/Form/ComponentAddDosen";
import { Toaster } from "react-hot-toast";
import ComponentEditDosen from "./components/Form/ComponentEditDosen";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/editdosen" element={<ComponentEditDosen />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/" element={<Login setAuth={setIsAuth} />} />
        <Route path="/register" element={<Register setAuth={setIsAuth} />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/home" element={<Home onLogout={handleLogout} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
