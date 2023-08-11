import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Cake from "./components/Cake";
import Bee from "./components/Bee";
import Banner from "./components/Banner";
import Guestbook from "./components/Guestbook";
import AudioPlayer from "./AudioPlayer";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import Poem from "./components/Poem";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/bee" element={<Bee />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/audioplayer" element={<AudioPlayer />} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/poem" element={<Poem/>} />
      </Routes>
    </div>
  );
}

export default App;
