export interface CryptoNames {
  tickerName: string,
  fullName: string
}

export const matchCryptoInfo = (arr1: any, arr2: any) => {
  const cryptoInfo: CryptoNames[] = []
  for (const elem1 of arr1) {
    for (const elem2 of arr2) {
      if (elem1.base_currency === elem2.id) {
        cryptoInfo.push({
          tickerName: elem1.base_currency,
          fullName: elem2.name
        });
      }
    }
  }
  console.table(cryptoInfo);
  return cryptoInfo;
}