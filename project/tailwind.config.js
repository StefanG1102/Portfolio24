/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,css}", // Include CSS files in the search
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customWhite: '#fffbf7',
        customBlack: '#37363D', // Replace this with your desired black color
        customBlackBackground: '#17181D', // Replace this with your desired black color
      },
    },
  },
  plugins: [],
};
