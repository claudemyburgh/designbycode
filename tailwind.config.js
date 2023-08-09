import {colors} from "./designbycode.config"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.{svg,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        primary: colors.electricLime,
        secondary: colors.dodgerBlue,
        gray: colors.codGray,
      },
      backgroundImage: {
        pattern: "url(../public/pattern.svg)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@designbycode/tailwindcss-stripes"),
    require("@designbycode/tailwindcss-mask-image"),
    require("@designbycode/tailwindcss-text-stroke"),
    require("@designbycode/tailwindcss-text-shadow")({
      experimental: true,
    }),
  ],
}
