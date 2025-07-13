// components/SearchForm.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const router = useRouter();
  const [cities, setCities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    city: '',
    checkin: '',
    checkout: '',
    guests: '1',
  });
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    fetch('/mock/cities.json').then((res) => res.json()).then(setCities);
  }, []);

  const validate = () => {
    const today = new Date().toISOString().split('T')[0];
    const errs = [];
    if (!formData.city || !cities.includes(formData.city)) errs.push('Invalid city');
    if (!formData.checkin || formData.checkin < today) errs.push('Invalid check-in');
    if (!formData.checkout || formData.checkout <= formData.checkin) errs.push('Invalid check-out');
    if (!formData.guests || +formData.guests < 1) errs.push('Select guests');
    setErrors(errs);
    return errs.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push({ pathname: '/hotels', query: formData });
    }
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Search Hotels</h2>

      <div className={styles.grid}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.icon}>📍</span> City
          </label>
          <input
            list="cities"
            placeholder="Enter city name"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <datalist id="cities">
            {cities.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.icon}>📅</span> Check-in
          </label>
          <input
            type="date"
            value={formData.checkin}
            onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.icon}>📅</span> Check-out
          </label>
          <input
            type="date"
            value={formData.checkout}
            onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.icon}>👤</span> Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} Guest{n > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit">
            🔍 <span>Search Hotels</span>
          </button>
        </div>
      </div>

      {errors.length > 0 && (
        <ul className={styles.errors}>
          {errors.map((e, i) => (
            <li key={i}>• {e}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
