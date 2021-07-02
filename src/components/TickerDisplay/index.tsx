  
import React, {useContext, useRef, useEffect} from 'react';
import { Button, Center} from '@chakra-ui/react';
import { PriceDisplay } from '../PriceDisplay';
import { CryptoContext, DispatchContext, PageContext } from '../CryptoContext';
import { Display24Hr } from '../Display24Hr';
import { use24HrPercentage } from '../helpers/use24HrPercentage';


// prop types <any> for now
export const TickerDisplay:React.FC = () => {

  const {pageContext} = useContext(PageContext);
  const {context} = useContext(CryptoContext);
  const {dispatch} = useContext(DispatchContext)
  const webSocket = useRef<null | WebSocket >(null);
  const priceRef = useRef<number>(0.00);

  // const url = "https://api.pro.coinbase.com";

  // on first load of this component
  useEffect(() => {

    // dispatch({
    //   type: "set_current_pair",
    //   payload: [pageContext.allUserPairs[0]]
    // });
    // set current pair
    webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    console.log("opening Websocket...")
    // when it opens start the stream
    webSocket.current.onopen = (e) => {
      console.log("Websocket opened!")
      startStream();
      console.info(e);
      // console.log()
    }
    return () => {
      // cleanup/close websocket
      console.log("closing websocket...");
      webSocket.current!.close();
      console.log("websocket closed")
    }
  }, [context.userCurrentPair]);

  // on change of the price
  useEffect(() => {
    // ? see differences ?
    // ? console.log(price);
    // ? console.log(priceRef.current )
    if (priceRef.current >= context.price){
      dispatch({ type: "arrow_up", payload: false });
    } else {
      dispatch({ type: "arrow_up", payload: true });

    }
    // update previous price reference
    priceRef.current = context.price;
    return () => {
    }
  }, [context.price])

  const startStream = () => {
    console.log(`starting stream with ${context.userCurrentPair[0]}...`);
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
      // console.log(data);
      //sets price and 24h percent change
      dispatch({ 
        type: "set_price", 
        price: data.price, 
        percentageChange: use24HrPercentage(data.open_24h, data.price)
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
      <Center>
        <PriceDisplay />
      </Center>
      <Center>
        <Display24Hr/>
      </Center>
      <Center>
        <Button m={3} onClick={handleUnsub}>
          unsubscribe
        </Button>
      </Center>

    </div>
  )
}