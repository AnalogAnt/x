/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature: ["Dancing Script", "cursive"],
      plaza: ["Plaza", "serif"],
      futura: ["Futura", "sans-serif"],
      bubbler: ["Bubbler One", "sans-serif"],
      limelight: ["Limelight", "serif"],
      "league-spartan": ["League Spartan", "sans-serif"],
    }
  },
  plugins: [],
}
