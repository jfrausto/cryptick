  
import React, {useContext} from 'react';
import {
  Center,
  VStack,
  Heading,
  Skeleton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { TickerDisplay} from "../components/TickerDisplay";
import Img from "../public/logo.svg";
import { CryptoContext } from '../components/CryptoContext';

const CryptoDashboard :React.FC = () => {

  const { context } = useContext(CryptoContext);

  return (
    <Container 
      height="100vh" 
      p={2}
    >
      <VStack mt="8rem" spacing={8}>
        {/* ! displays current pair in view */}
        <Heading as={Center}>
          {
            context.price ? 
            context.userCurrentPair[0] :
            <Skeleton minW="220px" height="65px" />
          }
        </Heading>
        <motion.img 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5 }}
          src={Img} 
          height="100px" 
          width="100px"
        />
        <Center>
          <TickerDisplay/>
        </Center>
      </VStack>
      <DarkModeSwitch />
    </Container>
  )
}

export default CryptoDashboard;