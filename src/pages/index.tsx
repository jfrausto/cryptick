import React from "react";
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';

import {Transition} from "../components/Transition";

const Index = () => (
  
  <>
  
  <Transition/>


    
    <VStack mt="8rem" spacing={8} >
          <Heading 
          class="animate__animated animate__bounce animate__delay-2s"
          style={{fontSize: "100px", textAlign: "center"}} 
          as={Center}
          >
            
            Enter your name:
          
          </Heading>
          


    </VStack>

  </>
)


export default Index;
