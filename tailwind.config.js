/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F3F4F6",
        borderColor: "#D1D5DB",
      },
      borderRadius: {
        xl: "12px",
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};