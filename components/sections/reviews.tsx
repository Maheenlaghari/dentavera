import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import type { Review } from "@/types/api";
import type { ReviewsContent } from "@/types/content";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) {
    return 0;
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
}

interface ReviewsProps {
  content: ReviewsContent;
  reviews: Review[];
}

export function Reviews({ content, reviews }: ReviewsProps) {
  const averageRating = getAverageRating(reviews);

  return (
    <section id="reviews" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading badge={content.badge} title={content.title} subtitle={content.subtitle} />
          <div className="card flex items-center gap-4 self-start px-5 py-4 md:self-end">
            <span className="text-4xl font-bold tracking-tight text-ink">{averageRating.toFixed(1)}</span>
            <div>
              <StarRating rating={Math.round(averageRating)} />
              <p className="mt-1 text-tiny text-muted">
                {content.ratingLabel}, {reviews.length} {content.reviewCountLabel}
              </p>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.id} className="card flex flex-col p-6 transition-colors hover:border-line-strong">
              <div className="mb-4 flex items-center justify-between">
                <StarRating rating={review.rating} />
                <Quote aria-hidden="true" className="size-5 text-sage-strong" />
              </div>
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-ink">{review.comment}</blockquote>
              <div className="flex items-center justify-between gap-3 border-t border-surface pt-4">
                <div>
                  <p className="text-sm font-bold text-ink">{review.author}</p>
                  <p className="text-tiny text-muted">{review.treatment}</p>
                </div>
                <time dateTime={review.date} className="shrink-0 text-tiny text-subtle">
                  {dateFormatter.format(new Date(review.date))}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

