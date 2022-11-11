/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        75: '75px',
      },
      height: {
        75: '75px',
      },
      colors: {
        'color-job-title': '#3A4562',
        'color-job-info': '#878D9D',
        'color-background': '#F5F5F5',
        'color-background-button': '#384564',
      },
    },
  },
  plugins: [],
};
