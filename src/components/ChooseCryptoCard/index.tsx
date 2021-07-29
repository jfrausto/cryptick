import React, {useState, useEffect, useContext, BaseSyntheticEvent} from 'react';
import { VStack, Heading, Text, Box, useColorMode } from '@chakra-ui/react';
import StarBadge from '../StarBadge';
import {PageContext } from '../CryptoContext';
import {useRemoveElementFromArray} from '../helpers/useRemoveElementFromArray';
// import { CryptoNames } from './helpers/buildCryptoCard';
import { CryptoNames } from '../helpers/buildCryptoCard';

interface CardPropType {
  tickerName: string,
  fullName: string,
  prevSelected: boolean
};

const ChooseCryptoCard: React.FC<CardPropType> = ( {tickerName, fullName, prevSelected } ) => {

  const { colorMode } = useColorMode()
  const { pageContext, setPageContext } = useContext(PageContext);
  const [isSelected, setSelected] = useState(false);

  // onMount check if we have been selected before
  useEffect(() => {
    if (prevSelected) setSelected(true);
  }, []);

  // anytime we change any of our pairs, check if we reset user choices
  useEffect(() => {
    if(pageContext.allUserPairs.length === 0){
      setSelected(false);
    }
  }, [pageContext.allUserPairs])

  const bgColor = {
    light: "gray.300",
    dark: "gray.700"
  };
  
  const colorSubtext = {
    light: "gray.600",
    dark: "gray.100"
  }
  
  const bgSelectedColor = {
    light: "green.600",
    dark: "green.500"
  };

  const selectedTextColor = {
    light: "red.100",
    dark: "white"
  };

    // onclick of crypto card
    const handleAddCrypto = (e: BaseSyntheticEvent) => {
      setSelected((priorClick)=> !priorClick );
      const chosenPair:CryptoNames = {
        tickerName: tickerName,
        fullName: fullName
      };
      if(pageContext.allUserPairs.some( crypto => crypto.tickerName === chosenPair.tickerName)){
        const updatedArr = useRemoveElementFromArray(chosenPair, pageContext.allUserPairs);
        setPageContext!({...pageContext, allUserPairs: updatedArr });
        return;
      }
      setPageContext!({...pageContext, allUserPairs: pageContext.allUserPairs.concat([chosenPair])});
    };


  return (
    <>
      <Box
        // position="static"
        w="135px"
        height="150px"
        p={2}
        m={1}
        userSelect="none"
        onClick={(e) => handleAddCrypto(e)}
        borderRadius="2xl"
        border={ isSelected ? 
          "2px solid green"
          : "none"
        }
        bg={bgColor[colorMode]}
        _hover={{ 
          cursor: "pointer"
         }}
      >

        <VStack
          textAlign="center"
        >
          <Heading
            size="sm"
          >
            {tickerName}
          </Heading>
          <Text 
            fontStyle="italic" 
            fontSize="xs" 
            color={colorSubtext[colorMode]}
          >
            {fullName}
          </Text>

        </VStack>
      </Box>
    </>
  )
};

export default ChooseCryptoCard;
