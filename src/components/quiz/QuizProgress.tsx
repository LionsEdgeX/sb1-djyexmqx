import React from 'react';

type Props = {
  current: number;
  total: number;
};

export default function QuizProgress({ current, total }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-gray-500">
        Question {current} of {total}
      </span>
      <div className="w-64 h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}