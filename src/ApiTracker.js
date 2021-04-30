import {useEffect, useState} from 'react';



export default function ApiTracker() {

const [apiData, setApiData] = useState([]);

// Used solely to make unique Key for the children props for apiData.map() line 40
let i = 0;

useEffect(() => {

  const getApiData = async () => {
   const cryptoProductsList = await fetchCyrptoProducts();
   setApiData(cryptoProductsList);
 }

 getApiData();

//Occurs on load
}, []);

// Should fetch the product information about the cryptocurrency
const fetchCyrptoProducts = async () => {
  const res = await fetch("https://api.pro.coinbase.com/products");
  const data = await res.json();
  console.log(data);
  return data;
}

 return (
  <>
    <h1>
     
     Hello There

    </h1>
    <div>
      <p>
        Below are the api data list
      </p>
      
      {/* First filter data for cyrptocurrencies for USD then map the children and assigning unique key using i++ */}
      {apiData.filter(data => data.quote_currency === "USD").map((data) => (
        <div key={i++}>
        
        <h3>{data.id}<span style={{color: "red", fontSize: "13px"}}>  {data.quote_currency} </span></h3>
        
        </div>
      ))}
    </div>
  </>
 )

}
