import { ChakraProvider } from '@chakra-ui/react';
import { useState, useMemo } from 'react';

import theme from '../theme';
import { AppProps } from 'next/app';
import { CryptoContext, startInApp } from '../components/CryptoContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [context, setContext] = useState(startInApp);
  
  const providerValue = useMemo(() => ({ context, setContext}), [context, setContext])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <CryptoContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </CryptoContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp;
