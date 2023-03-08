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
    extend: {
      colors: {
        bk: "#09121d",
        wt: "#F5F5F5",
        t2: "#2e2e3f",
        accent: "#11AD8E",
      },
      fontFamily: {
        out: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
