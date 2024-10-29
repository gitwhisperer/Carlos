import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Shuffle, Repeat, Heart } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentSong: Song;
}

function MusicPlayer({ isPlaying, setIsPlaying, currentSong }: MusicPlayerProps) {
  return (
    <div className="h-24 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-1/3">
        <img
          src={currentSong.albumArt}
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div>
          <h4 className="text-sm font-medium">{currentSong.title}</h4>
          <p className="text-xs text-zinc-400">{currentSong.artist}</p>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black" fill="black" />
            ) : (
              <Play className="w-5 h-5 text-black" fill="black" />
            )}
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-zinc-400">2:14</span>
          <div className="flex-1 h-1 bg-zinc-600 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full relative">
              <div className="absolute -right-2 -top-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <span className="text-xs text-zinc-400">{currentSong.duration}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-1/3 justify-end">
        <Volume2 className="w-5 h-5 text-zinc-400" />
        <div className="w-24 h-1 bg-zinc-600 rounded-full">
          <div className="w-2/3 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;