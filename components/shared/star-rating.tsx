import { useState } from 'react';

const StarRating = ({ rating, onChange }: {
  rating: number;
  onChange: (rating: number) => void;
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (starRating: number) => {
    setHoverRating(starRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (starRating: number) => {
    onChange(starRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-2xl cursor-pointer ${(hoverRating || rating) >= starValue ? 'text-yellow-500' : 'text-gray-400'
              }`}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;