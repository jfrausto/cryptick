import React, {useState, useEffect} from 'react';
import { VStack, Heading, Center, useColorMode } from '@chakra-ui/react';

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

  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
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
      <VStack
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
        
        <Heading
        
        >
          {crypto}
        </Heading>

      </VStack>
    </>
  )
};

export default ChooseCryptoCard;
