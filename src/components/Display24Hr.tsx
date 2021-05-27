import React, { useContext } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Center,
  Skeleton,
  Stack
} from '@chakra-ui/react';
import { CryptoContext } from '../components/CryptoContext';

export const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);
  return (
    <>
      {
        context.userCurrentPair.length === 0 ? <Skeleton 
          minWidth="173px" 
          height="30px" 
          // startColor="red.500" 
          // endColor="green.500" 
          /> :
          <Stat as={Center}>
            <StatHelpText
            fontWeight="bold"
              color={context.dayChangePercentage >= 0 ? 
                useColorModeValue("green.800", "green.300") : 
                useColorModeValue("red.900", "red.300")}
            >
              <StatArrow 
                color={context.dayChangePercentage >= 0 ? 
                  useColorModeValue("green.800", "green.300") : 
                  useColorModeValue("red.900", "red.300")}
                type={context.dayChangePercentage >= 0 ? 
                "increase" : 
                "decrease"}
              />
              {context.dayChangePercentage >= 0 ? 
                `+${context.dayChangePercentage}% 24h` : 
                `${context.dayChangePercentage}% 24h`}
            </StatHelpText>
          </Stat>
      }
    </>
  )
}
