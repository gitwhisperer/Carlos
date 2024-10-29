import React from 'react';
import { Heart } from 'lucide-react';

function MainHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">Good evening</h1>
      <button className="hover:scale-105 transition-transform">
        <Heart className="w-6 h-6" />
      </button>
    </div>
  );
}

export default MainHeader;