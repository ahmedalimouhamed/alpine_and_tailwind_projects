// src/plugins/customerComponents.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
    '.btn-primary': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
    '.btn-secondary': {
      backgroundColor: '#7f8c8d',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#6c757d',
      },
    },
  });
});
