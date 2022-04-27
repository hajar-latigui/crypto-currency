import React, {useState,useEffect} from "react";
import axios from "axios";
import Coins from "../Coins/Coins";
import Coin from "../routes/Coin"
import {Link} from "react-router-dom";
import Header from "../Header/Header";


const Crypto = (props) =>{
    const[crypto,setCrypto] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=40&page=1&sparkline=false'
    useEffect(()=> {
        axios.get(url)
        .then(response => {
          setCrypto(response.data)
      }).catch((error)=> {
        console.log(error)
      })
    },[])

      return ( <><Header/>
          {crypto.map(crypto =>{
            return(
              <Link to = {`/coin/${crypto.id}`} element = {<Coin/>} key = {crypto.id}>
              <Coins crypto = {crypto}/>
              </Link>
            )
            })
            }

        </>
      )
}

export default Crypto;