export const compareCryptoNames = (a:any, b:any) => {
  if(a.tickerName < b.tickerName){
    return -1;
  }
  if(a.tickerName > b.tickerName){
    return 1;
  }
  return 0;
}