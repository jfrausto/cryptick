import React, {useEffect, useContext, useState} from 'react';
import {VictoryLine} from 'victory';
import { CryptoContext } from '../CryptoContext';
// import {} from '';

interface lineDataCoordinates {
  x: number,
  y: number
}

const ChartDisplay = () => {

  const { context } = useContext(CryptoContext);
  const [lineData, setLineData] = useState<lineDataCoordinates[]>([{x: 0, y: 0}]);

  useEffect(() => {
    // result is an array of arrays [[]]

    const getHistoricalApi = async () => {
      const results = await fetchHistoricalData();
      const extractedInfo = [];
      if (results.length===0){
        return;
      }
      for (const bucket of results){
        // take the average of the high and low of that time interval to get y: price
        extractedInfo.push({x: bucket[0], y: ((bucket[2]+bucket[1])/2)})
      }
      // remember to reverse!
      setLineData(extractedInfo.reverse());
    }
    
    

    getHistoricalApi();
    
  }, [context.userCurrentPair]);

  const fetchHistoricalData = async () => {
    if(context.userCurrentPair[0]===undefined){
      return [];
    }
    const productName = `${context.userCurrentPair[0].tickerName}-USD`;
    const res = await fetch(`https://api.pro.coinbase.com/products/${productName}/candles?granularity=900`);
    const data = await res.json();
    console.table(data);
    return data;
  }

  return (
    <>
      <VictoryLine
        data={lineData}
      />
    </>
  )
};

export default ChartDisplay;
