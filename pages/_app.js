import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
    appId='4bkrUcrLCCxplHEtIWpMndGK0YhDW2bMDEteHXKZ'
    serverUrl='https://dvis12ipv3jt.usemoralis.com:2053/server'
  >
    <Component {...pageProps} />
  </MoralisProvider>)
}

export default MyApp
