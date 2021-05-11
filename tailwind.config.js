module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'faded-black': '#212121',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
