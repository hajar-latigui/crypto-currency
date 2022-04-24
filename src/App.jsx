import React from 'react';
import Crypto from './Components/Api/Crypto';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Crypto/>
    </div>
  );
}

export default App;
