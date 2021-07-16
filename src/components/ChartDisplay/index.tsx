import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Button } from '@chakra-ui/react';
import React, {useEffect, useContext, useState, MouseEventHandler} from 'react';
// import { MouseEventHandler } from 'react';
import {VictoryLine} from 'victory';
// import ChartButton from '../ChartButton';
import { CryptoContext } from '../CryptoContext';
// import {ButtonProps} from '@chakra-ui/react' 
// import {} from '';

interface lineDataCoordinates {
  x: number,
  y: number
}

interface TimeIntervalBuckets {
  gran: number,
  timeDisplay: string
}

// interface timeEvent extends MouseEventHandler<ButtonProps> {
//   sGranularity: number
// }



const ChartDisplay = () => {

  const { context } = useContext(CryptoContext);
  const [lineData, setLineData] = useState<lineDataCoordinates[]>([{x: 0, y: 0}]);
  const [granularity, setGranularity] = useState<number>(900);
  const lineColor = useColorModeValue("#000000", "#FFFFFF");

  useEffect(() => {
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
    console.log(`granularity is ${granularity}`);
  }, [context.userCurrentPair, granularity]);
  
  const timeIntervalArray: TimeIntervalBuckets[] = [
    {
      gran: 60,
      timeDisplay: "1m"
    },
    {
      gran: 300,
      timeDisplay: "5m"
    },
    {
      gran: 900,
      timeDisplay: "15m"
    },
    {
      gran: 3600,
      timeDisplay: "1h"
    },
    {
      gran: 21600,
      timeDisplay: "6h"
    },
    {
      gran: 86400,
      timeDisplay: "1d"
    }
  ];

  const fetchHistoricalData = async () => {
    // catch undefined react updating error
    if(context.userCurrentPair[0]===undefined){
      return [];
    }
    const productName = `${context.userCurrentPair[0].tickerName}-USD`;
    // use current state of granularity
    const res = await fetch(`https://api.pro.coinbase.com/products/${productName}/candles?granularity=${granularity}`);
    const data = await res.json();
    // console.table(data);
    return data;
  }

  return (
    <>
      <VictoryLine
      style={{ data: { stroke: lineColor} }}
        data={lineData}
      />

      <HStack>
      {
        timeIntervalArray.map( (interval) => <Button
          key={interval.gran}
          variant="ghost"
          size="sm"
          isActive={interval.gran === granularity ? true : false}
          _focus={{ 
            outline: "none"
           }}
          onClick={ (e) => {
            e.preventDefault()
            setGranularity(interval.gran)
          }}
        >
          {interval.timeDisplay}
        </Button>
            
        )
      }
      </HStack>
    </>
  )
};

export default ChartDisplay;
