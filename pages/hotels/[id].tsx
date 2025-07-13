// pages/hotels/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Hotel } from '../../types';
import HotelDetailInfo from '../../components/HotelDetailInfo';

export default function HotelDetailPage() {
  const router = useRouter();
  const { id, checkin, checkout } = router.query;

  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    fetch('/mock/hotels.json')
      .then(res => res.json())
      .then((data: Hotel[]) => {
        const found = data.find(h => h.id === id);
        if (found) setHotel(found);
      });
  }, [id]);

  const nights =
    checkin && checkout
      ? Math.max(
          1,
          (new Date(checkout as string).getTime() - new Date(checkin as string).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 1;

  if (!hotel) {
    return <p style={{ padding: '2rem' }}>Loading hotel details...</p>;
  }

  return <HotelDetailInfo hotel={hotel} nights={nights} />;
}
