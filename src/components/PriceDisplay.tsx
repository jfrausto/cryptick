import React,  { useEffect, useState } from 'react';
import { Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

interface PriceDisplayProps {
  price: number
};

export const  PriceDisplay:React.FC<PriceDisplayProps> = ({ price }) => {

  // useEffect(() => {
  //   // effect
 
  //   return () => {
  //     // cleanup
  //   }
  // }, [price]);
  const MotionTriangleUp = motion(TriangleUpIcon);
  // const MotionTriangleDown = motion(TriangleDownIcon);
  // const [colorUp, setColorUp] = useState("white");
  return (
    <>
      <VStack>
          <MotionTriangleUp 
            color="rgb(0,180,0)"
            animate={{ 
              y: 3,
              color: useColorModeValue("rgb(0,0,0)", "rgb(255,255,255)")
            }}
            transition={{ 
              from: 0,
              color: "rgb(0,180,0)",
              duration: 0.2,
              }}
          />
          <TriangleDownIcon />
      </VStack>
      
      {/* onChange? something to change the state..... */}
      <Text fontStyle="italic" fontSize="3xl" ml="0.33rem" >
        {price ? `$${Number(price).toFixed(2)}` : "connecting..."}
      </Text>
    </>
  )
};