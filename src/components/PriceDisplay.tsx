import React from 'react';
import { Text } from '@chakra-ui/react';

interface PriceDisplayProps {
  price: number
};

export const  PriceDisplay:React.FC<PriceDisplayProps> = ({ price }) => {
  return (
    <>
      {/* icons can go here to represent price changes */}
      <Text fontStyle="italic" fontSize="2xl">
        {}
        {price ? `$${Number(price).toFixed(2)}` : "connecting..."}
      </Text>
    </>
  )
};