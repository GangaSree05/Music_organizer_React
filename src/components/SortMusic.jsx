import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";
import "./SortMusic.css";

const SortMusic = () => {
  const { musicList } = useContext(MusicContext);
  const [sortedMusic, setSortedMusic] = useState([...musicList]);

  const handleSort = (key) => {
    const grouped = [...musicList].reduce((groups, track) => {
      const groupKey = track[key];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(track);
      return groups;
    }, {});

    const sorted = Object.entries(grouped).flatMap(([key, tracks]) => [
      { group: key },
      ...tracks,
    ]);
    setSortedMusic(sorted);
  };

  return (
    <div className="sort-music">
      <h1>Sort Music</h1>
      {musicList.length === 0 ? (
        <p>No music added yet.</p>
      ) : (
        <>
          <div className="sort-buttons">
            <button onClick={() => handleSort("album")}>Sort by Album</button>
            <button onClick={() => handleSort("genre")}>Sort by Genre</button>
            <button onClick={() => handleSort("artist")}>Sort by Artist</button>
          </div>
          <div className="music-list">
            {sortedMusic.map((track, index) =>
              track.group ? (
                <h2 key={index} className="group-header">{`Group: ${track.group}`}</h2>
              ) : (
                <div key={track.title} className="music-item">
                  <h3>{track.title}</h3>
                  <p>Artist: {track.artist}</p>
                  <p>Genre: {track.genre}</p>
                  <p>Album: {track.album}</p>
                  <p>Tags: {track.tags.join(", ") || "No tags"}</p>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SortMusic;
