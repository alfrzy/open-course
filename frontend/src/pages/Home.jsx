import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ onLogout }) => {
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p className="mt-4">{token ? "Ada token" : "Tidak ada token"}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
