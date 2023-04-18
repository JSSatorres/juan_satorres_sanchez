/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jt',
  theme: {
    extend: {
      colors: {
        // azul oscuro
        primary: '#170B33',
        // azul oscuro
        secondary: '#170B33',
        // blanco texto
        contrast1: '#FFFFFF',
        // negro texto
        contrast2: '#000000',
        // amarillo texto hover
        hovertext: '#ECCD6A',
        // amarillo texto seleccionado
        activetext: '#E5BE01',
        // azul fondo menu movil
        'deep-blue': '#000026',
        blue: '#010026',
        red: '#27496D',
        yellow: '#FDCC49',
        purple: '#5F28E0',
        grey: '#ededed',
        green: '#18DB32',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
        bluelight: '#DB184C',
        pink: '#142850',
        darker: '#27496D',
        dark: '#27496D',
        color: '#00909E',
        light: '#F7EFE5',
        lighter: '#FFFBF5',

      },
      fontSize: {
        base: '16px',
      },
      lineHeight: {
        tight: 1.25,
      },
      fontWeight: {
        bold: 700,
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(81.66deg, #6d4b27 7.21%, #27496d 45.05%, #27386d 78.07%)',
        'gradient-button':
          'linear-gradient(81.66deg, #170B33 37.21%,  #5F28E0 78.07%)',
        'gradient-invert':
          'linear-gradient(81.66deg, #5F28E0 37.21%,   78.07% #170B33)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      // xs: '480px',
      // ss: '620px',
      sm: '640px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [
    plugin(({
      addBase, addComponents, addUtilities, theme,
    }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
      })
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
      })
    }),
  ],
}
