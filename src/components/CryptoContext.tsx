import { createContext, Dispatch, SetStateAction } from 'react';
import { CryptoAction } from '../components/helpers/reducer/actions'
export interface CryptoContextType {
  allUserPairs: string[],
  userCurrentPair: string[],
  price: number,
  isGoingUp: boolean,
  dayChangePercentage: number
}
export const startInApp: CryptoContextType = {
  allUserPairs: [],
  userCurrentPair: [],
  price: 0.00,
  isGoingUp: true,
  dayChangePercentage: 0
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

// <{context: CryptoContextType | null, setContext: Dispatch<SetStateAction<any>>} | null>(null);