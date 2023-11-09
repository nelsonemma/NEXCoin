import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'

import './Coins.css'
import { hover } from '@testing-library/user-event/dist/hover'







const Coins = (props) => {



	return (
		<div>
			<div className='navbar'>
				<p style={{ fontSize: '28px', margin: '0 auto' , paddingBottom: '5%' }}>Global Cryptocurrency Market Cap </p>
			</div>


			<div  className='search'>
				<input style={{width:'50%', padding: "0.6rem" , backgroundColor:'gainsboro'}} type='text' placeholder='Search Coin' />
				<button style={{padding:'0.6rem', marginLeft:'3px', backgroundColor: "gainsboro"}} > Search</button>
				
			</div>


			
			<div className='container' >
				<div>
					<div className='heading'>
						<p>#</p>
						<p className='coin-name'>Coin</p>
						<p>Price</p>
						<p>24h</p>
						<p className='hide-mobile'>Volume</p>
						<p className='hide-mobile'>Mkt Cap</p>
					</div>



					{props.coins.map(coins => {
						return (
							<Link style={{ textDecoration: 'none' }} to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
								<CoinItem coins={coins} />
							</Link>


						)

					})}
				</div>

			</div>
		</div>
	)
}

export default Coins