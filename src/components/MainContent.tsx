import React from 'react';
import MainHeader from './MainHeader';
import PlaylistGrid from './PlaylistGrid';
import TrackList from './TrackList';

function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black p-8">
      <MainHeader />
      <PlaylistGrid />
      <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
      <TrackList />
    </main>
  );
}

export default MainContent;