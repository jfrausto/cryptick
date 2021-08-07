import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';


const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
    position="absolute"
    top="0rem"
    right="0.5rem"
    zIndex="overlay"
    // color="current"
    variant="ghost"
    size="sm"
    aria-label={`Switch to ${text} mode`}
    onClick={toggleColorMode}
      _focus={{ 
        outline: "none"
      }}
      icon={<SwitchIcon />}
    />
  )
}

export default DarkModeSwitch;