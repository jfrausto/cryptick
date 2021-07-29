import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
// import router from 'next/router';
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <IconButton
        variant="ghost"
        position="absolute"
        top="0rem"
        left="0.5rem"
        zIndex="overlay"
        size="sm"
        aria-label="edit favorites"
        icon={<EditIcon/>}
        isDisabled={ router.pathname === "/ChooseCrypto" ? 
          true : false
        }
        onClick={ (e) => {
          e.preventDefault();
          router.push("/ChooseCrypto");
        }}
        _focus={{ 
          outline: "none"
        }}
      />
    </>
  )
}

export default Index
