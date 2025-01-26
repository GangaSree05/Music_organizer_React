import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Music Organizer</h1>
      <button onClick={() => navigate("/explore")}>Explore</button>
    </div>
  );
};

export default Home;
