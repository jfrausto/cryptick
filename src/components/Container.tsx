import React, {useState, useMemo} from 'react';
import { Flex, useColorMode, FlexProps, VStack, Box, Center } from '@chakra-ui/react';

import { PageContext, startPage } from './CryptoContext';
import { DarkModeSwitch } from './DarkModeSwitch';
import EditButton from './EditButton';

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const [pageContext, setPageContext] = useState(startPage);
  // const providerValue = useMemo(() => ({ context, dispatch}), [context, dispatch])

  const providerValue = useMemo(() => ({ pageContext, setPageContext}), [pageContext, setPageContext])

  const bgGradient = { 
    light: 'linear-gradient(217deg, rgba(215,0,0,.4), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,215,0,.4), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,215,.5), rgba(0,0,255,0) 70.71%);', 
    dark: 'linear-gradient(217deg, rgba(215,0,0,.4), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,215,0,.4), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,215,.5), rgba(0,0,255,0) 70.71%);' 
  }
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
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      // position="relative"
      {...props}
      >
      <PageContext.Provider value={providerValue}>


          <VStack
            position="relative"
            // h="1000px"
            w={["375px", "100%", "100%", "100%"]}
            maxW={["375px", "600px", "600px", "600px"]}
            // bg="purple"
            // overflowY="auto"
            // top="0"
            // bottom="0"
          >
            {props.children}
            <DarkModeSwitch/>
            <EditButton/>

          </VStack>

      </PageContext.Provider>
      </Flex>
  )
}
