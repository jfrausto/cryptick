import React from "react";
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
// import { CTA } from '../components/CTA';
// import { Footer } from '../components/Footer';
// import { TickerDisplay} from "../components/TickerDisplay";
import {NameInput} from "../components/NameInput";
import {Container} from '../components/Container';

const Index = () => (
  <Container
    height="100vh"
  >
    <VStack mt="8rem" spacing={8}>
          <Heading style={{fontSize: "100px", textAlign: "center"}} as={Center}>
            Enter your name:
          </Heading>
          <NameInput/>


    </VStack>
    <DarkModeSwitch />
  </Container>
)


export default Index;
