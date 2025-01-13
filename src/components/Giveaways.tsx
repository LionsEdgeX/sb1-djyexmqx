import React from 'react';
import { Rocket, FileCheck, UserCheck, Timer } from 'lucide-react';

export default function Giveaways() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What You'll Get (100% Free)
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Timer size={24} className="text-yellow-400" />
            <p className="text-yellow-400 font-semibold">
              Limited Time Offer - Claim Your Giveaways Now!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <Rocket size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              5 Amazing StartUp Ideas
            </h3>
            <p className="text-white/90">
              Actionable business ideas you can launch in 2025 with zero upfront costs.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FileCheck size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              2025 Success Blueprint
            </h3>
            <p className="text-white/90">
              Step-by-step guide to achieving massive results fast.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <UserCheck size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Personalized Plan
            </h3>
            <p className="text-white/90">
              Custom recommendations based on your unique quiz answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}