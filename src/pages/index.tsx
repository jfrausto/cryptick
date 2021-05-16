import {
  Center,
  VStack,
  Heading,
  
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
// import { CTA } from '../components/CTA';
// import { Footer } from '../components/Footer';
import { TickerDisplay} from "../components/TickerDisplay";
import Img from "../public/logo.svg";

const Index = () => (
  <Container 
    height="100vh" 
    p={2}
  >

    <VStack mt="8rem" spacing={8}>
          <Heading as={Center}>
            crypto ticker
          </Heading>
          <motion.img 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5 }}
            src={Img} 
            height="100px" 
            width="100px"
          />
          <Center>
            <TickerDisplay cryptoPair="BTC-USD"/>
          </Center>
    </VStack>
    

    <DarkModeSwitch />
  </Container>
)

export default Index
