/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: "#03060d",
          900: "#070c18",
          850: "#0c1325",
          800: "#121b33",
          700: "#1c2a4d",
          600: "#273b6b",
        },
        neon: {
          cyan: "#00f3ff",
          purple: "#9d4edd",
          pink: "#ff007f",
          emerald: "#00ff9d",
          amber: "#ffb703",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -5px rgba(0, 243, 255, 0.5)",
        "neon-purple": "0 0 25px -5px rgba(157, 78, 221, 0.5)",
        "neon-pink": "0 0 25px -5px rgba(255, 0, 127, 0.5)",
        "glass-glow": "0 8px 32px 0 rgba(0, 243, 255, 0.15)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-ping": "glowPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "scan-line": "scanLine 2.5s ease-in-out infinite alternate",
      },
      keyframes: {
        glowPing: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px rgba(0, 243, 255, 0.8))" },
          "50%": { opacity: "0.5", filter: "drop-shadow(0 0 2px rgba(157, 78, 221, 0.4))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scanLine: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
