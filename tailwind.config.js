/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "system-ui", "sans-serif"],
      averia: ['"Averia Sans Libre"', "sans-serif"],
      grotesk: ['"Space Grotesk"', "sans-serif"],
    },
    extend: {
      /* 🎨 Colors - Mapped to base.css variables */
      colors: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          xl: "calc(var(--radius) + 4px)",
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      backgroundImage: {
        sfGradient: "linear-gradient(235deg, #0A347B, #135FE1)",
        none: "none",
      },

      /* 📏 Spacing */
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        navbar: "var(--navbar-height, 70px)",
      },

      /* 🔤 Typography Adjusted for Websites */
      fontSize: {
        "body-small": ["clamp(0.875rem, 1vw + 0.5rem, 1rem)"], // 14px–16px
        "body-medium": ["clamp(1rem, 1.1vw + 0.6rem, 1.125rem)"], // 16px–18px
        "body-large": ["clamp(1.125rem, 1.2vw + 0.7rem, 1.25rem)"], // 18px–20px
        "label-small": ["clamp(0.8125rem, 0.9vw + 0.5rem, 0.875rem)"], // 13px–14px
        "label-medium": ["clamp(0.875rem, 1vw + 0.5rem, 1rem)"], // 14px–16px
        "label-large": ["clamp(1rem, 1.1vw + 0.6rem, 1.125rem)"], // 16px–18px
        "headline-small": ["clamp(1.5rem, 1.5vw + 1rem, 2rem)"], // 24px–32px
        "headline-medium": ["clamp(2rem, 2vw + 1.2rem, 2.5rem)"], // 32px–40px
        "headline-large": ["clamp(2.5rem, 2.5vw + 1.5rem, 3rem)"], // 40px–48px
        "title-small": ["clamp(1.25rem, 1.3vw + 0.8rem, 1.5rem)"], // 20px–24px
        "title-medium": ["clamp(1.5rem, 1.5vw + 1rem, 1.875rem)"], // 24px–30px
        "title-large": ["clamp(1.875rem, 1.8vw + 1.2rem, 2.25rem)"], // 30px–36px
        "nav-txt": [
          "clamp(1rem, 1.1vw + 0.6rem, 1.25rem)",
          { lineHeight: "1.5" },
          { "font-weight": "600" },
        ], // 16px–20px
      },

      fontWeight: {
        400: "400", // Normal
        500: "500", // Medium
        600: "600", // Semi-bold
        700: "700", // Bold
      },

      letterSpacing: {
        tight: "-0.04125rem", // -0.5px
      },

      /* 🎬 Transitions */
      transitionProperty: {
        sizing: "width, height, max-width, max-height",
        "color-shadow": "color, background-color, box-shadow",
      },

      /* ✨ Shadows */
      boxShadow: {
        soft: "0 2px 4px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 6px rgba(0, 0, 0, 0.15)",
        hard: "0 10px 15px rgba(0, 0, 0, 0.2)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
      },

      /* 🏃‍♂️ Animations */
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-primeui"),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        /* 📌 Layout Helpers */
        ".main": {
          position: "relative",
          "min-height": "100dvh",
          "min-width": "80dvw",
          "overflow-x": "hidden",
        },
        ".container": {
          "@apply mx-auto px-4 sm:px-6 lg:px-8": {},
          "max-width": "var(--max-width, 80rem)",
          width: "100%",
        },

        /* 🖼 Card Styles */
        ".card": { "@apply bg-surface-100 dark:bg-surface-800": {} },
        ".card1": { "@apply bg-surface-200 dark:bg-surface-700 shadow-sm": {} },

        /* 🎨 Text Styles */
        ".text-color": { "@apply dark:text-sfTxtGrayDark text-sfTxtGray": {} },
        ".text-gray": { color: theme("colors.sfGrayDark") },
        // ".dark .text-gray": { color: theme("colors.sfTxtGrayDark") },

        /* 🌈 Gradients */
        ".sf-gradient": {
          background: "linear-gradient(to bottom, #135FE1, #0A347B)",
        },
        ".border-gradient": {
          borderImage: "linear-gradient(to right, #3B82F6, #9333EA) 1",
        },

        ".sf-gradient": {
          background: "linear-gradient(235deg, #0A347B,#135FE1)",
        },

        /* 📏 Centering */
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },

        /* ✨ Glassmorphism */
        ".glass-morphism": {
          background: "rgba(255, 255, 255, 0.1)",
          "backdrop-filter": "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },

        /* 🎭 Scrollbar */
        ".hide-scrollbar::-webkit-scrollbar": { display: "none" },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },

        /* 🕹 Buttons */
        ".btn": {
          "@apply px-4 py-2 rounded-lg text-sfWhite font-medium transition duration-300":
            {},
        },
        ".btn-primary": { "@apply btn bg-sfPrimary hover:bg-blue-700": {} },
        ".btn-secondary": { "@apply btn bg-sfGrayDark hover:bg-gray-800": {} },

        /* 🔤 Typography Classes */
        ".body-small": {
          "@apply text-body-small tracking-tight": {},
        },
        ".body-medium": {
          "@apply text-body-medium tracking-tight": {},
        },
        ".body-large": {
          "@apply text-body-large tracking-tight": {},
        },
        ".label-small": {
          "@apply text-label-small tracking-tight": {},
        },
        ".label-medium": {
          "@apply text-label-medium  tracking-tight": {},
        },
        ".label-large": {
          "@apply text-label-large  tracking-tight": {},
        },
        ".headline-small": {
          "@apply text-headline-small tracking-tight": {},
        },
        ".headline-medium": {
          "@apply text-headline-medium tracking-tight": {},
        },
        ".headline-large": {
          "@apply text-headline-large tracking-tight": {},
        },
        ".title-small": {
          "@apply text-title-small  tracking-tight": {},
        },
        ".title-medium": {
          "@apply text-title-medium tracking-tight": {},
        },
        ".title-large": {
          "@apply text-title-large font-700 tracking-tight": {},
        },
        ".nav-txt": {
          "@apply text-nav-txt font-500 tracking-tight": {}, // font-semibold is 600
        },
        /* Add placeholder utility */
        ".placeholder-sfGray::placeholder": {
          color: theme("colors.sfGray"),
          opacity: "0.8",
        },
        ".clickable-container": {
          cursor: "pointer",
          position: "relative",
          "user-select": "none",
          overflow: "hidden",
          "will-change": "transform, filter",
          transition: "transform 0.2s ease-out, filter 0.3s ease-out",
          ":focus-visible": {
            outline: "2px solid #ffffff80",
            "outline-offset": "2px",
          },
        },

        ".clickable-container::after": {
          content: "''",
          position: "absolute",
          inset: "0",
          "pointer-events": "none",
          "z-index": "1",
          "will-change": "opacity",
          transition: "opacity 0.3s ease-out",
          opacity: "1",
        },

        ".clickable-container:hover": {
          filter: "brightness(1.1)",
          transform: "scale(1.01)",
        },

        ".clickable-container:hover::after": {
          opacity: "0.8",
        },

        ".clickable-container:active": {
          transform: "scale(0.99)",
          filter: "brightness(0.95)",
          transition: "transform 0.1s ease-out, filter 0.1s ease-out",
        },

        ".clickable-container:active::after": {
          opacity: "1",
          background: "rgba(0, 0, 0, 0.02)",
        },

        // Optional: Disabled state for robustness
        ".clickable-container:disabled": {
          cursor: "not-allowed",
          filter: "grayscale(0.5) brightness(0.8)",
          opacity: "0.7",
          pointerEvents: "none",
        },
      });
    }),
  ],
};
