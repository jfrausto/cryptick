import React, { useEffect, useState } from 'react';
import {
  Heading,
  Box,
  Center,
  Text,
  Button,
  Image
  
} from '@chakra-ui/react';

export default function ApiTracker() {


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

//Occurs on load
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
    <h1>
     
     Hello There

    </h1>
    <div>
      <p>
        TEMP CARD FOR CRYPTOS
      </p>
      <br/>

        

<Box maxW="32rem">

  
<Center>
    <Image
  borderRadius="full"
  boxSize="150px"
  src="https://img.etimg.com/thumb/msid-79280279,width-210,imgsize-678018,,resizemode-4,quality-100/bitcoin.jpg"
  alt="Bitcoin"
/>
</Center>
  
  <Text 
   style={{marginTop: "1%"}}
   fontSize="60px"
   textAlign="center">

    Bitcoin <span style={{color: "red", fontSize: "40px"}}>USD</span>
  </Text>
  
  <Center>
    <Button size="lg" colorScheme="green" mt="24px">
    Add To List
  
  </Button>
  
  </Center>
  
</Box>
      
      {/* First filter data for cyrptocurrencies for USD then map the children and assigning unique key using i++
      {apiData.filter(data => data.quote_currency === "USD").map((data) => (
        <div key={i++}>
        
        <h3>{data.id}<span style={{color: "red", fontSize: "13px"}}>  {data.quote_currency} </span></h3>
        
        </div>
      ))} */}
    </div>
  </>
 )

}