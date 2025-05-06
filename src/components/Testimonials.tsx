import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "Generated 87 leads in 2 minutes. That's insane.",
      author: "Priya",
    },
    {
      id: 2,
      text: "I've been paying $99/month for a tool that doesn't even do this. Unreal.",
      author: "James",
    },
    {
      id: 3,
      text: "This just made client prospecting 10x faster.",
      author: "Leo",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold text-[#0F2C59] mb-4">What Our Users Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
            <p className="text-right text-sm text-gray-500">– {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;