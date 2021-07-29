import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head"
import { useState, useMemo } from 'react';
import theme from '../theme';
import { AppProps } from 'next/app';
import {startPage, PageContext } from '../components/CryptoContext';
import {Container} from '../components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  // const [context, setContext] = useState(startInApp);
  // ! const [context, dispatch] = useReducer(ContextReducer, startInApp);
  // const [pageContext, setPageContext] = useState(startPage);
  // // const providerValue = useMemo(() => ({ context, dispatch}), [context, dispatch])

  // const providerValue = useMemo(() => ({ pageContext, setPageContext}), [pageContext, setPageContext])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
          <title>Cryptick</title>
          <meta name="keywords" content="Crypto-Watcher" ></meta>
      </Head>
      
      {/* <DispatchContext.Provider value={{ dispatch }}> */}
        {/* <CryptoContext.Provider value={{context}}> */}

            <Container
              p={1}
              height="100vh"
              // width="100%"
              overflowY="auto"
              // style={{ scrollbarWidth: "none" }}
              overflowX="hidden"
            >
                  <Component {...pageProps} />
            </Container>
        {/* </CryptoContext.Provider> */}
      {/* </DispatchContext.Provider> */}
    </ChakraProvider>
  )
}

export default MyApp;
