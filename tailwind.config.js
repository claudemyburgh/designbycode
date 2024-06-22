import defaultTheme from 'tailwindcss/defaultTheme';
import colors from "tailwindcss/colors";


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        "./storage/app/packages/*.{php,text,md}",
        './storage/framework/views/*.{php,text,md}',
        './resources/views/**/*.blade.php',
    ],
    darkMode: "class",
    safelist: ['.copy-button', '.language-header', '.fadeIn'],
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.fuchsia,
                tri: colors.rose,
                gray: colors.gray,
                shopify: {
                    light: "#8db849",
                    dark: "#5a863e",
                    gray: "#1a1919"
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require("@designbycode/tailwindcss-mask-image"),
        require("@designbycode/tailwindcss-conic-gradient"),
        require("@designbycode/tailwindcss-stripes"),
        require("@designbycode/tailwindcss-text-shadow"),
        require("@designbycode/tailwindcss-text-stroke"),
        require("@designbycode/tailwindcss-text-glitch"),
        require("@designbycode/tailwindcss-reflection"),
        require("tailwindcss-attributes"),

        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
