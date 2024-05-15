import ReviewStar from '@/assets/icons/star';
import { Star } from 'lucide-react';
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
        const fillColor = (hoverRating || rating) >= starValue ? '#FFC107' : '#D9D9D9';
        return (
          <span
            key={index}
            className="text-2xl mx-1 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            <ReviewStar fill={fillColor} />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;