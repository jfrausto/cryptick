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
        position="fixed"
        top="0.6rem"
        left="0.6rem"
        zIndex="overlay"
        size="md"
        aria-label="edit favorites"
        icon={<EditIcon/>}
        isDisabled={ router.pathname === "/ChooseCrypto" ? 
          true : false
        }
        onClick={ (e) => {
          e.preventDefault();
          router.push("/ChooseCrypto");
        }}
      />
    </>
  )
}

export default Index
