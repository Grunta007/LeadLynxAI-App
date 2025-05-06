import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { FeedbackData } from '../types';

interface FeedbackSectionProps {
  onSubmitFeedback: (feedback: FeedbackData) => void;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onSubmitFeedback }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [featureRequest, setFeatureRequest] = useState<string>('');
  const [niche, setNiche] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFeedback({
      featureRequest,
      niche,
      rating
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold text-[#0F2C59] mb-2">Thank You For Your Feedback!</h3>
          <p className="text-gray-600">We appreciate your input and will use it to improve LeadLynx AI.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold text-[#0F2C59] mb-4">Help Us Improve</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="featureRequest" className="block text-sm font-medium text-gray-700 mb-1">
            What feature would you like us to add?
          </label>
          <textarea
            id="featureRequest"
            rows={3}
            value={featureRequest}
            onChange={(e) => setFeatureRequest(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
            placeholder="Share your feature ideas..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">
            What niche are you using this for?
          </label>
          <input
            type="text"
            id="niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
            placeholder="e.g. Real Estate, Marketing Agency, etc."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rate your experience
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1 focus:outline-none"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  } transition-colors duration-150`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#0F2C59] hover:bg-[#0A1F3F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2C59] transition duration-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackSection;