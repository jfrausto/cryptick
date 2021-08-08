import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Button, VStack, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useContext, useState } from 'react';
import {VictoryAxis, VictoryCandlestick, VictoryChart} from 'victory';
import { CryptoContext, DispatchContext } from '../CryptoContext';
import { SET_GRAN } from '../helpers/reducer/actions';


interface CandleStickData {
  x: number,
  low: number,
  high: number,
  open: number,
  close: number
}

interface TimeIntervalBuckets {
  gran: number,
  timeDisplay: string
}

const ChartDisplay = () => {

  const { context } = useContext(CryptoContext);
  const { dispatch } = useContext(DispatchContext);
  const [candleData, setCandleData] = useState<CandleStickData[]>([]);
  const lineColor = useColorModeValue("#000000", "#FFFFFF");
  const { colorMode } = useColorMode();

  useEffect(() => {
    // define api call
    const getHistoricalApi = async () => {
      const results = await fetchHistoricalData();
      const extractedInfo: CandleStickData[] = [];
      // prevent operating on "N/A data"
      if (results.length===0){
        return;
      }
      console.table(results);
      for (const bucket of results){
        // bucket[0] contains x-axis Time data in Number ISO 8601 format
        // take the average of the high and low of that time interval to get y-axis: price
        extractedInfo.push({
          x: bucket[0],
          low: bucket[1],
          high: bucket[2],
          open: bucket[3],
          close: bucket[4]
        })
      }
      // remember to reverse!
      // removing 90% of retrieved data so candle stick chart looks good
      let removedExtractedInfo = extractedInfo.reverse().splice(0, Math.round(extractedInfo.length*9/10));
      // update state of our line chart data
      setCandleData(extractedInfo);
    }
    getHistoricalApi();
    console.log(`granularity is ${context.granularity}`);
  }, [context.userCurrentPair, context.granularity]);
  
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
  };

  const candleColorPos = {
    light: "#276749",
    dark: "#276749",
  }
  const candleColorNeg = {
    light: "#9B2C2C",
    dark: "#E53E3E",
  }

  const wickColor = {
    light: "black",
    dark: "#e6e6e6"
  }

  const fetchHistoricalData = async () => {
    if(context.userCurrentPair[0]===undefined){
      // return array length 0 for error catch
      return [];
    }
    const productName = `${context.userCurrentPair[0].tickerName}-USD`;
    // use current state of granularity
    const res = await fetch(`https://api.pro.coinbase.com/products/${productName}/candles?granularity=${context.granularity}`);
    const data = await res.json();
    return data;
  }

  return (
    <>
        <VStack
          maxW="375px"
          bg={bgColor[colorMode]}
          borderRadius="lg"
          boxShadow="lg"
          pr="5"
          pl="0"
        >
          <VictoryChart
            domainPadding={{ x: 5 }}
          >
            <VictoryCandlestick
              candleColors={{ positive: candleColorPos[colorMode], negative: candleColorNeg[colorMode]}}
              data={candleData}
              style={{ 
                data: {
                  stroke: wickColor[colorMode]
                }
               }}
            />
            <VictoryAxis
              dependentAxis
              orientation="right"
              offsetX={46}
              style={{ 
                tickLabels: {
                  fontSize: 14, 
                  padding: 3,
                  stroke: "gray",
                  strokeWidth: 1
                },
                axis: {
                  stroke: wickColor[colorMode],
                  strokeWidth: 2
                } 
              }}
            />
          </VictoryChart>
        </VStack>
        <HStack>
        {
          timeIntervalArray.map( (interval) => <Button
            key={interval.gran}
            variant="ghost"
            size="xs"
            isActive={interval.gran === context.granularity ? true : false}
            _focus={{ 
                outline: "none"
              }}
            onClick={ (e) => {
              e.preventDefault()
              dispatch({type: SET_GRAN, granularity: interval.gran})
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
