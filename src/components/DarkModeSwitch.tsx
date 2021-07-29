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
      size="md"
      color="current"
      position="fixed"
      top="0.6rem"
      right="0.6rem"
      zIndex="overlay"
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  )
}
