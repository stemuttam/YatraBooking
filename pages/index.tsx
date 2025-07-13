// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>YatraBooking – Find Your Perfect Stay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Find Your Perfect <span className={styles.highlight}>Stay</span>
          </h1>
          <p className={styles.subtitle}>
            Discover amazing hotels and create unforgettable memories with our curated selection of accommodations.
          </p>
        </section>

        <section className={styles.searchSection}>
          <SearchForm />
        </section>


        <section className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Why Choose YatraBooking?</h3>
          <p className={styles.featuresSubtitle}>Experience hassle-free hotel booking with our premium features</p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h4 className={styles.featureHeading}>Smart Search</h4>
              <p className={styles.featureDesc}>
                Find the perfect hotel with our intelligent search and filtering system
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📍</div>
              <h4 className={styles.featureHeading}>Prime Locations</h4>
              <p className={styles.featureDesc}>
                Discover hotels in the best locations across major cities
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h4 className={styles.featureHeading}>Best Prices</h4>
              <p className={styles.featureDesc}>
                Get the best deals and competitive prices for your stay
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
