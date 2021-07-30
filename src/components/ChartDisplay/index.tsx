import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Button, VStack, useColorMode } from '@chakra-ui/react';
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
  const { colorMode } = useColorMode();

  useEffect(() => {
    // define api call
    const getHistoricalApi = async () => {
      const results = await fetchHistoricalData();
      const extractedInfo = [];
      // prevent operating on "N/A data"
      if (results.length===0){
        return;
      }
      for (const bucket of results){
        // bucket[0] contains x-axis Time data in Number ISO 8601 format
        // take the average of the high and low of that time interval to get y-axis: price
        extractedInfo.push({x: bucket[0], y: ((bucket[2]+bucket[1])/2)})
      }
      // remember to reverse!
      // cutting the amount of data points in half
      // instead of max 300 candles, we get max 150
      let removedExtractedInfo = extractedInfo.reverse().splice(0, Math.round(extractedInfo.length/2));
      // update state of our line chart data
      setLineData(extractedInfo);
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

  const bgColor = {
    light: "gray.300",
    dark: "#21293b"
  }

  const fetchHistoricalData = async () => {
    if(context.userCurrentPair[0]===undefined){
      // return array length 0 for error catch
      return [];
    }
    const productName = `${context.userCurrentPair[0].tickerName}-USD`;
    // use current state of granularity
    const res = await fetch(`https://api.pro.coinbase.com/products/${productName}/candles?granularity=${granularity}`);
    const data = await res.json();
    return data;
  }

  return (
    <>
      
        <VStack
          maxW="350px"
          bg={bgColor[colorMode]}
          borderRadius="lg"
          boxShadow="lg"
        >
          <VictoryLine
            style={{ data: { stroke: lineColor} }}
            data={lineData}
            />
        </VStack>
        <HStack>
        {
          timeIntervalArray.map( (interval) => <Button
            key={interval.gran}
            variant="ghost"
            size="xs"
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
