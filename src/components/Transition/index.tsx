import { VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Transition = () => {
return(
    <>
        <VStack style={{position: "absolute"}} spacing={0}>
           <motion.div
      animate={{
        translateY: "-460px"
      }}
      transition={{
        delay: 1,
        duration: 0.66,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        // To be able to keep seeing the animation 
        // loop: Infinity,
        // repeatDelay: 1,
      }}
           >
                <Box w={"100vw"} h={"50vh"} bg={"red"}>
                <text style={{ position: "relative", left: "39vw", top: "41vh", fontSize: "80px"}}>Cryptick</text>
            </Box>
           </motion.div>

           <motion.div
    animate={{
        scaleY: 0.00000001,
        transformOrigin: "bottom"
      }}
    transition={{
        delay: 1,
        duration: 0.66,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        //To be able to keep seeing the animation 
        // loop: Infinity,
        // repeatDelay: 1,
      }}>
            <Box w={"100vw"} h={"50vh"} bg={"blue"}/>
            </motion.div>
        </VStack>
    
    </>
)
}