import React, { useContext, useEffect } from 'react';
import { Heading, Center, Skeleton } from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';


export const CryptoNameHeading = () => {
  
  const { context } = useContext(CryptoContext);

  useEffect(() => {
    // 
    console.log(`CryptoNameHeading: ${context.userCurrentPair[0]}`);
    return () => {
      // cleanup
      console.log(`cleaning up CryptoNameHeading: ${context.userCurrentPair[0]}`);
    }
  }, [context.userCurrentPair])

  return (
    <>
      {/* ! displays current pair in view */}
      <Heading as={Center}>
        {
          context.price ? 
          context.userCurrentPair[0] :
          <Skeleton minW="220px" height="65px" />
        }
      </Heading>
    </>
  )
}
