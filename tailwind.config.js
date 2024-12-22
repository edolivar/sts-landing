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
        "horizontal-bounce": "horizontal-bounce 1s ease-in-out infinite",
        shrink: "shrink 0.3s ease-out forwards",
        grow: "grow 0.4s ease-out 0.3s forwards",
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
        "horizontal-bounce": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(5px)",
          },
        },
        shrink: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        grow: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
