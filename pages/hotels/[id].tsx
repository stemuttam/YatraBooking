// pages/hotels/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HotelDetailInfo from '../../components/HotelDetailInfo';
import { Hotel } from '../../types';

export default function HotelDetailPage() {
  const router = useRouter();
  const { id, checkin, checkout } = router.query;

  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const hotelId = parseInt((id as string).replace('hotel-', ''));

    fetch('/mock/hotels.json')
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        const found = data.find((h) => h.id === hotelId);
        setHotel(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading hotel:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Loading hotel details...</p>;
  }

  if (!hotel) {
    return <p style={{ padding: '2rem', color: 'red' }}>❌ Hotel not found.</p>;
  }

  return <HotelDetailInfo hotel={hotel} />;
}
