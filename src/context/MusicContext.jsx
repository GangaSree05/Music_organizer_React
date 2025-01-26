import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musicList, setMusicList] = useState([]);

  const addMusic = (music) => {
    setMusicList((prev) => [...prev, { ...music, tags: [] }]); // Add album and tags
  };

  const updateTags = (title, tags) => {
    setMusicList((prev) =>
      prev.map((track) =>
        track.title === title ? { ...track, tags } : track
      )
    );
  };

  return (
    <MusicContext.Provider value={{ musicList, addMusic, updateTags }}>
      {children}
    </MusicContext.Provider>
  );
};
