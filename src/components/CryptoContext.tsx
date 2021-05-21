import { createContext, Dispatch, SetStateAction } from 'react';

export interface CryptoContextType {
  userCurrentPair: string[],
  price: number,
  isGoingUp: boolean
}
export const startInApp: CryptoContextType = {
  userCurrentPair: ["BTC-USD"],
  price: 0.00,
  isGoingUp: true
}

export interface ContextState {
  context: CryptoContextType,
  setContext?: Dispatch<SetStateAction<CryptoContextType>>
}
export const startContext: ContextState = {
  context: startInApp
}

// this initial context needs to match types with useState
export const CryptoContext = createContext(startContext);

// <{context: CryptoContextType | null, setContext: Dispatch<SetStateAction<any>>} | null>(null);