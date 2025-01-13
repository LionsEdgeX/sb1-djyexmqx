import React, { useState } from 'react';
import QuizProgress from './quiz/QuizProgress';
import QuizQuestion from './quiz/QuizQuestion';
import QuizComplete from './quiz/QuizComplete';
import { questions } from '../data/quizQuestions';

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12" id="quiz">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Discover Your Path to Success
        </h2>
        
        {currentQuestion < questions.length ? (
          <>
            <QuizProgress current={currentQuestion + 1} total={questions.length} />
            <QuizQuestion 
              question={questions[currentQuestion]} 
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <QuizComplete />
        )}
      </div>
    </div>
  );
}