/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple-1': '#2F1155',
        'dark-purple-2': '#5B259F',
        'dark-purple-3': '#6E34B8',
        purple: '#9038FF',
        pink: '#D71CDB',
        red: '#EB5757',
        green: '#27AE60'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans'],
        rubik: ['Rubik', 'sans']
      }
    }
  },
  plugins: []
};
