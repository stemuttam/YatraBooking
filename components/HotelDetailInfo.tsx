// components/HotelDetailInfo.tsx
import { Hotel } from '../types';
import RatingStars from './RatingStars';
import FacilityTag from './FacilityTag';
import styles from './HotelDetailInfo.module.css';

type Props = {
  hotel: Hotel;
  nights: number;
};

const HotelDetailInfo = ({ hotel, nights }: Props) => {
  const tax = 522;
  const total = hotel.price * nights + tax;

  return (
    <div className={styles.container}>
      <button onClick={() => history.back()} className={styles.backBtn}>← Back to Results</button>

      <div className={styles.imageWrapper}>
        <img src={hotel.image} alt={hotel.name} className={styles.bannerImage} />
      </div>

      <div className={styles.header}>
        <div>
          <h1 className={styles.hotelName}>{hotel.name}</h1>
          <p className={styles.location}>📍 {hotel.city}</p>
          <RatingStars rating={hotel.rating} />
        </div>
      </div>

      <div className={styles.layout}>
        {/* LEFT DETAILS */}
        <div className={styles.left}>
          {/* About Section */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>About This Hotel</h2>
            <p className={styles.text}>{hotel.description}</p>
          </section>

          {/* Facilities Section */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>Facilities & Amenities</h2>
            <div className={styles.facilityList}>
              {hotel.facilities.map(fac => (
                <FacilityTag key={fac} label={fac} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <ul className={styles.contactList}>
              <li>📞 {hotel.phone}</li>
              <li>✉️ {hotel.email}</li>
              <li>📍 {hotel.location}</li>
            </ul>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.price}>₹{hotel.price.toLocaleString()}</div>
          <p className={styles.priceLabel}>per night</p>

          <div className={styles.ratingLocation}>
            <p><strong>Rating:</strong> {hotel.rating}</p>
            <p><strong>Location:</strong> {hotel.city}</p>
          </div>

          <div className={styles.breakdown}>
            <p>Base Price: ₹{hotel.price.toLocaleString()}</p>
            <p>Taxes & Fees: ₹{tax}</p>
            <p className={styles.total}>Total: ₹{total.toLocaleString()}</p>
          </div>

          <button
            className={styles.bookBtn}
            onClick={() => alert(`Booking initiated for ${hotel.name}!`)}
          >
            🧾 Book Now
          </button>

          <p className={styles.note}>✅ Free cancellation up to 24 hours</p>
        </aside>
      </div>
    </div>
  );
};

export default HotelDetailInfo;
