import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head"
import { useState, useMemo, useReducer } from 'react';
import { ContextReducer } from '../components/helpers/reducer';
import theme from '../theme';
import { AppProps } from 'next/app';
import { CryptoContext, startInApp } from '../components/CryptoContext';

function MyApp({ Component, pageProps }: AppProps) {
  // const [context, setContext] = useState(startInApp);
  const [context, dispatch] = useReducer(ContextReducer, startInApp);
  
  const providerValue = useMemo(() => ({ context, dispatch}), [context, dispatch])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
          <title>Cryptick</title>
          <meta name="keywords" content="Crypto-Watcher" ></meta>
      </Head>
      

      <CryptoContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </CryptoContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp;
