import React, { useState, useEffect, BaseSyntheticEvent} from "react";
import {
  Flex,
  Heading
} from "@chakra-ui/react";
import router from 'next/router';
import ChooseCryptoCard from '../components/ChooseCryptoCard';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import {compareCryptoNames} from '../components/helpers/cryptoNameSort';
import { matchCryptoInfo, CryptoNames } from '../components/helpers/buildCryptoCard';
import DoneButtonCard from '../components/DoneButtonCard';

const ChooseCrypto:React.FC = () => {

  const [apiData, setApiData] = useState<CryptoNames[]>([]);
  // const { dispatch } = useContext(DispatchContext);
  // const { pageContext } = useContext(PageContext);


  useEffect(() => {

    const getApiData = async () => {
    const cryptoProductsList = await fetchCyrptoProducts();
    setApiData(cryptoProductsList);
  }

  getApiData();

  //Occurs on mount
  }, []);



  const handleDone = (): void => {
    console.log("done");
    // setPageContext!({
    //   ...pageContext, 
    //   userCurrentPair: [pageContext.allUserPairs[0]]
    // })
    // ! set userCurrentPair inside the Dashboard!
    // dispatch({
    //   type: SET_CURRENT_PAIR,
    //   payload: [context.allUserPairs[0]]
    // })
    router.push("/cryptoDashboard");
  }

  // Should fetch the product information about the cryptocurrency
  const fetchCyrptoProducts = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    // console.log(data.filter( data => data.quote_currency === "USD"));
    const cryptoUSD = data.filter( data => data.quote_currency === "USD");
    // ! this call gets all currencies, 
    // ! eventually we want to match pairs 
    // ! with their full product name ie. "ETH-USD" => "Ethereum"
    const resCurr = await fetch("https://api.pro.coinbase.com/currencies");
    const dataCurr = await resCurr.json();
    // console.log(dataCurr);
    return matchCryptoInfo(cryptoUSD, dataCurr);;

  }
    const checkForUserName = () => {
  const userName = localStorage.getItem("userName");

  return userName;
}

    return (
    <>
      <Container
        height="100vh"
        pt={3}
        pb={10}
        overflowY="scroll"
        // maxWidth="420px"
      >
        <Heading
          size="lg"
          alignSelf="start"
          pl="4"
        >
          Choose Favorites
        </Heading>
        <Flex
          flexDir="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          alignContent="space-around"
          maxWidth="400px"
          marginX="auto"
          p="4"
          px="2"
        >

          {
            apiData.sort(compareCryptoNames).map( data => (
              <ChooseCryptoCard
                key={data.tickerName}
                tickerName={data.tickerName}
                fullName={data.fullName}
              />
            ))
          }
        
        </Flex>

        <DoneButtonCard
          handleDone={handleDone}
        />
        <DarkModeSwitch />
      </Container>


        {/* <Heading>Hello,<span> </span> 
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
              </Center> */}



          </>

          )
        
}

export default ChooseCrypto;