import { VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Transition = () => {
return(
    <>

        <VStack style={{position: "absolute"}} spacing={0}>
            <Box  w={"100vw"} h={"50vh"} bg={"red"}>
                <text style={{right: "45vw", position: "relative", left: "39vw", top: "41vh", font: "80px"}}>Cryptick</text>
            </Box>
            <Box w={"100vw"} h={"50vh"} bg={"blue"}/>
        </VStack>
    
    </>
)
}