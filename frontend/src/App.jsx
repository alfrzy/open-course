import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  );
};

export default App;
