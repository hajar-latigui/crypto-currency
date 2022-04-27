import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';

const Coin = () => {
let { coinId } = useParams();
const[coin,setCoin] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  useEffect(()=> {
      axios.get(url)
      .then(response => {
        setCoin(response.data)
        console.log(response.data);
    }).catch((error)=> {
      console.log(error)
    })
  },[coinId])
  return (
    <div>
      {coinId}
    </div>
  )
}

export default Coin