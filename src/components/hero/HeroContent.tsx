import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="mt-12 max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Take this FREE assessment
        </h2>
        <p className="text-gray-600 mb-6">
          Discover which of 27+ different marketing funnels is right for you based on your:
        </p>
        <ul className="text-left space-y-2 mb-8">
          <li className="flex items-center gap-2">
            <ArrowRight className="text-green-500" size={20} />
            <span>Type of Business</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="text-blue-500" size={20} />
            <span>Industry & Product</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="text-purple-500" size={20} />
            <span>Price Point</span>
          </li>
        </ul>
        <button className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-all">
          START THE QUIZ FREE!
        </button>
      </div>
    </div>
  );
}