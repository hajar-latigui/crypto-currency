import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coins from '../Coins/Coins'
import Coin from '../routes/Coin'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Market Cap</p>
            </div>
            </div>
           
                <Routes>
                <Route path='/' element = {<Coins crypto = {crypto} key = {crypto.id}/>} />
                <Route path="/coin/" element = {<Coin/>} />
                <Route path=":coinId" element = {<Coin/>} />
              </Routes> </div>
  )
}

export default Header