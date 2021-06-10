import React, {useContext, useState} from 'react';
import { wrap } from 'popmotion';
import {
  Center,
  VStack,
  Heading,
  Skeleton,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { TickerDisplay} from "../components/TickerDisplay";
import Img from "../public/logo.svg";
import { CryptoContext, DispatchContext } from '../components/CryptoContext';
import { SWIPE_THRU } from '../components/helpers/reducer/actions';


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const CryptoDashboard :React.FC = () => {

  const { context } = useContext(CryptoContext);
  const { dispatch } = useContext(DispatchContext);
  const [[page, direction], setPage] = useState([0, 0]);
  const tickerIndex = wrap(0, context.allUserPairs.length, page);
  const paginate = ( newDirection: number) => {
    setPage( (currentPage ) => {
     return [currentPage[0] + newDirection, newDirection]
    }
      );
  };

  return (
    <Container 
      height="100vh" 
      p={2}
    >
      <VStack mt="8rem" spacing={8}>
        {/* ! displays current pair in view */}
        <Heading as={Center}>
          {
            context.price ? 
            context.userCurrentPair[0] :
            <Skeleton minW="220px" height="65px" />
          }
        </Heading>
        <motion.img 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={Img} 
          height="100px" 
          width="100px"
        />
          <AnimatePresence initial={false} >
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={ (e, {offset, velocity}) => {
                const swipe = swipePower(offset.x, velocity.x);
                if(swipe < -swipeConfidenceThreshold){
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold){
                  paginate(-1);
                }
                dispatch({ type: SWIPE_THRU, payload: [context.allUserPairs[tickerIndex]]});
               }}
            >
              <TickerDisplay/>

            </motion.div>
          </AnimatePresence>
        
      </VStack>
      <DarkModeSwitch />
    </Container>
  )
}

export default CryptoDashboard;