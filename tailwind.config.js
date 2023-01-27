/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6A2C70',
        background: '#A0BCFF',
        sidebar: '#84A8FF',
      },
    },
  },
  plugins: [],
};
