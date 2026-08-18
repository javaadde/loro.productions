import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FAF8F5",
          100: "#F4F1EA",
          200: "#EFECE4",
          300: "#E6E2D6",
          400: "#D8D3C4",
          500: "#C4BEB0",
          900: "#1A1918",
        },
        brand: {
          orange: "#FF4500",
          "orange-dark": "#E03C00",
          "orange-light": "#FF5C1F",
          charcoal: "#121212",
          ink: "#0D0D0D",
          cream: "#F4F1EA",
          sand: "#EAE5D9",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel-heading)", "Pixelify Sans", "sans-serif"],
        silkscreen: ["Silkscreen", "monospace"],
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        'grain-pattern': "radial-gradient(rgba(18, 18, 18, 0.08) 1px, transparent 1px)",
        'retro-grid': "linear-gradient(to right, rgba(18, 18, 18, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(18, 18, 18, 0.04) 1px, transparent 1px)",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px #121212',
        'brutalist-lg': '8px 8px 0px 0px #121212',
        'brutalist-orange': '6px 6px 0px 0px #FF4500',
        'brutalist-sm': '2px 2px 0px 0px #121212',
      },
    },
  },
  plugins: [],
};
export default config;
