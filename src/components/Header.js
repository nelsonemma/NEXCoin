
import React from 'react'



const Header = () => {
	return (
		<div>
			{/* <nav style={{backgroundColor: '#6900ff' }} className="navbar navbar-expand-lg "> */}
			<nav style={{backgroundColor: '#1d9f69' }} className="navbar navbar-expand-lg ">
				<div className="container-fluid">
					{/* <a style={{ color: "white", fontSize: "28px" }}  className="navbar-brand" >NEXCoins</a> */}
					<h2 style={{color:"whitesmoke"}}>NEXCoin</h2>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
		
				</div>
			</nav>

		</div>
	)
}

export default Header