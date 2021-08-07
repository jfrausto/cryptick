import React, {useContext, useEffect, useReducer} from 'react';
import { ContextReducer } from '../components/helpers/reducer';
import { SET_CURRENT_PAIR } from '../components/helpers/reducer/actions';
import { AnimatePresence} from 'framer-motion';
import { CryptoContext, DispatchContext, PageContext ,startInApp } from '../components/CryptoContext';
import CryptoDisplay from '../components/CryptoDisplay';
import { VStack } from '@chakra-ui/react';


const CryptoDashboard :React.FC = () => {

  const [context, dispatch] = useReducer(ContextReducer, startInApp);
  const { pageContext, setPageContext } = useContext(PageContext);


  useEffect(() => {
    let localStore;
    if(localStorage.getItem("savedPairs")){
      localStore = JSON.parse(localStorage.getItem("savedPairs")!)
      // console.table(localStore);
      setPageContext!({ ...pageContext, allUserPairs: localStore });
    }

    console.log("about to dispatch and set current pair...");
    dispatch({
      type: SET_CURRENT_PAIR,
      payload: localStore ? [localStore[0]] : [pageContext.allUserPairs[0]]
    });
    return () => {
      console.log("cleaning up in cryptoDashboard");
    }
  }, []);

  return (
    <>
      <VStack
        maxW="375px"
      >
        <DispatchContext.Provider value={{dispatch}}>
          <CryptoContext.Provider value={{ context }}>
              <AnimatePresence>
                  <CryptoDisplay />
              </AnimatePresence>
          </CryptoContext.Provider>
        </DispatchContext.Provider>
      </VStack>
    </>
  )
}

export default CryptoDashboard;