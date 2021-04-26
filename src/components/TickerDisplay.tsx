import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
// import { NullLiteral } from 'typescript';
import { Heading, Button, Text } from '@chakra-ui/react';


export const TickerDisplay:React.FC<any> = () => {

  // const [price, setPrice] = useState("0.00");

  type ws = React.MutableRefObject<null> | React.MutableRefObject<WebSocket>;
  let webSocket: ws = useRef(null);

  // const url = "https://api.pro.coinbase.com";


  // executes on first load of this component
  useEffect(() => {
    // effect
    // create a connection to websocket
    webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

    return () => {
      // cleanup
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
    webSocket.current!.send(jsonMsg);

    // event listener that executes everytime we get a message from the socket
    webSocket.current!.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data);
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
        BTC price goes here
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
