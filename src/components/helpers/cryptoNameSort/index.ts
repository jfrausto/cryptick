export const compareCryptoNames = (a:any, b:any) => {
  if(a.id < b.id){
    return -1;
  }
  if(a.id > b.id){
    return 1;
  }
  return 0;
}