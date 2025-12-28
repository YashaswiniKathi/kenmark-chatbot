/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B4E71",
        accent: "#9A5BCF",
        dark: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
