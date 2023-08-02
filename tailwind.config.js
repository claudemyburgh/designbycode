const starship = {
  DEFAULT: "#CBEF59",
  50: "#FFFFFF",
  100: "#FAFDEE",
  200: "#EEFAC9",
  300: "#E2F6A3",
  400: "#D7F37E",
  500: "#CBEF59",
  600: "#BBEA26",
  700: "#9AC513",
  800: "#72920E",
  900: "#4A5E09",
  950: "#364507",
}

const purple = {
  DEFAULT: "#726BDB",
  50: "#FFFFFF",
  100: "#EFEEFB",
  200: "#D0CDF3",
  300: "#B1ADEB",
  400: "#918CE3",
  500: "#726BDB",
  600: "#473ED0",
  700: "#322AAC",
  800: "#251F7F",
  900: "#181452",
  950: "#110E3B",
}

const gray = {
  DEFAULT: "#333333",
  50: "#CCCCCC",
  100: "#C2C2C2",
  200: "#ADADAD",
  300: "#999999",
  400: "#858585",
  500: "#707070",
  600: "#5C5C5C",
  700: "#474747",
  800: "#333333",
  900: "#171717",
  950: "#090909",
}

const studio = {
  DEFAULT: "#7A47A9",
  50: "#D5C2E5",
  100: "#CAB4DF",
  200: "#B697D3",
  300: "#A27AC7",
  400: "#8E5EBB",
  500: "#7A47A9",
  600: "#5D3681",
  700: "#41265A",
  800: "#241532",
  900: "#08050B",
  950: "#000000",
}

const mandy = {
  DEFAULT: "#EC5872",
  50: "#FFFDFD",
  100: "#FDEBEE",
  200: "#F9C6CF",
  300: "#F4A1B0",
  400: "#F07D91",
  500: "#EC5872",
  600: "#E62647",
  700: "#BE1633",
  800: "#8C1026",
  900: "#590A18",
  950: "#400711",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-rozha)"],
        sans: ["var(--font-questrial)"],
      },
      colors: {
        primary: starship,
        secondary: purple,
        tri: mandy,
        alt: "#83eff2",
        alt2: "#9df6da",
        alt3: "#d5f6fd",
        gray,
      },
      boxShadow: {
        large: `8px 8px 0 #333333`,
        large2: `12px 12px 0 #333333`,
        small: `4px 4px 0 #333333`,
        xsmall: `3px 3px 0 #333333`,
        small2: `6px 6px 0 #333333`,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries"), require("tailwindcss-image-mask")],
}
