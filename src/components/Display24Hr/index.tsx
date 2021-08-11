import React, { useContext } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorMode,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';
import { statTextGreen, statTextRed, statArrowGreen, statArrowRed } from './colors';

const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);
  const {colorMode} = useColorMode();

  return (
    <>
      {
        context.price !== 0.00 && !context.isSwiping ? 
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

export default Display24Hr;