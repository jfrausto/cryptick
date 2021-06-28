import React, {useState, useEffect, MouseEventHandler, useContext, BaseSyntheticEvent} from 'react';
import { VStack, Heading, Center, Box, useColorMode } from '@chakra-ui/react';
import StarBadge from './StarBadge';
import {PageContext } from '../components/CryptoContext';


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

  const handleClick = () => {

  }

    // onclick of button
    const handleAddCrypto = (e: BaseSyntheticEvent) => {
      // console.log(e.target.dataset.crypto);
      console.log("clicked");
      setSelected((priorClick)=> !priorClick );

      // const chosenPair = e.target.dataset.crypto;
      const chosenPair = crypto+"-USD";
      // console.log(e);
      // return;
      // console.log(chosenPair);
      console.log(pageContext.allUserPairs.includes(chosenPair));
      if(pageContext.allUserPairs.includes(chosenPair)){
        console.log("already chosen, remove it!");
        const arrCopy = [...pageContext.allUserPairs];
        const index = arrCopy.indexOf(chosenPair);
        arrCopy.splice(index, 1);
        console.log("index of element is..." + index);
        console.log(arrCopy)
        setPageContext!({...pageContext, allUserPairs:arrCopy })
        return;
      }
      setPageContext!({...pageContext, allUserPairs: pageContext.allUserPairs.concat(chosenPair)});
    };

  // useEffect(() => {
  //   // effect

  //   return () => {
  //     // cleanup
  //   }
  // }, [isSelected]);

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
        // mx="auto"
        height="180px"
        userSelect="none"
        onClick={(e) => handleAddCrypto(e)}
        // data-crypto={crypto+"-USD"}
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
        <VStack

        >

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
