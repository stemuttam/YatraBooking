// components/HotelDetailInfo.tsx
import styles from './HotelDetailInfo.module.css';

export default function HotelDetailInfo({ hotel }: { hotel: any }) {
  return (
    <div className={styles.container}>
      <img src={hotel.image} alt={hotel.name} className={styles.headerImage} />

      <div className={styles.detailsGrid}>
        <div className={styles.leftColumn}>
          <h2 className={styles.hotelName}>{hotel.name}</h2>
          <p className={styles.city}>📍 {hotel.city}</p>
          <p className={styles.rating}>⭐ {hotel.rating} ({hotel.rating.toFixed(1)})</p>

          <div className={styles.section}>
            <h3>About This Hotel</h3>
            <p>{hotel.description}</p>
          </div>

          <div className={styles.section}>
            <h3>Facilities & Amenities</h3>
            <div className={styles.tags}>
              {hotel.facilities.map((item: string, i: number) => (
                <span className={styles.tag} key={i}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3>Contact Information</h3>
            <p>📞 {hotel.phone}</p>
            <p>✉️ {hotel.email}</p>
            <p>📍 {hotel.location}</p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.pricingBox}>
            <h3 className={styles.price}>₹{hotel.price.toLocaleString()}</h3>
            <p className={styles.perNight}>per night</p>

            <div className={styles.breakdown}>
              <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
              <p><strong>Location:</strong> {hotel.city}</p>
              <p><strong>Base Price:</strong> ₹{hotel.price}</p>
              <p><strong>Taxes & Fees:</strong> ₹522</p>
              <hr />
              <p className={styles.total}><strong>Total:</strong> ₹{hotel.price + 522}</p>
            </div>

            <button className={styles.bookBtn} onClick={() => alert(`Booking initiated for ${hotel.name}!`)}>
              🛎️ Book Now
            </button>

            <p className={styles.cancellation}>✅ Free cancellation up to 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
