import React from "react";
import {
  SimpleGrid,
  Box
    
} from '@chakra-ui/react';
const layout = () => {

    return (
        <>
        <h1>PICK THE CRYPTOS YOU WANNA WATCH</h1>


<SimpleGrid style={{margin: "10px"}} columns={[2, null, 3]} spacing="20px">
  <Box  bg="tomato" height="200px"></Box>
  <Box bg="tomato" height="200px"></Box>
  <Box bg="tomato" height="200px"></Box>
  <Box bg="tomato" height="200px"></Box>
  <Box bg="tomato" height="200px"></Box>
  <Box bg="tomato" height="200px"></Box>
</SimpleGrid>
        </>
    )
}

export default layout;