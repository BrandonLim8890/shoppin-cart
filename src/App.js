import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'

function App() {
	const [cart, setCart] = useState([])

	let addToCart = (product) => {
		let temp_cart = cart
		temp_cart.push(product)
		setCart([...temp_cart])
	}

	return (
		<div className='App container-fluid px-0'>
			<Router>
				<header className='header-nav'>
					<NavBar cart={cart} />
				</header>
				<main>
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/catalog/:categoryId' exact>
							<ShopPage />
						</Route>
						<Route path='/catalog' exact>
							<ShopPage />
						</Route>
						<Route path='/catalog/:categoryId/:id' exact>
							<ProductPage addToCart={addToCart} />
						</Route>
					</Switch>
				</main>
			</Router>
		</div>
	)
}

export default App
