import React from 'react';
import { Star } from 'lucide-react';

type Props = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

export default function TestimonialCard({ name, role, content, rating }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4">"{content}"</p>
      
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}