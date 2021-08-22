import { Dispatch, SetStateAction } from 'react';

export type Action = string;

export interface CandleStickData {
  x: number,
  low: number,
  high: number,
  open: number,
  close: number
};

export interface DispatchState {
  dispatch: Dispatch<CryptoAction>,
  setDispatch?: Dispatch<SetStateAction<Dispatch<CryptoAction>>>
}

export interface ContextState {
  context: CryptoContextType,
  setContext?: Dispatch<SetStateAction<CryptoContextType>>
}

export interface CryptoAction {
  type: "set_all_chosen_pairs" | "arrow_up" | "set_current_pair" | "set_price" | "on_drag" | "clean_up" | "set_gran" | Action,
  payload?: string | string[] | boolean | CryptoNames[],
  price?: number,
  percentageChange?: number,
  isSwiping?: boolean,
  granularity?: number
};

export interface CryptoCardPropType {
  tickerName: string,
  fullName: string,
  prevSelected: boolean,
  iconSrc?: any
};

export interface CryptoNames {
  tickerName: string,
  fullName: string,
  iconSrc?: any
};

export interface CryptoContextType {
  userCurrentPair: CryptoNames[],
  isSwiping: boolean
  price: number,
  isGoingUp: boolean,
  dayChangePercentage: number,
  granularity: number
};

export interface DoneCardProps {
  handleDone: () => void,
  handleReset: () => void
};

export interface NumberScrollAnimateProps {
  from: number,
  to: number
}

export interface PageContextType {
  allUserPairs: CryptoNames[],
};

export interface PageContextState {
  pageContext: PageContextType,
  setPageContext?: Dispatch<SetStateAction<PageContextType>>
}

export interface SwipeIndexCircleProps {
  isSelected: boolean
};

export interface TimeIntervalBuckets {
  gran: number,
  timeDisplay: string
};