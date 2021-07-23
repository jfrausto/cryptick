import { CryptoNames } from "../buildCryptoCard";

export const useRemoveElementFromArray = ( elem: CryptoNames, arr: CryptoNames[]) : CryptoNames[] => {
  const arrShallowCopy = [...arr];
  const index = arrShallowCopy.indexOf(elem);
  arrShallowCopy.splice(index, 1);
  return arrShallowCopy;
}