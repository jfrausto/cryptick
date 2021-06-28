import React, {useState, useEffect, MouseEventHandler, useContext, BaseSyntheticEvent} from 'react';
import { VStack, Heading, Center, Box, useColorMode } from '@chakra-ui/react';
import StarBadge from './StarBadge';
import {PageContext } from '../components/CryptoContext';
import {useRemoveElementFromArray} from './helpers/useRemoveElementFromArray';


interface CardPropType {
  crypto: string
};

const ChooseCryptoCard: React.FC<CardPropType> = ( {crypto } ) => {

  const { colorMode } = useColorMode()
  const { pageContext, setPageContext } = useContext(PageContext);
  const [isSelected, setSelected] = useState(false);

  const bgColor = {
    light: "green.100",
    dark: "gray.800"
  };
  
  const colorText = {
    light: "gray.800",
    dark: "white"
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
      const chosenPair = crypto+"-USD";
      if(pageContext.allUserPairs.includes(chosenPair)){
        const updatedArr = useRemoveElementFromArray(chosenPair, pageContext.allUserPairs);
        setPageContext!({...pageContext, allUserPairs: updatedArr });
        return;
      }
      setPageContext!({...pageContext, allUserPairs: pageContext.allUserPairs.concat(chosenPair)});
    };


  return (
    <>
      <Box
        position="relative"
        borderRadius="2xl"
        w="150px"
        maxW="300px"
        p="10px"
        px="5px"
        m="1"
        height="180px"
        userSelect="none"
        onClick={(e) => handleAddCrypto(e)}
        color={ 
          isSelected ?
          selectedTextColor[colorMode]
          : colorText[colorMode]
        }
        bg={
          isSelected ? 
          bgSelectedColor[colorMode]
          : bgColor[colorMode]
        }
      >
        {
          isSelected ? 
          <StarBadge/>
          : ""
        }
        <VStack>
          <Heading
            mb={ isSelected ?
              "100px" : "0px"
            }
          >
            {crypto}
          </Heading>
        </VStack>
      </Box>
    </>
  )
};

export default ChooseCryptoCard;
