const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#9CA3AF',
                dark: '#1F2937'
            },

            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },

            spacing: {
                '128': '32rem'
            }
        }
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}