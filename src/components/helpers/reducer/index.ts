// import { CryptoContextType } from '../../CryptoContext';
import { CryptoContextType } from '../../CryptoContext';
import {
  SET_ALL_CHOSEN_PAIRS,
  SET_CURRENT_PAIR,
  PRICE_CHANGE,
  Action
 } from './actions';

export const ContextReducer = (context:CryptoContextType, action: Action):any  => {
  switch (action) {
    case SET_CURRENT_PAIR:
      return {...context, userCurrentPair: context.userCurrentPair}
      break;
    case SET_ALL_CHOSEN_PAIRS:
      return {...context, allUserPairs: context.allUserPairs}
      break;
    case PRICE_CHANGE:
      return { ...context, price: context.price, dayChangePercentage: context.dayChangePercentage }
      break;
  }
 }

