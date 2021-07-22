import React, { useState, useEffect, useContext, useRef} from 'react';
import { wrap } from 'popmotion';
import { CryptoNameHeading } from '../CryptoNameHeading';
import { CryptoContext, DispatchContext, PageContext } from '../CryptoContext';
import { ON_DRAG, SWIPE_THRU, SET_CURRENT_PAIR } from '../helpers/reducer/actions';
import { motion } from 'framer-motion';
import {
  HStack,
  VStack,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { TickerDisplay} from "../TickerDisplay";
// import Img from "../../public/logo.svg";
import SwipeIndexCircle from '../SwipeIndexCircle';
import ChartDisplay from '../ChartDisplay';
import CryptoDashIcon from '../CryptoDashIcon';


export const CryptoDisplay = () => {

  const { pageContext } = useContext(PageContext);
  const [[page, direction], setPage] = useState([0, 0]);
  const { dispatch } = useContext(DispatchContext);
  const { context } = useContext(CryptoContext);
  // const tickerIndexRef = useRef(wrap(0, pageContext.allUserPairs.length, page));
  
  // useEffect(() => {
    
  //   return () => {
  //   console.log("about to dispatch and set current pair...");
  //   console.table(pageContext.allUserPairs);
  //   dispatch({
  //     type: SET_CURRENT_PAIR,
  //     payload: [JSON.parse(pageContext.allUserPairs[0])]
  //   });
  //   }
  // }, []);

  useEffect(() => {
    // effect
    console.log("page changed side effect");
    const tickerIndex = isNaN(wrap(0, pageContext.allUserPairs.length, page)) ? 0 : wrap(0, pageContext.allUserPairs.length, page)
    console.log(`tickerIndex: ${tickerIndex}: PRE DISPATCH`);
    console.table(context);
    // if (isNaN(tickerIndexRef.current)){
    //   console.log("its NAN!!!");
    //   return;
    // }
    // console.table(pageContext.allUserPairs);
    if(pageContext.allUserPairs[0]===undefined){
      console.log("pagecontext undefined~~~~~~~~~~");
      return;
    }
    console.log("made if after the undefined check: cryptoDisplay");
    dispatch({ type: SWIPE_THRU, payload: [JSON.parse(pageContext.allUserPairs[tickerIndex])]});
    console.table(context);
    return () => {
      // cleanup
    }
  }, [page]);


  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      // y:0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = ( newDirection: number) => {
    // setPage( (currentPage ) => {
    //  return [currentPage[0] + newDirection, newDirection]
    // }
    //   );
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
            <VStack pt="10vh" spacing={2}
              _hover={{ 
                cursor: "grab"
              }}
            >
              <CryptoNameHeading
              />
              {/* <motion.img 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5 }}
                src={Img} 
                height="100px" 
                width="100px"
              /> */}
              <CryptoDashIcon />

              <TickerDisplay/>
              
              <ChartDisplay/>
              

            </VStack>
        </motion.div>
        <HStack
          mt={6}
        >
          {
            context.userCurrentPair[0] ? 
            (
              pageContext.allUserPairs.map( (pair) => <Box
              key={JSON.parse(pair).tickerName}
              
              >{
                
                JSON.parse(pair).tickerName === context.userCurrentPair[0].tickerName ?
                <SwipeIndexCircle isSelected={true}/> : <SwipeIndexCircle isSelected={false}/>
                
              }
              </Box>)
            ) : <Skeleton w="md" height="20px" />
          }
        </HStack>


    </>
  )
}
