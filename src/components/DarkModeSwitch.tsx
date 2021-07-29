import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';


export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      size="sm"
      color="current"
      position="absolute"
      top="0rem"
      right="0.5rem"
      zIndex="overlay"
      variant="ghost"
      onClick={toggleColorMode}
      _focus={{ 
        outline: "none"
      }}
      icon={<SwitchIcon />}
    />
  )
}
