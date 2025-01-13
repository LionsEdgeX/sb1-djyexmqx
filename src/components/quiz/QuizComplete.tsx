import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function QuizComplete() {
  return (
    <div className="text-center space-y-6">
      <h3 className="text-2xl font-bold text-green-600">
        Thanks for completing the quiz!
      </h3>
      <p className="text-gray-600">
        We're preparing your personalized Success Blueprint...
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto">
        Get Your Free Success Blueprint
        <ArrowRight size={20} />
      </button>
    </div>
  );
}