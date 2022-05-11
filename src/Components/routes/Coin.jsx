import React from 'react'
import {useParams } from 'react-router-dom';
import Chart from '../Chart/Chart';
import { useAsync } from "react-async"


const loadData = async ({coinId}, {signal}) =>{
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}


const Coin = () => {
  let { coinId } = useParams();

  const { data, error, isPending } = useAsync({ promiseFn: loadData, coinId: coinId })

  if (isPending) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data){
    let factorizedData = { index: [], price: [], volumes: [] };
    for(const item of data.prices){
      factorizedData.index.push(item[0]);
      factorizedData.price.push(item[1]);
    }
    for (const item of data.total_volumes){
    factorizedData.volumes.push(item[1]);}

    return(
      <>
      <div className='chartDiv' id='chartDiv'>
        <Chart data = {factorizedData} key = {factorizedData.id}/>
      </div>
         </>)
  } 
  return null
}
export default Coin