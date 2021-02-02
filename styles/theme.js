export default {
  breakpoints: ['768px', '1024px', '1400px'],
  fontSizes: [
    '14px',
    '15px',
    '16px',
    '18px',
    '20px',
    '22px',
    '25px',
    '30px',
    '35px',
    '50px',
    '70px',
    '100px',
  ],
  fonts: {
    body: 'Futura, sans-serif',
    heading: 'Chapaza, serif',
  },
  fontWeights: {
    body: 500,
    heading: 400,
  },
  colors: {
    blue: '#3359CF',
    altBlue: '#302EE6',
    lightBlue: '#3359CF26',
    darkBlue: '#142F82',
    purple: '#5E2CDB',
    dark: '#1D1D1B',
    light: '#E3E3E3',
    background: 'white',
  },
  background: 'white',
  space: [0, 5, 10, 15, 20, 25, 30, 35, 50, 75, 80, 100, 150],
  sizes: [52, 80],
  text: {
    display: { fontSize: [9, null, null, null, 8] },
    heading: {
      fontFamily: 'heading',
      fontSize: [8, null, null, 9],
    },
    heading_2: {
      fontFamily: 'heading',
      fontSize: [6, null, null, 8],
    },
    heading_2_alt: {
      fontFamily: 'body',
      fontSize: [6, null, null, 8],
    },
    subheading: {
      fontFamily: 'body',
      fontSize: 4,
    },
    body: {
      lineHeight: 1.5,
      fontSize: [2, null, 4],
    }
  },
  buttons: {
    primary: {
      height: '50px',
      bg: 'white',
      color: 'blue',
      borderRadius: '999px',
      borderColor: 'blue',
      borderWidth: '2px',
      borderStyle: 'solid',
      '&:hover': {
        color: 'white',
        bg: 'blue',
      },
    },
  },
  variants: {
    card: {
      p: 6
    },
    grid: {
      display: [null, 'grid'],
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridGap: 2,
    },
    narrow: {
      maxWidth: ['100%', '80%']
    },
    navlink: {
      fontSize: 4,
    }
  },
  styles: {},
};
