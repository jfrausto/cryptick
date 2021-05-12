import React, { useState, useEffect} from "react";
import {
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react"



const newPage = () => {
    return (
    
    <> 
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
      <Td>putPicturHere</Td>
      <Td>Bitcoin</Td>
      <Td isNumeric><Button bgColor="green.500">Add Bitcoin</Button></Td>
    </Tr>
  </Tbody>
  <Tfoot>
    
  </Tfoot>
</Table>
        
    </>

    )
   
}

export default newPage;