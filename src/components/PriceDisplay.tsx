import React from 'react';
import { Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

interface PriceDisplayProps {
  price: number,
  isGoingUp: boolean
};

export const  PriceDisplay:React.FC<PriceDisplayProps> = ({ price, isGoingUp }) => {

  const MotionTriangleUp = motion(TriangleUpIcon);
  const MotionTriangleDown = motion(TriangleDownIcon);
  // console.log(isGoingUp);
  return (
    <>
      <VStack>
        {isGoingUp ?  
        <MotionTriangleUp 
            color="rgb(0,180,0)"
            animate={{ 
              y: 3,
              color: useColorModeValue("rgb(0,0,0)", "rgb(255,255,255)")
            }}
            to={{  }}
            transition={{ 
              from: 0,
              color: "rgb(0,180,0)",
              ease: "easeOut",
              type: "tween",
              duration: 0.9,
              }}
          /> : <TriangleUpIcon mt="2px"/> }
        {isGoingUp?
          <TriangleDownIcon mb="2px"/> : 
          <MotionTriangleDown
            color="rgb(180,0,0)"
            animate={{ 
              y: 0,
              color: useColorModeValue("rgb(0,0,0)", "rgb(255,255,255)")
            }}
            transition={{ 
              from: 3,
              color: "rgb(180,0,0)",
              ease: "easeOut",
              duration: 0.9
            }}
          />
         }
      </VStack>
      {/* onChange? something to change the state..... */}
      <Text fontFamily="monospace" pt={1} fontSize="3xl" ml="0.33rem" >
        {price ? `${Number(price).toLocaleString(undefined, 
          {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }
          )}` : "connecting..."}
      </Text>
    </>
  )
};