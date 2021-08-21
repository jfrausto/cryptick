import React, {useState, useMemo} from 'react';
import { Flex, useColorMode, FlexProps, VStack} from '@chakra-ui/react';
import { PageContext, startPage } from './CryptoContext';
import DarkModeSwitch from './DarkModeSwitch';
import EditButton from './EditButton';

const Container: React.FC = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const [pageContext, setPageContext] = useState(startPage);
  const providerValue = useMemo(() => ({ pageContext, setPageContext}), [pageContext, setPageContext])

  const bgColor={
    light: 'gray.50', 
    dark: 'gray.900' 
  }
  const color = { 
    light: 'black', 
    dark: 'white' 
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      p={1}
      height="100vh"
      overflowY="scroll"
      overflowX="clip"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      >
        <PageContext.Provider value={providerValue}>
          <VStack
            position="relative"
            w={["375px", "100%", "100%", "100%"]}
            maxW={["375px", "600px", "600px", "600px"]}
          >
            {/* each page goes here */}
            {props.children}
            {/* absolutely positioned buttons fitted to this VStack */}
            <DarkModeSwitch/>
            <EditButton/>
          </VStack>
        </PageContext.Provider>
      </Flex>
  )
}

export default Container;