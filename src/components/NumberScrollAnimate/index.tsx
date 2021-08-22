import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { NumberScrollAnimateProps } from "../../types";
// thanks to: 
// https://stackoverflow.com/questions/60205544/in-framer-motion-how-to-animate-pure-data-like-a-number-from-0-to-100
const NumberScrollAnimate: React.FC<NumberScrollAnimateProps> = ({ from, to }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        if(ref && ref.current) {
          ref.current.textContent = value.toFixed(1);
        }
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={ref} />;
}

export default NumberScrollAnimate
