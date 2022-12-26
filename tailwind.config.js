/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcf3cf",
        secondary: "#f9e79f",
        text_primary: "#574600",
        text_secondary: "#4F3F00",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
      },
      boxShadow: {
        medium: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
