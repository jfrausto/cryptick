import React, {useState, useEffect, useContext} from 'react';
import {Center} from '@chakra-ui/react';
// chakra bolt svg as fallback
import Generic from 'cryptocurrency-icons/128/color/generic.png'
// import cryptoIcon from 'cryptocurrency-icons/128/color/ada.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CryptoContext} from '../CryptoContext';




const CryptoDashIcon: React.FC = () => {

  const [cryptoIcon, setCryptoIcon] = useState<any>(Generic);
  const { context } = useContext(CryptoContext);

  useEffect(() => {

    const dynamicImport = async () => {
      console.log(`lower casing ticker name: ${context.userCurrentPair[0].tickerName.toLowerCase()}`);
      try{
        const icon = (await import(`cryptocurrency-icons/128/color/${context.userCurrentPair[0].tickerName.toLowerCase()}.png`)).default
        console.table(icon);
        console.log("Setting it to the dynamic import.............");
        setCryptoIcon(icon);
        return;
      } catch (err) {
        console.error("lmao");
        setCryptoIcon(Generic);
      }
      // console.log("falling back..........")
    };
    dynamicImport();
    return () => {
      setCryptoIcon(Generic);
    }
  }, [context.userCurrentPair]);


  // const MotionImage = motion(Image, {forwardMotionProps: true});
  // const MotionCenter = motion(Center, {forwardMotionProps: true});
  

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
