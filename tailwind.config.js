/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#25244c",
        secondary: "#caa151",
        accent: "#299552",
        bgLight: "#f8f8f8",
        textDark: "#858182",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
