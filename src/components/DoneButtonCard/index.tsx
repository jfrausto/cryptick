import React, {useContext} from 'react';
import {  VStack, Box, Button, Text, useColorMode, Code } from '@chakra-ui/react';
import { PageContext } from '../CryptoContext';

interface DoneCardProps {
  handleDone: () => void,
  handleReset: () => void
}

const DoneButtonCard: React.FC<DoneCardProps> = ({handleDone, handleReset}) => {

  const { pageContext } = useContext(PageContext);
  const { colorMode } = useColorMode();
  const themeBg = {
    light: "white",
    dark: "gray.800"
  };
  const themeText = {
    light: "blue.900",
    dark: "white"
  }


  return (
    <>
      <VStack
        p={3}
        borderTopRightRadius="2xl"
        borderTopLeftRadius="2xl"
        w="300px"
        zIndex="overlay"
        position="fixed"
        bottom="0"
        bg={themeBg[colorMode]}
        color={themeText[colorMode]}
      >

        <Box
          mb="3px"
        >
          <Text
            fontStyle="bold"
          >
            <Code mr={1} py={1} px={2}>{pageContext.allUserPairs.length}</Code> favorites
          </Text>
        </Box>

        <Box>
          <Button
            // colorScheme="red"
            variant="ghost"
            mr={3}
            onClick={handleReset}
            _focus={{ 
              outline: "none"
            }}
          >
            reset
          </Button>
          <Button
            colorScheme="green"
            ml={3}
            onClick={handleDone}
            isDisabled={pageContext.allUserPairs.length === 0}
            _focus={{ 
              outline: "none"
            }}
          >
            done
          </Button>
        </Box>

      </VStack>
    </>
  )
}

export default DoneButtonCard;
