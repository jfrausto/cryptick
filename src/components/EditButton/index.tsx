import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useRouter } from "next/router";

const EditButton: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <IconButton
        position="absolute"
        top="0rem"
        left="0.5rem"
        zIndex="overlay"
        variant="ghost"
        size="sm"
        aria-label="edit favorites"
        icon={<EditIcon/>}
        isDisabled={ router.pathname === "/ChooseCrypto" ? 
          true : false
        }
        onClick={ (e) => {
          e.preventDefault();
          router.push("/");
        }}
        _focus={{ 
          outline: "none"
        }}
      />
    </>
  )
}

export default EditButton;
