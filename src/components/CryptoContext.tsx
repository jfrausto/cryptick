import { createContext, Dispatch, SetStateAction } from 'react';
import { CryptoAction } from '../components/helpers/reducer/actions';
import { CryptoNames } from './helpers/buildCryptoCard';
export interface CryptoContextType {
  userCurrentPair: CryptoNames[],
  isSwiping: boolean
  price: number,
  isGoingUp: boolean,
  dayChangePercentage: number
}
export const startInApp: CryptoContextType = {
  userCurrentPair: [{tickerName: "BTC", fullName: "Bitcoin"}],
  isSwiping: false,
  price: 0.00,
  isGoingUp: true,
  dayChangePercentage: 0
}

// ABOUT TO ADD A CONTEXT

export interface PageContextType {
  allUserPairs: string[],
}

export const startPage: PageContextType = {
  allUserPairs: [],
};

export interface PageContextState {
  pageContext: PageContextType,
  setPageContext?: Dispatch<SetStateAction<PageContextType>>
}

const startPageContext: PageContextState = {
  pageContext: startPage
}
export interface ContextState {
  context: CryptoContextType,
  setContext?: Dispatch<SetStateAction<CryptoContextType>>
}
const startContext: ContextState = {
  context: startInApp
}

interface DispatchState {
  dispatch: Dispatch<CryptoAction>,
  setDispatch?: Dispatch<SetStateAction<Dispatch<CryptoAction>>>
}

const startDispatch: DispatchState = {
  dispatch: () => {}
}

// this initial context needs to match types with useState/useReducer
export const CryptoContext = createContext(startContext);

export const DispatchContext = createContext(startDispatch);

export const PageContext = createContext(startPageContext);

// <{context: CryptoContextType | null, setContext: Dispatch<SetStateAction<any>>} | null>(null);