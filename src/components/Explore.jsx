import React from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="explore">
      <h1>Explore Music Organizer</h1>
      <div className="buttons">
        <button onClick={() => navigate("/add-music")}>Add Music</button>
        <button onClick={() => navigate("/tag-music")}>Tag Music</button>
        <button onClick={() => navigate("/sort-music")}>Sort Music</button>
      </div>
    </div>
  );
};

export default Explore;



