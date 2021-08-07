import React from "react";
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';
import {NameInput} from "../components/NameInput";

const IntroName = () => (
  <>
    <VStack mt="8rem" spacing={8}>
          <Heading style={{fontSize: "100px", textAlign: "center"}} as={Center}>
            Enter your name:
          </Heading>
          <NameInput/>
    </VStack>
  </>
)

export default IntroName;
