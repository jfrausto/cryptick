import React from "react";
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';

import { NewContainer } from './NewContainer';
import { DarkModeSwitch } from './DarkModeSwitch';
// import { CTA } from './CTA';
// import { Footer } from './Footer';
// import { TickerDisplay} from "./TickerDisplay";
import NameInput from "./NameInput";

const LandingPage = () => (
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


export default LandingPage;
