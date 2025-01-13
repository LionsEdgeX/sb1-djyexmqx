import React from 'react';

type Props = {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
};

export default function QuizQuestion({ question, onAnswer }: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">
        {question.question}
      </h3>
      
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left px-6 py-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}