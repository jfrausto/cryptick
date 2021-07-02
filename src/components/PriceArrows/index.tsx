import React, {useContext} from 'react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CryptoContext } from '../CryptoContext';


export const PriceArrows:React.FC = () => {
  
  const {context} = useContext(CryptoContext);
  const MotionTriangleUp = motion(TriangleUpIcon);
  const MotionTriangleDown = motion(TriangleDownIcon);
  // console.log(isGoingUp);

  return (
    <>
      {context.isGoingUp ?  
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
        {context.isGoingUp?
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
    </>
  )
}
