import React, { useContext } from 'react';
import {
  Stat,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import { CryptoContext } from '../CryptoContext';

export const Display24Hr:React.FC = () => {
  const {context} = useContext(CryptoContext);

  // useEffect(() => {
  //   console.log("inside 24 hr display....");
  //   return () => {
  //     console.log("cleaning up 24 hr display....");
  //   }
  // }, [context.userCurrentPair])


  return (
    <>
      {
        context.price && !context.isSwiping ? 
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
          </Stat> : <Skeleton 
              minWidth="173px" 
              height="32px" 
              borderRadius="2xl"
              // startColor="red.500" 
              // endColor="green.500" 
              />
      }
    </>
  )
}
