import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/auth/register/register";

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
      <Routes>
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
