import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";
import "./TagMusic.css";

const TagMusic = () => {
  const { musicList, updateTags } = useContext(MusicContext);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (title) => {
    const newTags = tagInput.split(",").map((tag) => tag.trim());
    updateTags(title, newTags);
    setTagInput("");
    alert(`Tags added to "${title}"!`);
  };

  return (
    <div className="tag-music">
      <h1>Tag Music</h1>
      {musicList.length === 0 ? (
        <p>No music added yet.</p>
      ) : (
        <div className="music-list">
          {musicList.map((track) => (
            <div key={track.title} className="music-item">
              <h3>{track.title}</h3>
              <p>Artist: {track.artist}</p>
              <p>Genre: {track.genre}</p>
              <p>Tags: {track.tags.join(", ") || "No tags"}</p>
              <input
                type="text"
                placeholder="Add tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <button onClick={() => handleAddTag(track.title)}>Add Tags</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagMusic;
