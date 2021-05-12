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
 
    const [apiData, setApiData] = useState([]);

// Used solely to make unique Key for the children props for apiData.map() line 40
let i = 0;

useEffect(() => {

  const getApiData = async () => {
   const cryptoProductsList = await fetchCyrptoProducts();
   setApiData(cryptoProductsList);
   console.log(cryptoProductsList);
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
        <h1>PICK THE CRYPTOS YOU WANNA WATCH</h1>
           <SimpleGrid style={{margin: "10px"}} columns={[2, null, 3]} spacing="20px">
  
    {/* First filter data for cyrptocurrencies for USD then map the children and assigning unique key using i++ */}
  {apiData.filter(data => data.quote_currency === "USD").map((data) => (
                
  <Container key={i++}>
      
<Center>
    <Image
  borderRadius="full"
  boxSize="100px"
  src="https://img.etimg.com/thumb/msid-79280279,width-210,imgsize-678018,,resizemode-4,quality-100/bitcoin.jpg"
  alt="Bitcoin"
/>
</Center>
  
  <Text 
   style={{marginTop: "1%"}}
   fontSize="25px"
   textAlign="center">

    {(data.id).split("-USD")} <span style={{color: "red", fontSize: "16px"}}>USD</span>
  </Text>
  
  <Center>
    <Button size="lg" colorScheme="green" mt="24px">
    Add To List
  
  </Button>
  
  </Center>
  </Container>

      ))}
</SimpleGrid>

        </>
    )
}

export default pageOneLayout;
