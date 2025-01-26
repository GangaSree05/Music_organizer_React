import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import AddMusic from "./components/AddMusic";
import TagMusic from "./components/TagMusic";
import SortMusic from "./components/SortMusic";
import { MusicProvider } from "./context/MusicContext";

const App = () => {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/add-music" element={<AddMusic />} />
          <Route path="/tag-music" element={<TagMusic />} /> 
          <Route path="/sort-music" element={<SortMusic />} />

        </Routes>
      </Router>
    </MusicProvider>
  );
};

export default App;
