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
        top="1rem"
        left="1rem"
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
