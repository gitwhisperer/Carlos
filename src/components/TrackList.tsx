import React from 'react';
import { Clock } from 'lucide-react';

function TrackList() {
  return (
    <div className="bg-zinc-900/90 rounded-md">
      <div className="px-6 py-4 border-b border-zinc-800">
        <div className="grid grid-cols-12 text-sm text-zinc-400">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-4">Album</div>
          <div className="col-span-2 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="px-6 py-4 grid grid-cols-12 items-center hover:bg-zinc-800/50 group transition-colors cursor-pointer"
        >
          <div className="col-span-1 text-zinc-400">{i + 1}</div>
          <div className="col-span-5 flex items-center gap-4">
            <img
              src={`https://images.unsplash.com/photo-${1600000000000 + i}?w=40&h=40&fit=crop`}
              alt="Song cover"
              className="w-10 h-10 rounded"
            />
            <div>
              <div className="font-medium">Song Title {i + 1}</div>
              <div className="text-sm text-zinc-400">Artist Name</div>
            </div>
          </div>
          <div className="col-span-4 text-zinc-400">Album Name</div>
          <div className="col-span-2 text-zinc-400 text-right">3:30</div>
        </div>
      ))}
    </div>
  );
}

export default TrackList;