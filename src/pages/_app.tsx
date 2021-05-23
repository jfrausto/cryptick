import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head"
import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
          <title>Cryptick</title>
          <meta name="keywords" content="Crypto-Watcher" ></meta>
      </Head>
      <Component {...pageProps} />

    </ChakraProvider>
  )
}

export default MyApp
