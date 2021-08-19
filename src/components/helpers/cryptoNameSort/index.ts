import { CryptoNames } from "../../../types";

export const compareCryptoNames = (a:CryptoNames, b:CryptoNames) => {
  if(a.tickerName < b.tickerName){
    return -1;
  }
  if(a.tickerName > b.tickerName){
    return 1;
  }
  return 0;
}