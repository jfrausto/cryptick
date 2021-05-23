import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';

import { NewContainer } from '../components/newContainer';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
// import { CTA } from '../components/CTA';
// import { Footer } from '../components/Footer';
// import { TickerDisplay} from "../components/TickerDisplay";
import NameInput from "../components/nameInput";

const Index = () => (
  <NewContainer 
    height="100vh" 
    p={2}
  >

    <VStack mt="8rem" spacing={8}>
          <Heading style={{fontSize: "100px", textAlign: "center"}} as={Center}>
            Who is You?
          </Heading>

          <NameInput/>


    </VStack>
    

    <DarkModeSwitch />
  </NewContainer>
)

export default Index
