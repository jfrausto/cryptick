import React, {useState, useEffect, useContext} from 'react';
import {Center} from '@chakra-ui/react';
// chakra bolt svg as fallback
import Generic from 'cryptocurrency-icons/128/color/generic.png'
// import cryptoIcon from 'cryptocurrency-icons/128/color/ada.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CryptoContext} from '../CryptoContext';
import getCryptoPng from '../helpers/getCryptoPng';




const CryptoDashIcon: React.FC = () => {

  const [cryptoIcon, setCryptoIcon] = useState<any>(Generic);
  const { context } = useContext(CryptoContext);

  useEffect(() => {
    const dynamicImport = async () => {
      // send current tickerName to grab the png
      const icon = await getCryptoPng(context.userCurrentPair[0].tickerName.toLowerCase());
      if (icon === "generic") {
        setCryptoIcon(Generic);
        return;
      }
      setCryptoIcon(icon);
    };

    dynamicImport();
    
    return () => {
      setCryptoIcon(Generic);
    }
  }, [context.userCurrentPair]);

  return (
    <>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5 }}
        // height="100px" 
        // width="100px"
      > 
        <Center>
          <Image 
            src={cryptoIcon}
            // blurDataURL={Img}
            // placeholder="blur"
            width="100px"
            height="100px"
          />
        </Center>
      </motion.div>
    </>
  )
}

export default CryptoDashIcon;
