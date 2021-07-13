import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Heading,
  VStack
} from "@chakra-ui/react";
// import router from 'next/router';
import { useRouter } from "next/router";
import ChooseCryptoCard from '../components/ChooseCryptoCard';
import {compareCryptoNames} from '../components/helpers/cryptoNameSort';
import { matchCryptoInfo, CryptoNames } from '../components/helpers/buildCryptoCard';
import DoneButtonCard from '../components/DoneButtonCard';
import { PageContext } from "../components/CryptoContext";

const ChooseCrypto: React.FC = () => {

  const [apiData, setApiData] = useState<CryptoNames[]>([]);
  const { pageContext, setPageContext } = useContext(PageContext);
  const router = useRouter();



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
    setPageContext!({ ...pageContext, allUserPairs: [] });
  };

  const hasBeenSelected = (tName: string): boolean => {
    let result = false;
    for (const stringyObj of pageContext.allUserPairs){
      if (JSON.parse(stringyObj).tickerName === tName){
        result = true;
      }
    }
    return result;
  };

  // Should fetch the product information from coinbase
  const fetchCyrptoProducts = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    const cryptoUSD = data.filter((data: { quote_currency: string; }) => data.quote_currency === "USD");
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
      <VStack
        pb={16}
      >
        <Heading
          size="lg"
          alignSelf="center"
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
              hasBeenSelected(data.tickerName) ?
              <ChooseCryptoCard
                key={data.tickerName}
                tickerName={data.tickerName}
                fullName={data.fullName}
                prevSelected={true}
              /> :
              <ChooseCryptoCard
                key={data.tickerName}
                tickerName={data.tickerName}
                fullName={data.fullName}
                prevSelected={false}
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