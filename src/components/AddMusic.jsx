import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";
import "./AddMusic.css";

const AddMusic = () => {
  const { addMusic } = useContext(MusicContext);
  const [music, setMusic] = useState({
    title: "",
    artist: "",
    genre: "",
    album: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMusic((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMusic(music);
    alert(`Music "${music.title}" added successfully!`);
    setMusic({ title: "", artist: "", genre: "", album: "" });
  };

  return (
    <div className="add-music">
      <div className="form-container">
        <h1>Add Music</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter music title"
            value={music.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="artist"
            placeholder="Enter artist name"
            value={music.artist}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Enter genre"
            value={music.genre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="album"
            placeholder="Enter album name"
            value={music.album}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Music</button>
        </form>
      </div>
    </div>
  );
};

export default AddMusic;
