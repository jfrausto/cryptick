// import { CryptoContextType } from '../../CryptoContext';
import { CryptoContextType } from '../../CryptoContext';
import {
  SET_ALL_CHOSEN_PAIRS,
  SET_CURRENT_PAIR,
  SET_PRICE,
  ARROW_UP,
  // Action,
  CryptoAction
 } from './actions';

export const ContextReducer = (context:CryptoContextType, action: CryptoAction) => {
  switch (action.type) {
    case SET_CURRENT_PAIR:
      return {...context, userCurrentPair: action.payload}
      break;
    case SET_ALL_CHOSEN_PAIRS:
      return {...context, allUserPairs: action.payload}
      break;
    case SET_PRICE:
      return { ...context, price: action.price, dayChangePercentage: action.pChange }
      break;
    case ARROW_UP:
      return { ...context, isGoingUp: action.payload}
      break;
  }
 }

