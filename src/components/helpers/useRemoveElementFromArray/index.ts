import { CryptoNames } from "../../../types";

export const useRemoveElementFromArray = ( elem: CryptoNames, arr: CryptoNames[]) : CryptoNames[] => {
  const arrShallowCopy = [...arr];
  const index = arrShallowCopy.map( (obj) => obj.tickerName).indexOf(elem.tickerName);
  arrShallowCopy.splice(index, 1);
  return arrShallowCopy;
}