import React, { useContext, useEffect } from 'react';
import { Heading, Center, Skeleton } from '@chakra-ui/react';
import { CryptoContext, DispatchContext } from '../CryptoContext';
import { ON_DRAG } from '../helpers/reducer/actions';


export const CryptoNameHeading = () => {
  
  const { context } = useContext(CryptoContext);
  const {dispatch} = useContext(DispatchContext);

  useEffect(() => {
    // 
    console.log(`CryptoNameHeading: ${context.userCurrentPair[0]}`);
    return () => {
      // cleanup
      console.log(`cleaning up CryptoNameHeading: ${context.userCurrentPair[0]}`);
      dispatch({type:ON_DRAG, isSwiping: true});
    }
  }, [context.userCurrentPair])

  return (
    <>
      {/* ! displays current pair in view */}
      <Heading as={Center}>
        {
          context.price && !context.isSwiping ? 
          context.userCurrentPair[0].tickerName :
          <Skeleton minW="220px" height="65px" />
        }
      </Heading>
      <Heading
        size="sm"
        marginBottom="10"
      >
        {
          context.price && !context.isSwiping ? 
          context.userCurrentPair[0].fullName :
          <Skeleton minW="150px" height="55px" />
        }
      </Heading>
    </>
  )
}
