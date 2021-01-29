import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
theme.styles.root = {
  fontFamily: 'Futura, sans-serif'
}
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
