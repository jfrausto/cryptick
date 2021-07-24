import { CryptoNames } from "../buildCryptoCard";

export const useRemoveElementFromArray = ( elem: CryptoNames, arr: CryptoNames[]) : CryptoNames[] => {
  console.table(elem);
  const arrShallowCopy = [...arr];
  const index = arrShallowCopy.map( (obj) => obj.tickerName).indexOf(elem.tickerName);
  console.log(index);
  arrShallowCopy.splice(index, 1);
  console.table(arrShallowCopy);
  return arrShallowCopy;
}