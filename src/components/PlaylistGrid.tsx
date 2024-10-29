import React from 'react';
import { Play } from 'lucide-react';

function PlaylistGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden hover:bg-zinc-800 transition-colors group cursor-pointer"
        >
          <img
            src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=80&h=80&fit=crop`}
            alt="Playlist cover"
            className="w-20 h-20 object-cover"
          />
          <span className="font-semibold px-4">Playlist {i + 1}</span>
          <button className="ml-auto mr-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-4 h-4 text-black" fill="black" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlaylistGrid;