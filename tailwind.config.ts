import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Navy (Trust, Authority)
        navy: {
          50: "#f4f6fb",
          100: "#e8ecf7",
          200: "#c5ceeb",
          300: "#9aaddb",
          400: "#6d84c8",
          500: "#3d54ac",
          600: "#2e4299",
          700: "#1a2452",
          800: "#111a3e",
          900: "#0b1437",
          950: "#060b1f",
        },
        // Primary Magenta (Energy, Action)
        magenta: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#e8359f",
          600: "#d1118c",
          700: "#b00d73",
          800: "#950c60",
          900: "#7e0b52",
          950: "#5a0737",
        },
        // Secondary Gold (Premium, Luxury) - NEW
        gold: {
          50: "#faf8f3",
          100: "#f5f0e6",
          200: "#ead8b8",
          300: "#dfc08a",
          400: "#d4a574",
          500: "#c9935f",
          600: "#b8804a",
          700: "#9d6f3d",
          800: "#825f34",
          900: "#6b4e2a",
        },
        // Secondary Teal (Trust, Tech) - NEW
        teal: {
          50: "#f0fdfc",
          100: "#e0fbf9",
          200: "#b3f5f0",
          300: "#85f0e8",
          400: "#57e9df",
          500: "#2fe2d7",
          600: "#17a2b8",
          700: "#0d8b8d",
          800: "#0a6f71",
          900: "#08595a",
        },
        // Accent Colors
        yellow: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#ffc820",
          600: "#e5b000",
          700: "#b8860b",
          800: "#92400e",
          900: "#78350f",
        },
        cream: "#fafaf7",
        charcoal: "#1a1a1a",
        whatsapp: "#25d366",
        // Base Grays
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Status Colors
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        red: {
          50: "#fef2f2",
          500: "#ef4444",
          600: "#dc2626",
        },
        amber: {
          50: "#fffbeb",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["2.5rem", { lineHeight: "1.15", fontWeight: "600" }],
        "display-md": ["2rem", { lineHeight: "1.15", fontWeight: "600" }],
        "display-sm": ["1.5rem", { lineHeight: "1.2", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
        eyebrow: ["0.75rem", { lineHeight: "1", fontWeight: "600", letterSpacing: "0.15em" }],
        button: ["0.95rem", { lineHeight: "1", fontWeight: "600", letterSpacing: "0.025em" }],
      },
      borderRadius: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      spacing: {
        "13": "3.25rem",
      },
      // Premium Shadow System - NEW
      boxShadow: {
        "xs-soft": "0 2px 8px rgba(11,20,55,0.08)",
        soft: "0 4px 16px rgba(11,20,55,0.12)",
        elevated: "0 8px 24px rgba(11,20,55,0.16)",
        premium: "0 20px 40px rgba(11,20,55,0.2)",
        glow: "0 0 20px rgba(209,17,140,0.15)",
        "glow-teal": "0 0 20px rgba(23,162,184,0.15)",
        hover: "0 12px 32px rgba(11,20,55,0.2)",
        card: "0 1px 3px rgba(11,20,55,0.08)",
        "card-hover": "0 12px 32px rgba(11,20,55,0.12)",
        cta: "0 4px 12px rgba(11,20,55,0.15)",
      },
      // Premium Gradients - NEW
      backgroundImage: {
        "gradient-navy-dark": "linear-gradient(135deg, #0b1437 0%, #1a2452 100%)",
        "gradient-premium": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
        "gradient-magenta": "linear-gradient(135deg, #d1118c 0%, #f0a8d4 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4a574 0%, #e8bb8a 100%)",
        "gradient-success": "linear-gradient(90deg, #00d084 0%, #0fdb8a 100%)",
        "gradient-teal": "linear-gradient(135deg, #17a2b8 0%, #2fe2d7 100%)",
      },
      // Enhanced Backdrop Blur - NEW
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "20px",
        xl: "40px",
      },
      // Animation Presets - NEW
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      // Transition Timing Functions - NEW
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      screens: {
        xs: "320px",
        sm: "475px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;