import React, {useContext, useEffect, useReducer} from 'react';
import { ContextReducer } from '../components/helpers/reducer';
import { SET_CURRENT_PAIR } from '../components/helpers/reducer/actions';
import { AnimatePresence} from 'framer-motion';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CryptoContext, DispatchContext, PageContext ,startInApp } from '../components/CryptoContext';
import { CryptoDisplay } from '../components/CryptoDisplay';
import { VStack, HStack, Box } from '@chakra-ui/react';
import SwipeIndexCircle from '../components/SwipeIndexCircle';


const CryptoDashboard :React.FC = () => {

  const [context, dispatch] = useReducer(ContextReducer, startInApp);
  const { pageContext } = useContext(PageContext);


  useEffect(() => {
    console.log("about to dispatch and set current pair...")
    dispatch({
      type: SET_CURRENT_PAIR,
      payload: [JSON.parse(pageContext.allUserPairs[0])]
    });
    return () => {
      console.log("cleaning up in cryptoDashboard");
    }
  }, []);

  return (
    <>
        <DispatchContext.Provider value={{dispatch}}>
          <CryptoContext.Provider value={{ context }}>
              <AnimatePresence>
                <CryptoDisplay />
              </AnimatePresence>
              <HStack
                mt={6}
              >
                {
                  pageContext.allUserPairs.map( (pair) => <Box>{
                    
                    JSON.parse(pair).tickerName === context.userCurrentPair[0].tickerName ?
                    <SwipeIndexCircle isSelected={true}/> : <SwipeIndexCircle isSelected={false}/>
                    
                    }
                  </Box>)
                }
              </HStack>
          </CryptoContext.Provider>
        </DispatchContext.Provider>
    </>
  )
}

export default CryptoDashboard;