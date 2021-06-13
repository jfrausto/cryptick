import React, {useContext, useState, useEffect, useReducer} from 'react';
import {
  Center,
  VStack,
  Heading,
  Skeleton,
} from '@chakra-ui/react';
import { ContextReducer } from '../components/helpers/reducer';
import { SET_CURRENT_PAIR } from '../components/helpers/reducer/actions';
import { AnimatePresence} from 'framer-motion';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CryptoContext, DispatchContext, PageContext ,startInApp } from '../components/CryptoContext';
import { CryptoDisplay } from '../components/CryptoDisplay';


const CryptoDashboard :React.FC = () => {

  const [context, dispatch] = useReducer(ContextReducer, startInApp);
  const { pageContext } = useContext(PageContext);


  useEffect(() => {
    console.log("about to dispatch and set current pair...")
    dispatch({
      type: SET_CURRENT_PAIR,
      payload: [pageContext.allUserPairs[0]]
    });
    return () => {
      console.log("cleaning up in cryptoDashboard");
    }
  }, []);

  return (
    <Container 
      height="100vh" 
      p={2}
    >
        <DispatchContext.Provider value={{dispatch}}>
          <CryptoContext.Provider value={{ context }}>
            <AnimatePresence>
              <CryptoDisplay />
            </AnimatePresence>
          </CryptoContext.Provider>
        </DispatchContext.Provider>
      <DarkModeSwitch />
    </Container>
  )
}

export default CryptoDashboard;