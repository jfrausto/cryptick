import {
  Center,
  VStack,
  Heading,
} from '@chakra-ui/react';

import { NewContainer } from '../components/NewContainer';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
// import { CTA } from '../components/CTA';
// import { Footer } from '../components/Footer';
import { TickerDisplay} from "../components/TickerDisplay";


const Index = () => (
  <NewContainer 
    height="100vh" 
    p={2}
  >

    <VStack mt="8rem" spacing={8}>
          <Heading style={{fontSize: "100px", textAlign: "center"}} as={Center}>
            Who is You?
          </Heading>
          {/* <motion.img 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5 }}
            src={Img} 
            height="100px" 
            width="100px"
          /> */}
    </VStack>
    

    <DarkModeSwitch />
  </NewContainer>
)

export default Index
