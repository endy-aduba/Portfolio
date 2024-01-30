/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: 'rgb(236, 42, 42)', // Replace with your desired RGB value
          // You can also add shades like 500, 600, etc., if needed
          '500': 'rgb(236, 42, 42)',
          // ... other shades
        },
      },
    },
  },
  plugins: [],
}