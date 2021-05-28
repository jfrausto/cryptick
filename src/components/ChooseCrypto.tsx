import React, { useState, useEffect, useContext, BaseSyntheticEvent} from "react";
import {
  Text,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Center,
  Box
} from "@chakra-ui/react";
import { CryptoContext } from './CryptoContext';
import router from 'next/router';


interface apiDataTypes {
    id: string,
    quote_currency: string,
};

const ChooseCrypto:React.FC = () => {

  const [apiData, setApiData] = useState<apiDataTypes[]>([]);
  const { context, setContext } = useContext(CryptoContext);


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

  // onclick of button
  const handleAddCrypto = (e:BaseSyntheticEvent) => {
    console.log(e.target.dataset.crypto);
    const chosenPair = e.target.dataset.crypto;
    if(context.allUserPairs.includes(chosenPair)){
      console.log("already chosen!");
      return;
    }
    setContext!({...context, allUserPairs: context.allUserPairs.concat(chosenPair)});
  };

  const handleDone = (e:BaseSyntheticEvent) => {
    console.log("done");
    setContext!({
      ...context, 
      userCurrentPair: [context.allUserPairs[0]]
    });
    router.push("/CryptoDashboard");
  }


  // Should fetch the product information about the cryptocurrency
  const fetchCyrptoProducts = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    console.log(data);
    // ! this call gets all currencies, 
    // ! eventually we want to match pairs 
    // ! with their full product name ie. "ETH-USD" => "Ethereum"
    const resCurr = await fetch("https://api.pro.coinbase.com/currencies");
    const dataCurr = await resCurr.json();
    console.log(dataCurr);
    return data;

  }
    const checkForUserName = () => {
  const userName = localStorage.getItem("userName");

  return userName;
}

    return (
    <>
        <Heading>Hello,<span> </span> 
          {localStorage.getItem("userName")?
          checkForUserName(): "..."}
    </Heading>
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
            <Td isNumeric><Button fontSize="16px" data-crypto={data.id} bgColor="green.500" onClick={(e) => {handleAddCrypto(e)}}>Add {(data.id).split("-USD")}</Button></Td>
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

              <Center>
                <Box maxW="300px">
                  <Button onClick={(e) => {handleDone(e)}}>
                    Done!
                  </Button>
                </Box>
              </Center>
          </>

          )
        
}

export default ChooseCrypto;