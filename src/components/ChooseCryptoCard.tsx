import React, {useState, useEffect, MouseEventHandler} from 'react';
import { VStack, Heading, Center, Box, useColorMode } from '@chakra-ui/react';
import StarBadge from './StarBadge';

interface CardPropType {
  crypto: string
};

const ChooseCryptoCard: React.FC<CardPropType> = ( {crypto} ) => {

  const { colorMode } = useColorMode()
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
    console.log("clicked");
    setSelected((priorClick)=> !priorClick );
  }

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
        onClick={handleClick}
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
              "100px" : "0"
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
