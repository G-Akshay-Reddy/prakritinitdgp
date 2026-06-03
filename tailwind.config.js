/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prakriti: {
          primary: "#16A34A",
          secondary: "#22C55E",
          accent: "#A3E635",
          ink: "#050505",
          mist: "#E7F7E8"
        }
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(34, 197, 94, 0.22)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-green": "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.18), transparent 42%)"
      }
    }
  },
  plugins: []
};
