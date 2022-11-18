/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'secondary-text': 'rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
};
