import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
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
      // ! import all the icons and map add them to the matching crypto object 
      // for loop
      // create a new array that 
      // iterate through the crypto products list;
      // import the appropriate icon that matches this product
      // add the icon, along with the ticker name and full name to the new array
      // set this newly built array as the apiData.
      // ! then you can pass the props to the crypto card component
      // const appendIconArray:any  = [];
      // // using newArray as the appended array makes it into type Promise.
      // const newArray = cryptoProductsList.map( (tickerInfo) => {
      //   const icon = getCryptoIcon(tickerInfo.tickerName.toLowerCase());
      //   console.table({
      //     tickerName: tickerInfo.tickerName,
      //     fullName: tickerInfo.fullName,
      //     iconSrc: icon
      //   });
      //   appendIconArray.push({
      //     tickerName: tickerInfo.tickerName,
      //     fullName: tickerInfo.fullName,
      //     iconSrc: icon
      //   })
      // });
      // console.table(appendIconArray);
      setApiData(cryptoProductsList);
    }

    getApiData();

    if(localStorage.getItem("savedPairs")){
      const localStore = JSON.parse(localStorage.getItem("savedPairs")!)
      console.table(localStore);

      setPageContext!({ ...pageContext, allUserPairs: localStore });
    }

    //Occurs on mount
  }, []);

  const handleDone = (): void => {
    // local storage here
    localStorage.setItem("savedPairs", JSON.stringify(pageContext.allUserPairs));
    router.push("/cryptoDashboard");
  };

  const handleReset = (): void => {
    console.log("reset");
    setPageContext!({ ...pageContext, allUserPairs: [] });
  };

  const hasBeenSelected = (tName: string): boolean => {
    let result = false;
    for (const cryptoName of pageContext.allUserPairs){
      if (cryptoName.tickerName === tName){
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
    return matchCryptoInfo(cryptoUSD, dataCurr);

  }
  //   const checkForUserName = () => {
  //   const userName = localStorage.getItem("userName");

  //   return userName;
  // }

  return (
    <>
      <VStack
        pb={20}
        // bg="red"
        // w="375px"
        
      >
        <Heading
          size="md"
          // alignSelf="center"
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
          // w="375px"
          w={["375px", "100%", "100%", "100%"]}
          maxW={["375px", "600px", "600px", "600px"]}
          // maxWidth="375px"
          // overflowY="auto"
          // marginX="auto"
          // py={3}
          // pt={2}
          // px={1}
          >
          {
            apiData.sort(compareCryptoNames).map( data => (
              hasBeenSelected(data.tickerName) ?
              <ChooseCryptoCard
                key={data.tickerName}
                tickerName={data.tickerName}
                fullName={data.fullName}
                prevSelected={true}
                // iconSrc={data.iconSrc}

              /> :
              <ChooseCryptoCard
                key={data.tickerName}
                tickerName={data.tickerName}
                fullName={data.fullName}
                prevSelected={false}
                // iconSrc={data.iconSrc}

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