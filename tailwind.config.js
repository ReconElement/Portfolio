/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        aero: {
          // Apple-blue / Aero-cyan accent scale
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#2997ff",
          600: "#0a84ff",
          700: "#0b6bd8",
          800: "#1156ab",
          900: "#144b87",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glass:
          "0 10px 40px -12px rgba(16, 42, 82, 0.35), inset 0 1px 0 0 rgba(255,255,255,0.55)",
        "glass-dark":
          "0 18px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255,255,255,0.12)",
        glow: "0 0 0 1px rgba(41,151,255,0.35), 0 12px 40px -8px rgba(41,151,255,0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "sheen-move": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        sheen: "sheen-move 1.1s ease",
      },
    },
  },
  plugins: [],
}
