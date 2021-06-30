export const useRemoveElementFromArray = ( elem: string, arr: string[]) : string[] => {
  const arrShallowCopy = [...arr];
  const index = arrShallowCopy.indexOf(elem);
  arrShallowCopy.splice(index, 1);
  return arrShallowCopy;
}