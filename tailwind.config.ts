import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: {
        400: "#212121",
        600: "#101010",
        900: "#000000",
      },
      white: "#ffffff",
      gray: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
      red: " #FF0000",
      pink: {
        200: "#ffeff4",
        600: "#8C5C6A",
      },
      indigo: {
        50: "#E8EAF6",
      },
      deeppurple: {
        50: "#EDE7F6",
        A400: "#651FFF",
        600: "#311B92",
        A700: "#6200EA",
      },
      purple: {
        50: "#F3E5F5",
        100: "#E1BEE7",
        A100: "#EA80FC",
        A400: "#D500F9",
        A700: "#AA00FF",
      },
      lightblue: {
        50: "#E1F5FE",
        A400: "#00B0FF",
      },
      yellow: {
        200: "#fff4d4",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionDelay: {
        "0": "0ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
        "1600": "1600ms",
        "2000": "2000ms",
      },
      animation: {
        fadeup: "fadeup 1s ease forwards",
      },
      keyframes: {
        fadeup: {
          "0%": {
            transform: "translateY(3rem)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "main-bg-horizontal":
          "url('/assets/main-bg-horizontal.webp')",
        "main-bg-vertical":
          "linear-gradient(to bottom,rgba(0,0,0,0),rgba(255,255,255,100)),url('/assets/main-bg-vertical.webp')",
        "clouds":
          "linear-gradient(to bottom,rgba(0,0,0,0),rgba(255,255,255,100)),url('/assets/clouds.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "animation-delay": (value: any) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
export default config;
