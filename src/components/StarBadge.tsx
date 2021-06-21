import React from 'react';
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';


const StarBadge: React.FC = ({isSelected}) => {
  return (
    <>
      
      <Box
        position="absolute"
        borderRadius="100%"
        w="42px"
        p={1}
        pt="-1rem"
        top="-1rem"
        right="-0.66rem"
        bg="white"
      >
        <StarIcon
          mb="7px"
          mx="5px"
          
        />
      </Box>
    </>
  )
}

export default StarBadge;
