import React from 'react'
import './Coins.css'

const Coins = (props) => {
  return (<>
    <div className='container'>
    <div className='coin-row'>
        <p>{props.crypto.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.crypto.image} alt=""/>
            <p>{props.crypto.symbol.toUpperCase()}</p>
        </div>
        <p>€{props.crypto.current_price.toLocaleString()}</p>
        <p>{props.crypto.price_change_24h.toFixed(2)}%</p>
        <p>€{props.crypto.total_volume.toLocaleString()}</p>
        <p>€{props.crypto.market_cap.toLocaleString()}</p>
    </div></div></>
  )
}

export default Coins