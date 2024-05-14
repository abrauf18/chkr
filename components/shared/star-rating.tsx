// StarRating.tsx
import React from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const handleClick = (newRating: number) => {
    onRatingChange?.(newRating);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={`cursor-pointer text-xl hover:text-yellow-500 ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
          onClick={() => handleClick(starValue)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
