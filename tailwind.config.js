/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      prime: "#FF3811",
      darkd: "#737373",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
