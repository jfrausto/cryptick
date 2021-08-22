import React, { useState, useEffect, useContext} from 'react';
import { wrap } from 'popmotion';
import { DispatchContext, PageContext } from '../CryptoContext';
import { ON_DRAG, SWIPE_THRU } from '../helpers/reducer/actions';
import { motion, PanInfo } from 'framer-motion';
import { VStack } from '@chakra-ui/react';
import TickerDisplay from "../TickerDisplay";
import CryptoNameHeading from '../CryptoNameHeading';
import ChartDisplay from '../ChartDisplay';
import CryptoDashIcon from '../CryptoDashIcon';
import NavigationCircles from '../NavigationCircles';
import { variants, swipeConfidenceThreshold, swipePower } from './animate';

const CryptoDisplay: React.FC = () => {

  const { pageContext } = useContext(PageContext);
  const { dispatch } = useContext(DispatchContext);
  const [[page, direction], setPage] = useState([0, 0]);

  // swiping changes the page
  useEffect(() => {
    const tickerIndex = isNaN(wrap(0, pageContext.allUserPairs.length, page)) ? 
                        0 : wrap(0, pageContext.allUserPairs.length, page)
    if(pageContext.allUserPairs[0]===undefined){
      return;
    }
    dispatch({ type: SWIPE_THRU, payload: [pageContext.allUserPairs[tickerIndex]]});
  }, [page]);

  const paginate = ( newDirection: number) => {
    setPage([page+newDirection, newDirection]);
  };

  // fires when drag starts
  const dragOver = (e: React.DragEvent<HTMLDivElement>) : void => {
    e.preventDefault();
    dispatch({type: ON_DRAG, isSwiping: true});
  }

  // fires when drag ends, controls signal to switch page
  const dragEnd = (e: MouseEvent | TouchEvent | PointerEvent , info: PanInfo): void => {
    e.preventDefault();
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if(swipe < -swipeConfidenceThreshold){
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold){
      paginate(-1);
    }
  }

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
          onDragOver={dragOver}
          onDragEnd={dragEnd}
        >
          <VStack 
            mt="5vh"
            spacing={3}
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