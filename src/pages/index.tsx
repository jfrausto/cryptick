import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ChooseCryptoCard from '../components/ChooseCryptoCard';
import {compareCryptoNames} from '../components/helpers/cryptoNameSort';
import { matchCryptoInfo } from '../components/helpers/buildCryptoCard';
import DoneButtonCard from '../components/DoneButtonCard';
import { PageContext } from "../components/CryptoContext";
import { CryptoNames } from "../types";

const ChooseCrypto: React.FC = () => {

  const [apiData, setApiData] = useState<CryptoNames[]>([]);
  const { pageContext, setPageContext } = useContext(PageContext);
  const router = useRouter();

  useEffect(() => {
    const getApiData = async () => {
      const cryptoProductsList = await fetchCryptoProducts();
      setApiData(cryptoProductsList);
    }
    getApiData();
    // grab storage and load user saved pairs
    if(localStorage.getItem("savedPairs")){
      const localStore = JSON.parse(localStorage.getItem("savedPairs")!)
      setPageContext!({ ...pageContext, allUserPairs: localStore });
    }
  }, []);

  const handleDone = (): void => {
    // local storage here
    localStorage.setItem("savedPairs", JSON.stringify(pageContext.allUserPairs));
    router.push("/cryptoDashboard");
  };

  // reset favorites
  const handleReset = (): void => {
    setPageContext!({ ...pageContext, allUserPairs: [] });
  };

  // preload selected cryptos state
  const hasBeenSelected = (tName: string): boolean => {
    let selected: boolean = false;
    for (const cryptoName of pageContext.allUserPairs){
      if (cryptoName.tickerName === tName){
        selected = true;
      }
    }
    return selected;
  };

  // Should fetch the product information from coinbase
  const fetchCryptoProducts = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    const cryptoUSD = data.filter((data: { quote_currency: string; }) => data.quote_currency === "USD");
    const resCurr = await fetch("https://api.pro.coinbase.com/currencies");
    const dataCurr = await resCurr.json();
    return matchCryptoInfo(cryptoUSD, dataCurr);

  }

  return (
    <>
      <VStack
        pb={20}
      >
        <Heading
          size="md"
          pt="13px"
          >
          choose favorites
        </Heading>
        <Flex
          flexDir="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          alignContent="space-around"
          w={["375px", "100%", "100%", "100%"]}
          maxW={["375px", "600px", "600px", "600px"]}
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