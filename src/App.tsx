import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import MainContent from './components/MainContent';
import { Song } from './types';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({
    id: 1,
    title: "Midnight City",
    artist: "M83",
    duration: "4:03",
    albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop"
  });

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;