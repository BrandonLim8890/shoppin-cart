import React from 'react'
import { Link } from 'react-router-dom'
import homeBackground from '../images/homepage.jpg'
import './HomePage.css'

const HomePage = (props) => {
	return (
		<section className='background-image' style={{ backgroundImage: `url(${homeBackground})` }}>
			<Link className='display-3 btn-shop' to='/catalog'>
				SHOP
			</Link>
		</section>
	)
}

export default HomePage
