import React, { useContext, useEffect } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorMode,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';

export const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);
  const {colorMode} = useColorMode();

  const statTextGreen = {
    light: "green.800",
    dark: "green.300"
  };
  const statTextRed = {
    light: "red.800",
    dark: "red.300"
  };
  const statArrowGreen = {
    light: "green.800",
    dark: "green.300"
  };
  const statArrowRed = {
    light: "red.800",
    dark: "red.300"
  };


  return (
    <>
      {
        context.price && !context.isSwiping ? 
          <Stat as={Center}>
            <StatHelpText
            fontWeight="bold"
              color={context.dayChangePercentage >= 0 ? 
                statTextGreen[colorMode] : 
                statTextRed[colorMode]}
            >
              <StatArrow 
                color={context.dayChangePercentage >= 0 ? 
                  statArrowGreen[colorMode] : 
                  statArrowRed[colorMode]}
                type={context.dayChangePercentage >= 0 ? 
                "increase" : 
                "decrease"}
              />
              {context.dayChangePercentage >= 0 ? 
                `+${context.dayChangePercentage}% 24h` : 
                `${context.dayChangePercentage}% 24h`}
            </StatHelpText>
          </Stat> : <Skeleton 
              minWidth="173px" 
              height="36px" 
              borderRadius="2xl"
              // startColor="red.500" 
              // endColor="green.500" 
              />
      }
    </>
  )
}
