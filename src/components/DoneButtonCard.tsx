import React, {useContext} from 'react';
import {  VStack, Box, Button, Text, useColorMode } from '@chakra-ui/react';
import { PageContext } from './CryptoContext';

interface DoneCardProps {
  handleDone: () => void
}

const DoneButtonCard: React.FC<DoneCardProps> = ({handleDone}) => {

  const { pageContext } = useContext(PageContext);
  const { colorMode } = useColorMode();
  const themeBg = {
    light: "white",
    dark: "blue.900"
  };
  const themeText = {
    light: "blue.900",
    dark: "white"
  }


  return (
    <>
      <VStack
        p={4}
        borderTopRightRadius="2xl"
        borderTopLeftRadius="2xl"
        zIndex="overlay"
        position="fixed"
        bottom="0"
        bg={themeBg[colorMode]}
        color={themeText[colorMode]}
      >

        <Box>
          <Text
            fontStyle="italic"
          >
            {pageContext.allUserPairs.length} Favorites
          </Text>
        </Box>

        <Box>
          <Button
            colorScheme="cyan"
            onClick={handleDone}
          >
            Done
          </Button>
        </Box>

      </VStack>
    </>
  )
}

export default DoneButtonCard;
