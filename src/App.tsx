import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import QuizSection from './components/QuizSection';
import Giveaways from './components/Giveaways';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <QuizSection />
      <Giveaways />
      <Testimonials />
    </div>
  );
}