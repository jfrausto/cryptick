import React, {useState} from "react";
import {useRouter} from "next/router";

import {
  Input
} from '@chakra-ui/react';


const preventDefault = f => e => {
  e.preventDefault();
  f(e)
}

const NameInput = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleParam = setValue => e => 
  {setValue(e.target.value);
    }

  const handleSubmit = preventDefault(() => {
        localStorage.setItem("userName", query);
    router.push(
      "/ChooseCrypto"
    )
  })

  return (
    <form onSubmit={handleSubmit}>
      <Input
    isInvalid
    type="text"
    name="userName"
    value={query}
    onChange={handleParam(setQuery)}
    errorBorderColor="none"
    borderColor="none"
    focusBorderColor="none"
    border="none"
    placeholder="(Your Name)"
    _placeholder={{color: "#cf000f"}}
    fontSize="40px"
    textAlign="center"
    textColor="red"
  />
    </form>
  )
}

export default NameInput;