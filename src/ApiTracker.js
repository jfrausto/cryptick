import {useEffect, useState} from 'react';



export default function ApiTracker() {

const [apiData, setApiData] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    const res = await fetch("https://api.pro.coinbase.com/products");
    const data = await res.json();
    console.log(data);
  }
  fetchTasks()
}, []);

 return (
  <>
    <h1>
     
     Hello There

    </h1>
    <div></div>
  </>
 )

}
