const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/**/*.{html,js}"],
    
    theme: {
      extend: {
        colors: {
            primary: {
                DEFAULT: '#3B82F6',
                light: '#93C5FD',
                dark: '#1D4ED8'
            },

            secondary: {
                DEFAULT: '#6F86D6',
                light: '#B3C4F1',
                dark: '#4B6A9B'
            }
        },

        animation:{
            'spin-slow': 'spin 3s linear infinite',
            'fade-in': 'fade-in 0.5s ease-out',
        },

        keyframes:{
            fadeIn: {
                '0%' : {opacity: '0'},
                '100%' : {opacity: '1'}
            }
        }
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        //require('./src/plugins/customerComponents'),
        function({addComponents, addVariant}){
            addComponents({
                '.btn' : {
                    '@apply p-[.5rem_1rem] rounded-md inline-flex items-center justify-center font-medium transition-colors cursor-pointer': {},
                    '&:disabled' : {
                        '@apply opacity-50 cursor-not-allowed': {},
                    }
                },

                '.btn-primary' : {
                    '@apply btn bg-primary text-white hover:bg-primary-dark': {},
                },

                '.btn-secondary' : {
                    '@apply btn bg-secondary text-white hover:bg-secondary-dark': {},
                }
            });

            addVariant('hocus', ['&:hover', '&:focus']);
        }
    ],
};