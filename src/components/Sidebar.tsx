import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Download, Music2 } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-black flex flex-col gap-2 p-2">
      <div className="flex items-center gap-2 px-4 py-4">
        <Music2 className="w-8 h-8" />
        <span className="text-xl font-bold">Spotify</span>
      </div>
      
      <nav className="bg-zinc-900 rounded-lg p-2">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 text-zinc-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800">
              <Home className="w-6 h-6" />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 text-zinc-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800">
              <Search className="w-6 h-6" />
              <span className="font-medium">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 px-4 py-3 text-zinc-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800">
              <Library className="w-6 h-6" />
              <span className="font-medium">Your Library</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <div className="flex items-center justify-between p-4">
          <button className="text-zinc-300 hover:text-white transition-colors">
            <PlusSquare className="w-6 h-6" />
          </button>
          <button className="text-zinc-300 hover:text-white transition-colors">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <div className="px-2">
          <div className="bg-zinc-800/50 rounded-md p-4 mb-4">
            <p className="font-medium mb-2">Create your first playlist</p>
            <p className="text-sm text-zinc-400 mb-4">It's easy, we'll help you</p>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              Create playlist
            </button>
          </div>

          <div className="bg-zinc-800/50 rounded-md p-4">
            <p className="font-medium mb-2">Let's find some podcasts</p>
            <p className="text-sm text-zinc-400 mb-4">We'll keep you updated</p>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 text-xs text-zinc-400">
        <a href="#" className="hover:underline">Legal</a>
        <span className="mx-2">•</span>
        <a href="#" className="hover:underline">Privacy Center</a>
        <span className="mx-2">•</span>
        <a href="#" className="hover:underline">Cookies</a>
      </div>
    </div>
  );
}

export default Sidebar;