/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      mm: "375px",
      ml: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
    extend: {
      colors: {
        accent: "var(--accent-color)",
        accentLow: "var(--accent-low-op)",

        t2: "#2e2e3f",
      },
      // fontFamily: {
      //   out: ["var(--font-outfit)"],
      // },
    },
  },
  plugins: [],
};
