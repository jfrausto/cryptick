import {
 Center,
 VStack,
 Heading,
 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, {useContext} from 'react';
import { Container } from './Container';
import { DarkModeSwitch } from './DarkModeSwitch';
// import { CTA } from './CTA';
// import { Footer } from './Footer';
import { TickerDisplay} from "./TickerDisplay";
import Img from "../public/logo.svg";
import { CryptoContext } from './CryptoContext';



const CryptoDashboard :React.FC = () => {

 const { context } = useContext(CryptoContext);


 return (
 <Container 
   height="100vh" 
   p={2}
 >
   <VStack mt="8rem" spacing={8}>
     <Heading as={Center}>
       {context.userCurrentPair[0]}
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