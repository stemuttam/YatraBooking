// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        grayLight: '#f9fafb',
        dark: '#1f2937',
      },
      boxShadow: {
        card: '0 6px 16px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
