type Action = string;
export const SET_ALL_CHOSEN_PAIRS: Action = "set_all_chosen_pairs";
export const SET_CURRENT_PAIR: Action = "set_current_pair";
export const SET_PRICE: Action = "set_price";
export const ARROW_UP: Action = "arrow_up";
export const SWIPE_THRU: Action = "swipe_thru";
export interface CryptoAction {
  type: "set_all_chosen_pairs" | "arrow_up" | "set_current_pair" | "set_price" | Action,
  payload?: string | string[] | boolean,
  price?: number,
  percentageChange?: number
};