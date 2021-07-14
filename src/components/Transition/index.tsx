import { VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Transition = () => {
return(
    <>

        <VStack spacing={0}>
            <Box w={"100vw"} h={"50vh"} bg={"red"}/>
            <Box w={"100vw"} h={"50vh"} bg={"blue"}/>
        </VStack>
    
    </>
)
}