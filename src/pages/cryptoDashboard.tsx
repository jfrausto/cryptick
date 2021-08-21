import React, {useContext, useEffect, useReducer} from 'react';
import { ContextReducer } from '../components/helpers/reducer';
import { SET_CURRENT_PAIR } from '../components/helpers/reducer/actions';
import { AnimatePresence} from 'framer-motion';
import { CryptoContext, DispatchContext, PageContext ,startInApp } from '../components/CryptoContext';
import CryptoDisplay from '../components/CryptoDisplay';
import { useRouter } from "next/router";


const CryptoDashboard :React.FC = () => {

  const [context, dispatch] = useReducer(ContextReducer, startInApp);
  const { pageContext, setPageContext } = useContext(PageContext);
  const router = useRouter();

  useEffect(() => {
    let localStore;
    // null check
    if(localStorage.getItem("savedPairs")){
      localStore = JSON.parse(localStorage.getItem("savedPairs")!);
      // use force '!' because it was null checked
      setPageContext!({ ...pageContext, allUserPairs: localStore });
    }
    // in case of refreshing page here after a long time/not setting any favorites
    // go to home route
    if (!localStore && !pageContext.allUserPairs[0]){
      router.push("/");
    }
    // use local store of the pairs if page was refreshed here
    dispatch({
      type: SET_CURRENT_PAIR,
      payload: localStore ? [localStore[0]] : [pageContext.allUserPairs[0]]
    });
  }, []);

  return (
    <>
        <DispatchContext.Provider value={{dispatch}}>
          <CryptoContext.Provider value={{ context }}>
              <AnimatePresence>
                  <CryptoDisplay />
              </AnimatePresence>
          </CryptoContext.Provider>
        </DispatchContext.Provider>
    </>
  )
}

export default CryptoDashboard;