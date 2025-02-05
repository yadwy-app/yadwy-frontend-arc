const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Lexend",
      body: "Lexend",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary":"#8FB6B6",
        // Yadwy Colors
        "yadwy-green-100": "hsl(var(--yadwy-green-100))",
        "yadwy-green-200": "hsl(var(--yadwy-green-200))",
        "yadwy-green-300": "hsl(var(--yadwy-green-300))",
        "yadwy-green-400": "hsl(var(--yadwy-green-400))",
        "yadwy-green-500": "hsl(var(--yadwy-green-500))",
        "yadwy-green-600": "hsl(var(--yadwy-green-600))",
        "yadwy-green-700": "hsl(var(--yadwy-green-700))",
        "yadwy-green-800": "hsl(var(--yadwy-green-800))",
        "yadwy-green-900": "hsl(var(--yadwy-green-900))",

        "yadwy-neutral-50": "hsl(var(--yadwy-neutral-50))",
        "yadwy-neutral-100": "hsl(var(--yadwy-neutral-100))",
        "yadwy-neutral-200": "hsl(var(--yadwy-neutral-200))",
        "yadwy-neutral-300": "hsl(var(--yadwy-neutral-300))",
        "yadwy-neutral-400": "hsl(var(--yadwy-neutral-400))",
        "yadwy-neutral-500": "hsl(var(--yadwy-neutral-500))",
        "yadwy-neutral-600": "hsl(var(--yadwy-neutral-600))",
        "yadwy-neutral-700": "hsl(var(--yadwy-neutral-700))",
        "yadwy-neutral-800": "hsl(var(--yadwy-neutral-800))",
        "yadwy-neutral-900": "hsl(var(--yadwy-neutral-900))",
        "yadwy-neutral-950": "hsl(var(--yadwy-neutral-950))",

        // Tailwind Colors
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
