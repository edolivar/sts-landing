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
        "loop-scroll": "loop-scroll 55s linear infinite",
        "loop-scroll-delay": "loop-scroll-delay 55s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
          "-webkit-0%": { transform: "translateX(0)" },
          "-webkit-100%": { transform: "translateX(-100%)" },
        },
        "loop-scroll-delay": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
          "-webkit-0%": { transform: "translateX(100%)" },
          "-webkit-100%": { transform: "translateX(0)" },
        },
      },
      willChange: {
        transform: "transform", // Add will-change utility
      },
    },
  },
  plugins: [],
};
