import Typography from 'typography';

const typography = new Typography({
  title: 'Gatsby Starter Portfolio Bella',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Montserrat',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Lato',
    styles: [
      '400',
      '700',
    ],
    },
    {
      name: 'Montserrat',
      styles: ['400'],
    },
  ],
  scaleRatio: 3.998,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
