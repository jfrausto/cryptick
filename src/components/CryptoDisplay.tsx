import React, { useState, useEffect, useContext} from 'react';
import { wrap } from 'popmotion';
import { CryptoNameHeading } from '../components/CryptoNameHeading';
import { CryptoContext, DispatchContext, PageContext } from '../components/CryptoContext';
import { SWIPE_THRU, SET_CURRENT_PAIR } from '../components/helpers/reducer/actions';
import { motion } from 'framer-motion';
import {
  Center,
  VStack,
  Heading,
  Skeleton,
} from '@chakra-ui/react';
import { TickerDisplay} from "../components/TickerDisplay";
import Img from "../public/logo.svg";




export const CryptoDisplay = () => {

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
      y:0,
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





  const { context } = useContext(CryptoContext);
  const { pageContext } = useContext(PageContext);
  const { dispatch } = useContext(DispatchContext);

  const [[page, direction], setPage] = useState([0, 0]);
  const tickerIndex = wrap(0, pageContext.allUserPairs.length, page);
  const paginate = ( newDirection: number) => {
    // setPage( (currentPage ) => {
    //  return [currentPage[0] + newDirection, newDirection]
    // }
    //   );
    setPage([page+newDirection, newDirection]);
  };

  useEffect(() => {
    // effect
    console.log("page changed side effect");
    console.log(`tickerIndex: ${tickerIndex}: PRE DISPATCH`);
    console.table(context);
    dispatch({ type: SWIPE_THRU, payload: [pageContext.allUserPairs[tickerIndex]]});
    console.table(context);
    return () => {
      // cleanup
    }
  }, [page]);

  return (
    <>
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
              }}
          >
            <VStack mt="8rem" spacing={8}>
              <CryptoNameHeading/>
              <motion.img 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5 }}
                src={Img} 
                height="100px" 
                width="100px"
              />
              <TickerDisplay/>
            </VStack>
        </motion.div>
    </>
  )
}