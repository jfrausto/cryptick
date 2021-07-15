import React from "react";
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';

import {Transition} from "../components/Transition";
import { motion } from "framer-motion";


const Index = () => (
  
  <>
  
  <Transition/>


    <motion.div
    style={{opacity: 0}}

    animate={{
        opacity: 1
      }}

    transition={{
        delay: 1.3,
        duration: 0.66,
        ease: "easeInOut",
        //To be able to keep seeing the animation 
        // loop: Infinity,
        // repeatDelay: 1,
      }}

    >

    <VStack mt="8rem" spacing={8} >
          <Heading 
          style={{fontSize: "100px", textAlign: "center"}} 
          as={Center}
          >
            
            Hey There Welcome to Here
          
          </Heading>
    </VStack>
    </motion.div>


    

  </>
)


export default Index;
