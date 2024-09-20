import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  );
};

export default App;
