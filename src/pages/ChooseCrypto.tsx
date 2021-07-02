import React, { useState, useEffect, useContext} from "react";
import {
  Flex,
  Heading,
  VStack
} from "@chakra-ui/react";
import router from 'next/router';
import ChooseCryptoCard from '../components/ChooseCryptoCard';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import {compareCryptoNames} from '../components/helpers/cryptoNameSort';
import { matchCryptoInfo, CryptoNames } from '../components/helpers/buildCryptoCard';
import DoneButtonCard from '../components/DoneButtonCard';
import { PageContext } from "../components/CryptoContext";

const ChooseCrypto:React.FC = () => {

  const [apiData, setApiData] = useState<CryptoNames[]>([]);
  const { pageContext, setPageContext } = useContext(PageContext);


  useEffect(() => {

    const getApiData = async () => {
    const cryptoProductsList = await fetchCyrptoProducts();
    setApiData(cryptoProductsList);
  }

  getApiData();

  //Occurs on mount
  }, []);

  const handleDone = (): void => {
    router.push("/cryptoDashboard");
  };

  const handleReset = (): void => {
    console.log("reset");
    setPageContext!({...pageContext, allUserPairs: []});
  };

  // Should fetch the product information from coinbase
  const fetchCyrptoProducts = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    const cryptoUSD = data.filter( (data: { quote_currency: string; }) => data.quote_currency === "USD");
    const resCurr = await fetch("https://api.pro.coinbase.com/currencies");
    const dataCurr = await resCurr.json();
    return matchCryptoInfo(cryptoUSD, dataCurr);;

  }
//   const checkForUserName = () => {
//   const userName = localStorage.getItem("userName");

//   return userName;
// }

    return (
    <>
      {/* <Container
        height="100vh"
        pt={3}
        pb={16}
        overflowY="scroll"
        // maxWidth="420px"
      > */}
      <VStack
        pb={16}
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

      </VStack>
        <DoneButtonCard
          handleDone={handleDone}
          handleReset={handleReset}
          />
    </>

          )
        
}

export default ChooseCrypto;