import React from 'react';
import { Rocket, Gift, Award } from 'lucide-react';

export default function Hero() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="text-center space-y-8">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            2025 Success Challenge
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Take This Fun Quiz & Unlock Your
            <span className="block text-yellow-400">Free Success Blueprint!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover Your Perfect StartUp Idea + Get the Exact Steps to Achieve Massive Success in 2025!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button
              onClick={scrollToQuiz}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all"
            >
              <Rocket size={24} />
              Take the Free Quiz Now
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="flex items-center gap-2">
              <Gift size={20} />
              <span>3 Free Giveaways</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span>5,000+ Success Stories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}