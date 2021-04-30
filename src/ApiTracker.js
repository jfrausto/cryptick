import {useEffect, useState} from 'react';



export default function ApiTracker() {

const [apiData, setApiData] = useState([]);
let i = 0;

useEffect(() => {
 const getApiData = async () => {
   const cryptoProductsList = await fetchCyrptoProducts();
   setApiData(cryptoProductsList);
 }

 getApiData();

}, []);

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
      {apiData.map((data) => (
        <div key={i++}>
        <h3 >{data.id}<span style={{color: "red"}}>  {data.quote_currency} </span></h3>
        
        </div>
      ))}
    </div>
  </>
 )

}
