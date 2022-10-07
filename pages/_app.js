import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/2dd1def13d.js" crossorigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
