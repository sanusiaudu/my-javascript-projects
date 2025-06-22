/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #a8b9d3, rgb(173, 227, 229))',
        'custom-gradient2': 'linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);',
      },
    },
  },
  plugins: [],
}

