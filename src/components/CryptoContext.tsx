import { createContext } from 'react';
import { 
  CryptoContextType, 
  PageContextType ,
  PageContextState,
  ContextState,
  DispatchState
} from '../types';

export const startInApp: CryptoContextType = {
  userCurrentPair: [{tickerName: "BTC", fullName: "Bitcoin"}],
  isSwiping: false,
  price: 0.00,
  isGoingUp: true,
  dayChangePercentage: 0,
  // 15 minute interval buckets
  granularity: 900
}

export const startPage: PageContextType = {
  allUserPairs: [],
};

const startPageContext: PageContextState = {
  pageContext: startPage
}

const startContext: ContextState = {
  context: startInApp
}

const startDispatch: DispatchState = {
  dispatch: () => {}
}

// this initial context needs to match types with useState/useReducer
export const CryptoContext = createContext(startContext);
export const DispatchContext = createContext(startDispatch);
export const PageContext = createContext(startPageContext);
