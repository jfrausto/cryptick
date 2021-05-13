import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Center,
  Text,
  Button,
  Image,
  Container

} from '@chakra-ui/react';

const pageOneLayout = () => {
 
   
    return (
        <>
        <h1>PICK THE CRYPTOS YOU WANNA WATCH</h1>
           <SimpleGrid style={{margin: "10px"}} columns={[2, null, 3]} spacing="20px">
  
    {/* First filter data for cyrptocurrencies for USD then map the children and assigning unique key using i++ */}
  {apiData.filter(data => data.quote_currency === "USD").map((data) => (
                
  <Table bg="FFFFFFEB" variant="simple" colorScheme="white">
  <TableCaption>List of available cryptos to watch</TableCaption>
  <Thead>
    <Tr bg="A0AEC0">
      
        
            <Th><Text textColor="FFFFFFEB">Logo</Text></Th>
            <Th><Text textColor="FFFFFFEB">Name</Text></Th>
            <Th isNumeric><Text textColor="FFFFFFEB">Add To list</Text></Th>

        
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td> 

        <Center>
            <Image
  borderRadius="full"
  boxSize="60px"
  src="https://img.etimg.com/thumb/msid-79280279,width-210,imgsize-678018,,resizemode-4,quality-100/bitcoin.jpg"
  alt="Bitcoin"
/>
        </Center>

      </Td>
      <Td>Bitcoin</Td>
      <Td isNumeric><Button bgColor="green.500">Add Bitcoin</Button></Td>
    </Tr>
  </Tbody>
  <Tfoot>
    
  </Tfoot>
</Table>

      ))}
</SimpleGrid>

        </>
    )
}

export default pageOneLayout;
