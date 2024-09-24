import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword/changePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
