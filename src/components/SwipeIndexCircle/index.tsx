import React from 'react';
import {Box} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/icons';
import {FaCircle} from 'react-icons/fa';

interface SwipeIndexCircleProps {
  isSelected: boolean
}

const SwipeIndexCircle: React.FC<SwipeIndexCircleProps> = ({isSelected}) => {
  return (
    <>
      <Box>
        {
          isSelected ? 
          < Icon w={5} h={5} as={FaCircle}/>
          : <Icon w={3} h={3} as={FaCircle}/>
        }
      </Box>
    </>
  )
}

export default SwipeIndexCircle;
