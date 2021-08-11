import React, { useContext, useEffect } from 'react';
import { Heading, Center, Skeleton, useColorMode } from '@chakra-ui/react';
import { CryptoContext, DispatchContext } from '../CryptoContext';
import { ON_DRAG } from '../helpers/reducer/actions';
import { colorSubtext } from './colors';


const CryptoNameHeading = () => {
  
  const { context } = useContext(CryptoContext);
  const {dispatch} = useContext(DispatchContext);
  const { colorMode } = useColorMode();

  useEffect(() => {
    // 
    console.log(`CryptoNameHeading: ${context.userCurrentPair[0]}`);
    return () => {
      // cleanup
      console.log(`cleaning up CryptoNameHeading: ${context.userCurrentPair[0]}`);
      dispatch({type:ON_DRAG, isSwiping: true});
    }
  }, [context.userCurrentPair]);

  return (
    <>
      {/* ! displays current pair in view */}
      <Heading as={Center}>
        
          {/* context.price && !context.isSwiping ?  */}
          {context.userCurrentPair[0].tickerName}
          {/* <Skeleton minW="220px" height="58px" borderRadius="2xl" /> */}
        
      </Heading>
      <Heading
        size="sm"
        color={colorSubtext[colorMode]}
      >
        
          {/* context.price && !context.isSwiping ?  */}
          {context.userCurrentPair[0].fullName}
          {/* <Skeleton minW="150px" height="24px" borderRadius="2xl" /> */}
        
      </Heading>
    </>
  )
}

export default CryptoNameHeading
