// components/Header.tsx
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>✈️ <span>YatraBooking</span></span>
      </div>
    </header>
  );
};

export default Header;
