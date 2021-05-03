import React, {useEffect} from 'react';
import { Text } from '@chakra-ui/react';

interface PriceDisplayProps {
  price: number
};

export const  PriceDisplay:React.FC<PriceDisplayProps> = ({ price }) => {
  return (
    <>
      {/* icons can go here to represent price changes */}
      <Text fontStyle="italic">
        {price ? price : "connecting..."}
      </Text>
    </>
  )
};
