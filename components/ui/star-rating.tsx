import { Star } from "lucide-react";

const MAX_RATING = 5;

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div role="img" aria-label={`${rating} out of ${MAX_RATING}`} className="flex gap-0.5">
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-4 ${index < rating ? "fill-rating text-rating" : "text-line-strong"}`}
        />
      ))}
    </div>
  );
}

