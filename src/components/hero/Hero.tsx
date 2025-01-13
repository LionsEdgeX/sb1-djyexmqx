import React from 'react';
import HeroTitle from './HeroTitle';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-green-400 via-blue-500 to-purple-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32 relative">
        <HeroTitle />
        <HeroContent />
      </div>
    </div>
  );
}