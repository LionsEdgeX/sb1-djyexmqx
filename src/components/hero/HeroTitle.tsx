import React from 'react';

export default function HeroTitle() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full">
        <span className="text-white font-semibold">FREE QUIZ</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        What Type of "Funnel"
        <br />
        is Right for YOUR Business??
      </h1>
    </div>
  );
}