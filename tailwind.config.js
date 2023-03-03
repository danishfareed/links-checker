/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["SamsungOne", "sans-serif"],
    },
    extend: {
      fontFamily: {
        'sans': ['SamsungOne', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [ "fantasy", "synthwave"],
  },
  plugins: [require("daisyui")],
};