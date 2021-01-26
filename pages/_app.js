import '../styles/globals.css'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
