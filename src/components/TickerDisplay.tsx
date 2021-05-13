  
import React, {useState, useRef, useEffect} from 'react';
import { Heading, Button, Center } from '@chakra-ui/react';
import { PriceDisplay } from './PriceDisplay';

interface TickerDisplayProps {
  cryptoPair: string
};

// prop types <any> for now
export const TickerDisplay:React.FC<TickerDisplayProps> = ({ cryptoPair }) => {

  const [price, setPrice] = useState<number>(0.00);
  const [isGoingUp, setIsGoingUp] = useState<boolean>(false);
  const webSocket = useRef<null | WebSocket >(null);
  const priceRef = useRef<number>(0.00);

  // const url = "https://api.pro.coinbase.com";

  // executes on first load of this component
  useEffect(() => {
    // create a connection to websocket current ref
    webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    // when it opens start the stream
    webSocket.current.onopen = (e) => {
      startStream();
      console.info(e);
    }
    return () => {
      // cleanup/close ws
      webSocket.current!.close();
    }
  }, []);

  useEffect(() => {
    // see differences
    // console.log(price);
    // console.log(priceRef.current )
    if (priceRef.current >= price){
      setIsGoingUp(false);
    } else {
      setIsGoingUp(true);
    }
    // update previous price reference
    priceRef.current = price;
    return () => {
    }
  }, [price])

  // send the msg to websocket to start stream of info
  // ! right now only subscribing BTC, ETH price
  const startStream = () => {
    let msg = {
      type: "subscribe",
      product_ids: [cryptoPair],
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
      setPrice(data.price);
    };
  };
  
  // handle unsub click, unsubscribes from the BTC ticker
  const handleUnsub = () => {
    let unsub = {
      type: "unsubscribe",
      product_ids: [cryptoPair],
      channels: ["ticker"]
    };
    let jsonUnsub = JSON.stringify(unsub);
    webSocket.current!.send(jsonUnsub);
  }

  return (
    <div>
      <Heading textAlign="center" mb={3}>
        BTC-USD
      </Heading>
      <Center>
        <PriceDisplay price={price} isGoingUp={isGoingUp} />
      </Center>
      <Center>
        <Button m={3} onClick={handleUnsub}>
          unsubscribe
        </Button>
      </Center>

    </div>
  )
}