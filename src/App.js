import React, { useState, useEffect } from "react";
import Marquee from 'react-fast-marquee'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin';
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
import Ads from "./components/Ads";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";





function App() {

  const [coins, setCoins] = useState([])

  const url = ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false `


  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div >
      <Header />

      <Marquee>
        <div style={{fontSize: '11px ' , margin: '2px ' , display: 'flex' ,gap:'10px' ,  
        paddingLeft:'6px',   paddingRight:"6px",     backgroundColor: 'gainsboro' , width:'1000%' ,paddingTop:"4px" }}>
           <p>Cryptos: <span style={{color: 'blue'}}>1.8M+</span></p>

            <p> Exchanges: <span style={{color: 'blue'}}>669 💱</span></p>

            <p>  Market Cap: <span style={{color: 'blue'}}>$1.07T2.56%🔺</span></p>

            <p>  24h Vol: <span  style={{color: 'blue'}}>$31.08B14.16%</span></p>

             <p> Dominance:<span  style={{color: 'blue'}}> BTC: 49.1%</span></p>

             <p>  ETH: <span  style={{color: 'blue'}}>18.5% 🔻</span></p>

               <p> ETH Gas: <span  style={{color: 'blue'}}>11 Gwei    </span></p>
             

                
        </div>
      </Marquee>


      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />} >
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

      <Ads/>
    </div>
  );
}

export default App;

//  <div style={{fontSize: '10px ' , margin: '6px'}}>
//            <p>Cryptos: <span style={{color: 'blue'}}>1.8M+</span>

//              Exchanges: <span style={{color: 'blue'}}>669</span>

//               Market Cap: <span style={{color: 'blue'}}>$1.07T2.56%</span>

//               24h Vol: <span  style={{color: 'blue'}}>$31.08B14.16%</span>

//               Dominance:<span  style={{color: 'blue'}}> BTC: 49.1%</span>

//                ETH: <span  style={{color: 'blue'}}>18.5%</span>

//                 ETH Gas: <span  style={{color: 'blue'}}>11 Gwei    </span>
                
//                 </p>