/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mansio: {
          bg: "#FFFFFF",
          card: "#FAFAFA",
          border: "#E5E5E5",
          primary: "#18181B",
          muted: "#71717A",
        },
      },
      fontFamily: {
        sans: ["Geist-Regular"],
        "geist-medium": ["Geist-Medium"],
        "geist-semibold": ["Geist-SemiBold"],
        "geist-bold": ["Geist-Bold"],
      },
    },
  },
  plugins: [],
};
