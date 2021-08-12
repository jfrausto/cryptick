import React, { useState, useEffect, useContext} from 'react';
import { wrap } from 'popmotion';
import { CryptoContext, DispatchContext, PageContext } from '../CryptoContext';
import { ON_DRAG, SWIPE_THRU } from '../helpers/reducer/actions';
import { motion } from 'framer-motion';
import {
  HStack,
  VStack,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import TickerDisplay from "../TickerDisplay";
import CryptoNameHeading from '../CryptoNameHeading';
import SwipeIndexCircle from '../SwipeIndexCircle';
import ChartDisplay from '../ChartDisplay';
import CryptoDashIcon from '../CryptoDashIcon';
import NavigationCircles from '../NavigationCircles';
import { variants, swipeConfidenceThreshold, swipePower } from './animate';

const CryptoDisplay = () => {

  const { pageContext } = useContext(PageContext);
  const { dispatch } = useContext(DispatchContext);
  const { context } = useContext(CryptoContext);
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const tickerIndex = isNaN(wrap(0, pageContext.allUserPairs.length, page)) ? 0 : wrap(0, pageContext.allUserPairs.length, page)
    if(pageContext.allUserPairs[0]===undefined){
      return;
    }
    dispatch({ type: SWIPE_THRU, payload: [pageContext.allUserPairs[tickerIndex]]});
    // return () => {
    //   // cleanup
    // }
  }, [page]);

  const paginate = ( newDirection: number) => {
    setPage([page+newDirection, newDirection]);
  };

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
          onDragOver={(e) => {
            dispatch({type: ON_DRAG, isSwiping: true});
          }}
          onDragEnd={ (e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x);
            if(swipe < -swipeConfidenceThreshold){
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold){
              paginate(-1);
            }
          }}
        >
          <VStack 
            mt="5vh"
            spacing={2}
            _hover={{ 
              cursor: "grab"
            }}
          >
            <CryptoNameHeading/>
            <CryptoDashIcon />
            <TickerDisplay/>
            <ChartDisplay/>
          </VStack>
        </motion.div>
        
        <NavigationCircles />

    </>
  )
}

export default CryptoDisplay;