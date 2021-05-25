  
import React, {useContext, useRef, useEffect} from 'react';
import { Button, Center, Stat, StatHelpText, StatArrow, useColorModeValue } from '@chakra-ui/react';
import { PriceDisplay } from './PriceDisplay';
import { CryptoContext } from '../components/CryptoContext';
import { use24HrPercentage } from './helpers/use24HrPercentage';

// prop types <any> for now
export const TickerDisplay:React.FC = () => {

  const {context, setContext} = useContext(CryptoContext);
  const webSocket = useRef<null | WebSocket >(null);
  const priceRef = useRef<number>(0.00);

  // const url = "https://api.pro.coinbase.com";

  // on first load of this component
  useEffect(() => {
    webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    // when it opens start the stream
    webSocket.current.onopen = (e) => {
      startStream();
      console.info(e);
    }
    return () => {
      // cleanup/close websocket
      webSocket.current!.close();
    }
  }, []);

  // on change of the price
  useEffect(() => {
    // ? see differences ?
    // ? console.log(price);
    // ? console.log(priceRef.current )
    if (priceRef.current >= context.price){
      setContext!({
        ...context, 
        isGoingUp: false
      });
    } else {
      setContext!({
        ...context, 
        isGoingUp: true
      });
    }
    // update previous price reference
    priceRef.current = context.price;
    return () => {
    }
  }, [context.price])

  // ! right now only subscribing BTC price
  const startStream = () => {
    let msg = {
      type: "subscribe",
      product_ids: context.userCurrentPair,
      channels: ["ticker"]
    };
    let jsonMsg = JSON.stringify(msg);
    // send subscribe message if not null
    webSocket.current?.send(jsonMsg);
    // error listener
    webSocket.current!.onerror = (e) => {
      console.info(e);
    };
    // event listener that executes every  time we get a message from the socket
    webSocket.current!.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data);
      //sets price and 24h percent change
      setContext!({
        ...context, 
        price: data.price,
        dayChangePercentage: use24HrPercentage(data.open_24h, data.price)
      });
    };
  };
  
  // handle unsub click, unsubscribes from the BTC ticker
  const handleUnsub = () => {
    let unsub = {
      type: "unsubscribe",
      product_ids: context.userCurrentPair,
      channels: ["ticker"]
    };
    let jsonUnsub = JSON.stringify(unsub);
    webSocket.current!.send(jsonUnsub);
  }

  return (
    <div>
      {/* <Heading textAlign="center" mb={3}>
        BTC-USD
      </Heading> */}
      <Center>
        <PriceDisplay 
          // price={context.price} 
          // isGoingUp={context.isGoingUp} 
        />
      </Center>
      <Center>
        <Stat as={Center}>
          <StatHelpText
          fontWeight="bold"
            color={context.dayChangePercentage >= 0 ? useColorModeValue("green.800", "green.300") : useColorModeValue("red.900", "red.300")}
          >
            <StatArrow type={context.dayChangePercentage >= 0 ? "increase" : "decrease"}/>
            {context.dayChangePercentage >= 0 ? `+${context.dayChangePercentage}% 24h` : `-${context.dayChangePercentage}% 24h`}
          </StatHelpText>
        </Stat>
      </Center>
      <Center>
        <Button m={3} onClick={handleUnsub}>
          unsubscribe
        </Button>
      </Center>

    </div>
  )
}