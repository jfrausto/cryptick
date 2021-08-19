import React, { useContext } from 'react';
import { Heading, useColorMode } from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';
import { colorSubtext } from './colors';

const CryptoNameHeading: React.FC = () => {
  
  const { context } = useContext(CryptoContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading>
          {context.userCurrentPair[0].tickerName}
      </Heading>
      <Heading
        size="sm"
        color={colorSubtext[colorMode]}
      >
          {context.userCurrentPair[0].fullName}
      </Heading>
    </>
  )
}

export default CryptoNameHeading
