import React, {useState, useEffect, useContext, BaseSyntheticEvent} from 'react';
import { VStack, Heading, Text, Box, useColorMode, SkeletonCircle  } from '@chakra-ui/react';
import {PageContext } from '../CryptoContext';
import {useRemoveElementFromArray} from '../helpers/useRemoveElementFromArray';
import { CryptoNames } from '../helpers/buildCryptoCard';
import Image from 'next/image';
import getCryptoIcon from '../helpers/getCryptoIcon';
import { CryptoCardPropType } from '../../types';
import { bgColor, colorSubtext } from './colors';


const ChooseCryptoCard: React.FC<CryptoCardPropType> = ( {tickerName, fullName, prevSelected } ) => {

  const { pageContext, setPageContext } = useContext(PageContext);
  const [isSelected, setSelected] = useState(false);
  const [icon, setIcon] = useState<string>();
  const { colorMode } = useColorMode()

  // onMount check if we have been selected before,
  // and grab the icon; to lowercase to match the file path
  useEffect(() => {
    if (prevSelected) setSelected(true);
    const assetPath = getCryptoIcon(tickerName.toLowerCase());
    setIcon(assetPath);
  }, []);

  // anytime we add/remove from favorites, check if we reset user choices
  useEffect(() => {
    if(pageContext.allUserPairs.length === 0){
      setSelected(false);
    }
  }, [pageContext.allUserPairs]);

    // onclick of crypto card
    const handleAddCrypto = (e: BaseSyntheticEvent) => {
      setSelected((priorClick) => !priorClick );
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
        w="135px"
        height="150px"
        py={1}
        px="5px"
        m={1}
        userSelect="none"
        onClick={(e) => handleAddCrypto(e)}
        borderRadius="xl"
        boxShadow="sm"
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
            pb={3}
          >
            {tickerName}
          </Heading>
          {
            icon ? 
            <Image 
              src={icon}
              loading="eager"
              // priority={true}
              width="32px"
              height="32px"
            /> : <SkeletonCircle size="5" />
          }
          <Text 
            fontStyle="italic" 
            fontSize="15px" 
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
