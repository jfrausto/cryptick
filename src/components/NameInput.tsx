import React, { useState, useRef, useEffect, BaseSyntheticEvent } from "react";
import {useRouter} from "next/router";
import {
  Input
} from '@chakra-ui/react';


const preventDefault = (f: any) => (e: any) => {
  e.preventDefault();
  f(e);
}

const NameInput = () => {
   const router = useRouter()
   const [query, setQuery] = useState('')

   const inputElement = useRef< null | HTMLInputElement >(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

   const handleParam = (setValue: any) => (e: BaseSyntheticEvent) => 
   {  setValue(e.target.value);  }

   const handleSubmit = preventDefault(() => {
        localStorage.setItem("userName", query);
     router.push(
       "/ChooseCrypto"
     )
   })

   return (
     <form onSubmit={handleSubmit}>
       <Input
    ref={inputElement}
    type="text"
    name="userName"
    value={query}
    onChange={handleParam(setQuery)}
    errorBorderColor="none"
    borderColor="none"
    focusBorderColor="none"
    border="none"
    autoFocus
    placeholder={(query == "" ? "YourName": query)}
    _placeholder={{color: "#cf000f"}}
    fontSize="40px"
    textAlign="center"
    textColor="red"
    autoComplete="false"
    
  />
     </form>
   )
}

export default NameInput;