import React, {useContext} from 'react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CryptoContext } from '../CryptoContext';

const PriceArrows:React.FC = () => {
  
  const {context} = useContext(CryptoContext);
  const MotionTriangleUp = motion(TriangleUpIcon);
  const MotionTriangleDown = motion(TriangleDownIcon);

  return (
    <>
      {context.isGoingUp ?  
        <MotionTriangleUp 
            color="rgb(0,180,0)"
            animate={{ 
              y: 3,
              color: useColorModeValue("rgb(0,0,0)", "rgb(255,255,255)")
            }}
            transition={{ 
              from: -1,
              color: "rgb(0,180,0)",
              ease: "easeOut",
              type: "tween",
              duration: 0.9,
              }}
          /> : <TriangleUpIcon mt="5px"/> }
        {context.isGoingUp?
          <TriangleDownIcon /> : 
          <MotionTriangleDown
            color="rgb(180,0,0)"
            animate={{ 
              y: -2,
              color: useColorModeValue("rgb(0,0,0)", "rgb(255,255,255)")
            }}
            transition={{ 
              from: 2,
              color: "rgb(180,0,0)",
              ease: "easeOut",
              type: "tween",
              duration: 0.9
            }}
          />
        }
    </>
  )
}

export default PriceArrows;