import React, { useContext } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
import { CryptoContext } from '../components/CryptoContext';

export const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);
  return (
    <>
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
            `-${context.dayChangePercentage}% 24h`}
        </StatHelpText>
      </Stat>
    </>
  )
}
