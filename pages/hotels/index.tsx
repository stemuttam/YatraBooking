// pages/hotels/index.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Hotel } from '../../types';
import HotelCard from '../../components/HotelCard';
import styles from '../../styles/HotelsListPage.module.css';

export default function HotelsPage() {
  const { query, push } = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filtered, setFiltered] = useState<Hotel[]>([]);

  const guestCount = parseInt(query.guests as string || '1');

  const nights =
    query.checkin && query.checkout
      ? Math.max(
          1,
          (new Date(query.checkout as string).getTime() -
            new Date(query.checkin as string).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 1;

  useEffect(() => {
    fetch('/mock/hotels.json')
      .then(res => res.json())
      .then(setHotels);
  }, []);

  useEffect(() => {
    if (hotels.length && query.city) {
      setFiltered(
        hotels.filter(h =>
          h.city.toLowerCase() === query.city?.toString().toLowerCase()
        )
      );
    }
  }, [hotels, query]);

  return (
    <main className={styles.container}>
      <button onClick={() => push('/')} className={styles.backLink}>
        ← Back to Search
      </button>

      <div className={styles.summaryBox}>
        <div>
          <h2 className={styles.heading}>Hotels in {query.city}</h2>
          <p className={styles.subHeading}>
            {query.checkin} - {query.checkout} • {guestCount} Guest{guestCount > 1 ? 's' : ''} • {nights} Night{nights > 1 ? 's' : ''}
          </p>
        </div>
        <div className={styles.badge}>
          {filtered.length} hotel{filtered.length !== 1 ? 's' : ''} found
        </div>
      </div>

      <div className={styles.list}>
        {filtered.length > 0 ? (
          filtered.map(h => <HotelCard key={h.id} hotel={h} />)
        ) : (
          <p className={styles.noResults}>No hotels available for selected criteria.</p>
        )}
      </div>
    </main>
  );
}
