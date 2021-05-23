import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import Img from "../";
import { motion } from 'framer-motion';

export const NewContainer = (props: FlexProps) => {
  const { colorMode } = useColorMode()

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
      backgroundImage={Img}
      color={color[colorMode]}
      {...props}
    />
  )
}
