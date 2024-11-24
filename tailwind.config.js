/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stsLight: "#168991", // Replace with your hex code
        stsDark: "#0c3644", // Replace with your hex code
      },
    },
  },
  plugins: [],
};
