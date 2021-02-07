import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom'

const NavBar = (props) => {
	let location = useLocation()
	const [theme, setTheme] = useState('light')

	const [cart, setCart] = useState(props.cart)
	useEffect(() => {
		setCart(props.cart)
	}, [props.cart])

	useEffect(() => {
		if (location.pathname === '/') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	})

	return (
		<nav className='navbar navbar-expand-xl navbar-dark'>
			<div className='container-fluid align-items-baseline'>
				<Link to='/' className={'display-2 navbar-brand ' + theme}>
					CUSTOM MECHS
				</Link>
				<div className='collapse navbar-collapse justify-content-end d-flex' id='navbarSupportedContent'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to='/catalog' className={'nav-link ' + theme}>
								SHOP
							</Link>
						</li>
						<li className='nav-item'>
							<Link className={'nav-link ' + theme} to='/search'>
								SEARCH
							</Link>
						</li>
						<li className='nav-item'>
							<Link className={'nav-link ' + theme} to='/cart' key={cart}>
								CART {cart.length}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
