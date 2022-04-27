import axios from 'axios';
import React, { useEffect,} from 'react'
import {useParams } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Coin = () => {
let { coinId } = useParams();
let data = { index: [], price: [], volumes: [] };


  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`;
  useEffect(()=> {
      axios.get(url)
      .then(response => {
        for (const item of response.data.prices) {
          data.index.push(item[0]);
          data.price.push(item[1]);
        }
        for (const item of response.data.total_volumes) data.volumes.push(item[1]);
    }).catch((error)=> {
      console.log(error)
    })
  },[coinId])

  return(
    <>
    <div className='chartDiv' id='chartDiv'>
      <Chart data = {data} key = {data.id}/>
    </div>
       
       </>
)
}

export default Coin