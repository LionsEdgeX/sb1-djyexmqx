import React from 'react';
import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain className="text-white" size={32} />
          <span className="text-white font-bold text-xl">Quiz Funnel</span>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Start The Quiz
        </button>
      </div>
    </header>
  );
}