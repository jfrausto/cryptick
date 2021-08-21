import React, { useContext} from 'react';
import { Box, Skeleton, HStack } from '@chakra-ui/react';
import { PageContext, CryptoContext } from '../CryptoContext';
import SwipeIndexCircle from '../SwipeIndexCircle';

const NavigationCircles: React.FC = () => {

  const { context } = useContext(CryptoContext);
  const { pageContext } = useContext(PageContext);

  return (
    <>
      <HStack>
        {
          context.userCurrentPair[0] ? 
          (
            pageContext.allUserPairs.map( (pair) => <Box
            key={pair.tickerName}
            >{
              pair.tickerName === context.userCurrentPair[0].tickerName ?
              <SwipeIndexCircle isSelected={true}/> : <SwipeIndexCircle isSelected={false}/>
            }
            </Box>)
          ) : <Skeleton w="md" height="20px" />
        }
      </HStack>
    </>
  )
}

export default NavigationCircles;
