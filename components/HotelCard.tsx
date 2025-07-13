// components/HotelCard.tsx
import Link from 'next/link';
import { Hotel } from '../types';
import styles from './HotelCard.module.css';
import RatingStars from './RatingStars';
import FacilityTag from './FacilityTag';

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className={styles.card}>
      <img src={hotel.image} alt={hotel.name} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{hotel.name}</h3>
          <p className={styles.city}>📍 {hotel.city}</p>
          <p className={styles.desc}>{hotel.description}</p>

          <div className={styles.facilities}>
            {hotel.facilities.map(f => (
              <FacilityTag key={f} label={f} />
            ))}
          </div>
        </div>

        <div className={styles.sideInfo}>
          <RatingStars rating={hotel.rating} />
          <p className={styles.price}>₹{hotel.price.toLocaleString()}</p>
          <p className={styles.perNight}>per night</p>
          <p className={styles.total}>Total: ₹{hotel.price.toLocaleString()}</p>

          <Link href={`/hotels/${hotel.id}`}>
            <button className={styles.button}>👁️ View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
