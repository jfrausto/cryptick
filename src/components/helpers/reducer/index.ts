import { CryptoContextType, CryptoAction } from '../../../types';
import {
  SET_ALL_CHOSEN_PAIRS,
  SET_CURRENT_PAIR,
  SET_PRICE,
  ARROW_UP,
  SWIPE_THRU,
  ON_DRAG,
  CLEAN_UP,
  SET_GRAN
 } from './actions';

export const ContextReducer = (context:CryptoContextType, action: CryptoAction):any => {
  switch (action.type) {
    case SET_CURRENT_PAIR:
      return {
        ...context, 
        userCurrentPair: action.payload
      }
      break;
    case SET_ALL_CHOSEN_PAIRS:
      return {
        ...context, 
        allUserPairs: action.payload
      }
      break;
    case SET_PRICE:
      return { 
        ...context, 
        price: action.price, 
        dayChangePercentage: action.percentageChange 
      }
      break;
    case ARROW_UP:
      return { 
        ...context, 
        isGoingUp: action.payload
      }
      break;
    case SWIPE_THRU:
      return {
        ...context,
        userCurrentPair: action.payload
      }  
      break;
    case SET_GRAN:
      return {
        ...context,
        granularity: action.granularity
      }  
      break;
    case CLEAN_UP:
      return {
        ...context,
        price: action.price
      }  
      break;
      case ON_DRAG:
        return {
          ...context,
          isSwiping: action.isSwiping,
        }  
        break;
    default:
      return {...context}
      break;
  }
 }

