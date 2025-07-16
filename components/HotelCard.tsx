// components/HotelCard.tsx
import Link from 'next/link';
import styles from './HotelCard.module.css';

export default function HotelCard({ hotel }: { hotel: any }) {
  return (
    <div className={styles.card}>
      <img src={hotel.image} alt={hotel.name} className={styles.image} />
      <div className={styles.infoSection}>
        <div className={styles.infoLeft}>
          <h3 className={styles.name}>{hotel.name}</h3>
          <p className={styles.city}>📍 {hotel.city}</p>
          <p className={styles.desc}>{hotel.description}</p>
          <div className={styles.facilities}>
            {hotel.facilities.map((f: string, i: number) => (
              <span key={i} className={styles.tag}>{f}</span>
            ))}
          </div>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.rating}>⭐ {hotel.rating} ({hotel.rating.toFixed(1)})</div>
          <div className={styles.price}>₹{hotel.price.toLocaleString()}</div>
          <p className={styles.total}>Total: ₹{hotel.price}</p>
          <Link href={`/hotels/hotel-${hotel.id}`} className={styles.button}>🔍 View Details</Link>
        </div>
      </div>
    </div>
  );
}
