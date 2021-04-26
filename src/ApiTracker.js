import React from 'react';
import axios from "axios";



export default function ApiTracker() {

//  const [apiData, setApiData] = useState([]);
 
axios.get("https://api.pro.coinbase.com/products", {
})
.then(function (response) {
 console.log(response.data);
//  setApiData(response.data);
//  console.log(`setApiData: ${apiData}`)
})
.catch(function (error) {
 console.log(error);
})


 return (
  <>
    <h1>
     
     Hello There

    </h1>
    <div></div>
  </>
 )

}
