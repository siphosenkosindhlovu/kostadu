export default {
  breakpoints: ['768px', '1024px', '1200px', '1440px', '1640px'],
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
    '75px',
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
    fadedBlue: 'rgba(51, 89, 207, 0.6)',
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
    heading_3: {
      fontFamily: 'heading',
      fontSize: 4,
    },
    heading_2_alt: {
      fontFamily: 'body',
      fontSize: [6, null, null, 8],
    },
    subheading: {
      fontFamily: 'body',
      fontSize: 4,
      mb: [5, null, 8],
    },
    subheadingLight: {
      mb: [5, null, 8],
      fontFamily: 'body',
      fontSize: 4,
      color: 'dark',
      opacity: 0.3,
    },
    body: {
      lineHeight: 1.5,
      fontSize: [2, null, null, null, 4],
    },
  },
  buttons: {
    base: {
      color: 'dark',
      border: 'none',
    },
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
    navlink: {
      bg: 'transparent',
      color: 'dark',
      p: 0,
      fontFamily: 'body',
      textTransform: 'uppercase',
      position: 'relative',
      '&:after': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        bottom: -1,
        width: '0%',
        height: '4px',
        bg: 'blue',
        transition: 'all 0.3s',
      },
      '&:hover': {
        '&:after': {
          width: '100%',
        },
      },
    },
    interaction: {
      boxShadow: '10px 15px 20px #00000029',
      border: 'none',
      borderRadius: '999px',
      color: 'blue',
      '&:disabled' :{
        color: 'gray'
      }
    },
  },
  forms: {
    input: {
      fontFamily: 'body',
      color: 'white',
      bg: 'fadedBlue',
      fontSize: [2, null, null, null, 4],
      px: [4, null, null, null, 6],
      py: 3,
      border: 'none',
      borderRadius: 0,
      mb: [4, null, null, null, 6],
    },
    textarea: {
      fontFamily: 'body',
      color: 'white',
      bg: 'fadedBlue',
      fontSize: [2, null, null, null, 4],
      px: [4, null, null, null, 6],
      py: 3,
      border: 'none',
      borderRadius: 0,
      mb: [4, null, null, null, 6],
    },
  },
  variants: {
    card: {
      p: 6,
      bg: 'white',
    },
    grid: {
      display: [null, 'grid'],
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridGap: 2,
    },
    narrow: {
      maxWidth: ['100%', '80%'],
    },
    navlink: {
      fontSize: 4,
    },
    link: {
      fontSize: 2,
      color: 'dark',
      textDecoration: 'none',
    },
  },
  styles: {},
};
