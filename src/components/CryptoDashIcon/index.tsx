import React, {useState, useEffect, useContext} from 'react';
import {Center} from '@chakra-ui/react';
import Generic from 'cryptocurrency-icons/128/color/generic.png'
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
      > 
        <Center>
          <Image 
            src={cryptoIcon}
            width="100px"
            height="100px"
          />
        </Center>
      </motion.div>
    </>
  )
}

export default CryptoDashIcon;
