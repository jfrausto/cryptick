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
  TableCaption,
  Image,
  Center
} from "@chakra-ui/react";

interface apiDataTypes {
    id: string,
    quote_currency: string,
};

const Index:React.FC = () => {

     const [apiData, setApiData] = useState<apiDataTypes[]>([]);

// Used solely to make unique Key for the children props for apiData.map()
let i: number = 0;

useEffect(() => {

  const getApiData = async () => {
   const cryptoProductsList = await fetchCyrptoProducts();
   setApiData(cryptoProductsList);
 }

 getApiData();

//Occurs on mount
}, []);

// Should fetch the product information about the cryptocurrency
const fetchCyrptoProducts = async () => {
  const res = await fetch("https://api.pro.coinbase.com/products");
  const data = await res.json();
  console.log(data);
  return data;
}

    return (
    <>
      <Table bg="FFFFFFEB" variant="simple" colorScheme="white">
        <Thead>
          <Tr bg="A0AEC0">
            
              
                  <Th><Text textColor="FFFFFFEB">Logo</Text></Th>
                  <Th><Text textColor="FFFFFFEB">Name</Text></Th>
                  <Th isNumeric><Text textColor="FFFFFFEB">Add To list</Text></Th>

              
          </Tr>
        </Thead>
        </Table> 
        {apiData.filter(data => data.quote_currency === "USD").map((data) => (
                      
        <Table key={i++} bg="FFFFFFEB" variant="simple" colorScheme="white">

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
            <Td>{(data.id).split("-USD")}<div style={{color: "red", fontSize: "16px", textAlign: "left"}} > USD</div></Td>
            <Td isNumeric><Button fontSize="16px" bgColor="green.500">Add {(data.id).split("-USD")}</Button></Td>
          </Tr>
        </Tbody>
        <Tfoot>
          
        </Tfoot>
      </Table>

            ))}
              <Table>
                  <TableCaption>
                      Here's a list of all the crypto's you can watch!!!!
                  </TableCaption>
              </Table>
          </>

          )
        
}

export default Index;