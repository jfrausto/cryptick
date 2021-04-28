import React, {useState, useRef, useEffect} from 'react';
import { Heading, Button, Text } from '@chakra-ui/react';

// interface TickerDisplayProps {
//   // some properties
// };

// prop types <any> for now
export const TickerDisplay:React.FC<any> = () => {

  const [price, setPrice] = useState<number>(0.00);
  const webSocket = useRef<null | WebSocket >(null);

  // const url = "https://api.pro.coinbase.com";

  // executes on first load of this component
  useEffect(() => {
    // create a connection to websocket current ref
    webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    console.log("I'm in use effect");
    return () => {
      // cleanup/close ws
      webSocket.current!.close();
    }
  }, []);

  // handle sub click
  const handleSub = () => {
    let msg = {
      type: "subscribe",
      product_ids: ["BTC-USD"],
      channels: ["ticker"]
    };
    let jsonMsg = JSON.stringify(msg);
    // send subscribe message
    webSocket.current?.send(jsonMsg);
    // event listener that executes everytime we get a message from the socket
    webSocket.current!.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data.price);
      setPrice(data.price);
    };
  };
  
  // handle unsub click
  const handleUnsub = () => {
    let unsub = {
      type: "unsubscribe",
      product_ids: ["BTC-USD"],
      channels: ["ticker"]
    };

    let jsonUnsub = JSON.stringify(unsub);
    webSocket.current!.send(jsonUnsub);
  }

  return (
    <div>
      <Heading>
        BTC-USD Ticker
      </Heading>
      <Text fontStyle="italic">
        {/* this actual price display area could be a separate component */}
        {price ? price : "subscribe to watch!"}
      </Text>
      <Button m={3} onClick={handleSub}>
        subscribe
      </Button>
      <Button m={3} onClick={handleUnsub}>
        unsubscribe
      </Button>
    </div>
  )
}
