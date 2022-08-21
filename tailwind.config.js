/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      mdTwo: '940px',
      lg: '1000px',
      xl: '1440px',
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      "primary-light": "#ecf0f3",
      "primary-dark": "#283756",
      "secondary-1": "#fff7ed",
      "secondary-2": "#ffedd5",
      "secondary-3": "cbd5e1",
      "secondary-4": "#f97316",
      "slate-50": "#f8fafc",
      "slate-300": "#f8fafc",
      "slate-700": "#334155",
      "slate-900": "#0f172a",
    },
    extend: {},
  },
  plugins: [],
};
