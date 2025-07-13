// components/RatingStars.tsx
import styles from './RatingStars.module.css';

type Props = {
  rating: number;
};

const RatingStars = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={styles.starsWrapper}>
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} viewBox="0 0 20 20" className={styles.star}>
          <path d="M10 15l-5.88 3.09 1.12-6.55L.49 6.91l6.56-.96L10 0l2.95 5.95 6.56.96-4.75 4.63 1.12 6.55z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg viewBox="0 0 20 20" className={styles.star}>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M10 15l-5.88 3.09 1.12-6.55L.49 6.91l6.56-.96L10 0l2.95 5.95 6.56.96-4.75 4.63 1.12 6.55z"
            fill="url(#half)"
          />
        </svg>
      )}
      <span className={styles.ratingText}>({rating})</span>
    </div>
  );
};

export default RatingStars;
