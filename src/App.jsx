import React from 'react';
import Crypto from './Components/Api/Crypto';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Coin from './Components/routes/Coin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Crypto/>} />
        <Route path="/coin/:coinId" element = {<Coin/>}/>
      </Routes>
    </div>
  );
}

export default App;
