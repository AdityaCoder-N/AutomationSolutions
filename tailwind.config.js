/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customViolet:"#332B66",
        gradientStart: 'rgba(101, 90, 223, 0.47)',
        gradientMiddle: 'rgba(145, 145, 220, 0.47)',
        gradientEnd: 'rgba(49, 42, 100, 0.47)',
      },
    },
  },

  plugins: [],
}