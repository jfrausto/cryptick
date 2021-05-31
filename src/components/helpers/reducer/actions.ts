// SET ALL USER CHOSEN PAIRS
import {Dispatch} from 'react';

export type Action = string;

export interface CryptoAction {
  dispatch?: Dispatch<CryptoAction>
  type: Action,
  payload?: string | string[] | boolean,
  price?: number,
  pChange?: number
};

export const SET_ALL_CHOSEN_PAIRS: Action = "set_all_chosen_pairs";
// SET CURRENT PAIR IN VIEW
export const SET_CURRENT_PAIR: Action = "set_current_pair";
// PRICE CHANGE
export const SET_PRICE: Action = "set_price";

export const ARROW_UP: Action = "arrow_up"