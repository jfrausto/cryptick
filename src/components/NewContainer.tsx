import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'


export const NewContainer = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor={
    light: '#fffd20', 
    dark: 'gray.900' 
  }
  const color = { 
    light: "gray.900", 
    dark: '#fffd74' 
  }


  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
