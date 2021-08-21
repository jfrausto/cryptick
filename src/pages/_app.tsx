import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head"
import theme from '../theme';
import { AppProps } from 'next/app';
import Container from '../components/Container';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
          <title>Cryptick</title>
          <meta name="keywords" content="Crypto-Watcher" ></meta>
      </Head>
            <Container>
                  <Component {...pageProps} />
            </Container>
    </ChakraProvider>
  )
}

export default MyApp;
