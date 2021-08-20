  
import React, {useContext, useRef, useEffect, useMemo} from 'react';
import { Center} from '@chakra-ui/react';
import { PriceDisplay } from '../PriceDisplay';
import { CryptoContext, DispatchContext } from '../CryptoContext';
import Display24Hr from '../Display24Hr';
import { use24HrPercentage } from '../helpers/use24HrPercentage';
import { ON_DRAG, CLEAN_UP } from '../helpers/reducer/actions';
import { throttle } from 'lodash';

const TickerDisplay:React.FC = () => {

  const {context} = useContext(CryptoContext);
  const {dispatch} = useContext(DispatchContext)
  const webSocket = useRef<null | WebSocket >(null);
  const priceRef = useRef<number>(0.00);


  const messageHandler = (e: { data: string; }) => {
    let data = JSON.parse(e.data);
    //sets price and 24h percent change
    dispatch({ 
      type: "set_price", 
      price: data.price, 
      percentageChange: use24HrPercentage(data.open_24h, data.price)
    });
  };

  const throttledMessageHandler = useMemo( 
    () => throttle(messageHandler, 400, { leading: false})
    , [context.price, dispatch]
  )


  // on first load of this component
  useEffect(() => {

      webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
      // when it opens start the stream
      webSocket.current.onopen = () => {
        dispatch({type: ON_DRAG, isSwiping: false})
        startStream();
    }
    return () => {
      // cleanup/close websocket
      webSocket.current!.close();
      throttledMessageHandler.cancel();
      dispatch({ type: CLEAN_UP, price: 0.00});
    }
  }, [context.userCurrentPair]);

  // on change of the price
  useEffect(() => {
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
    let msg = {
      type: "subscribe",
      product_ids: [context.userCurrentPair[0].tickerName+"-USD"],
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
    // make this onmessage event handler point to a throttled function
    webSocket.current!.onmessage = throttledMessageHandler;
  };
  return (
    <div>
      <Center>
        <PriceDisplay />
      </Center>
      <Center>
        <Display24Hr/>
      </Center>
    </div>
  )
}

export default TickerDisplay;