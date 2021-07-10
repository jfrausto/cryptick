import React, { useContext } from 'react';
import { VStack, Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';
import { PriceArrows } from '../PriceArrows';

export const  PriceDisplay:React.FC = () => {
  const { context } = useContext(CryptoContext);
  

  return (
    <>
      <VStack>
        {
        context.price && !context.isSwiping ? 
        <PriceArrows/> :
        <SkeletonCircle size="9"/>
        }
      </VStack>
      {/* onChange? something to change the state..... */}
      <Box fontFamily="monospace" pt={1} fontSize="3xl" ml="0.33rem" >
        {context.price && !context.isSwiping ? `${Number(context.price).toLocaleString(undefined, 
          {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
          }
          )}` : <Skeleton minW="230px" height="51px" mb="10px" borderRadius="2xl" />}
      </Box>
    </>
  )
};