import React, { useContext } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorMode,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import NumberScrollAnimate from '../NumberScrollAnimate';
import { CryptoContext } from '../CryptoContext';
import { statTextGreen, statTextRed, statArrowGreen, statArrowRed } from './colors';

const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);
  const {colorMode} = useColorMode();

  return (
    <>
      {
        context.price !== 0.00 && !context.isSwiping ? 
          <Stat 
            as={Center}
            fontFamily="monospace"
          >
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
          </Stat> : 
          <Stat 
            as={Center}
            fontFamily="monospace"
          >
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
              <span>&#177;</span><NumberScrollAnimate from={0} to={100} />% 24h
            </StatHelpText>
          </Stat>
      }
    </>
  )
}

export default Display24Hr;