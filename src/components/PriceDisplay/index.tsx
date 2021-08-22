import React, { useContext } from 'react';
import { VStack, Box, } from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';
import PriceArrows from '../PriceArrows';
import NumberScrollAnimate from '../NumberScrollAnimate';

export const  PriceDisplay:React.FC = () => {
  
  const { context } = useContext(CryptoContext);
  
  return (
    <>
      <VStack>
        <PriceArrows/>
      </VStack>
      <Box fontFamily="monospace" pt={1} fontSize="3xl" ml="0.33rem" >
        {context.price !== 0.00 && !context.isSwiping ? `${Number(context.price).toLocaleString(undefined, 
          {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
          }
          )}` : 
          <span>$<NumberScrollAnimate from={0} to={1000} /></span>
          }
      </Box>
    </>
  )
};