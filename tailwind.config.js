const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./templates/**/*.twig', './templates/**/*.html.twig'],
  darkMode: 'class', //false or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1280px',
      },
      colors: {
        genoa: {
          50: '#f1fcfb',
          100: '#cff8f3',
          200: '#9ff0e7',
          300: '#68e0d8',
          400: '#38c9c4',
          500: '#1fadaa',
          600: '#168b8a',
          700: '#166e6f',
          800: '#165859',
          900: '#17484a',
        },
      },
    },

    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: 'inherit',
          lineHeight: 'inherit',
          maxWidth: 'inherit',
          a: {
            transition: 'all 500ms',
            color: theme('colors.primary.DEFAULT'),
            '&:hover': {
              color: theme('colors.primary.darker'),
            },
            textDecoration: 'none',
          },
          strong: {
            color: 'inherit',
          },
        },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    require('daisyui'),
  ],
  important: false,
};
