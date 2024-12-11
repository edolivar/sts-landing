/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stsLight: "#168991", // Replace with your specific color
        stsDark: "#0c3644", // Replace with your specific color
      },
      animation: {
        "infinite-scroll": "infinite-scroll 45s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {
            transform: "translateX(0) translateZ(1px)",
          },
          to: {
            transform: "translateX(-100%) translateZ(1px)",
          },
        },
      },
    },
  },
  plugins: [],
};
