/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.2)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
};
