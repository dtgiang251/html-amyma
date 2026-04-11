/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '980px',
      },
      colors: {
        primaryBlue: "#012C5B",
        primaryBlueLight: "#F7FBFF",
        primaryBlueMedium: "#99C1ED",
        primaryOrange: "#FF9517",
        primaryOrangeLight: "#FFF8F0",
        primaryTeal: "#26B3B8",
        accentBlue: "#0452A6",
        charcoal: "#1C1C1C",
        charcoalMedium: "#7E7E7E",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        dmSans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        fustat: ["Fustat", "Inter", "system-ui", "sans-serif"],
        clarendon: ["Clarendon LT Std", "Georgia", "serif"],
      },
      borderRadius: {
        pill: "200px",
      },
      spacing: {
        navX: "108px",
      },
      boxShadow: {
        subtle: "0 4px 18px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}
