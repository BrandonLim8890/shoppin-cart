import React, { useEffect, useState } from 'react'
import { useParams, Link, Switch, Route } from 'react-router-dom'
import categories from '../data/categories'
import allProducts from '../data/allProducts'
import './ShopPage.css'

const ShopPage = () => {
	let { categoryId } = useParams()
	let category = categories.find((category) => categoryId === category.id)
	const [DisplayProducts, setDisplayProducts] = useState(allProducts)

	useEffect(() => {
		if (category) {
			let DisplayProducts = allProducts.filter((product) => product.categoryId === category.id)
			setDisplayProducts(DisplayProducts)
		} else {
			setDisplayProducts(allProducts)
		}
	}, [categoryId, category])

	return (
		<div className='container'>
			<aside className='sidebar'>
				<div className='header display-2'>
					<p>Shop /</p>
					<Switch>
						<Route path='/catalog' exact>
							<span>All Categories</span>
						</Route>
						<Route path='/catalog/:categoryId' exact>
							<span>{category && category.name}</span>
						</Route>
					</Switch>
				</div>
				<ul className='categories list-group-flush'>
					<Link to='/catalog' className='empty-link'>
						<li className='display-2'>All Categories</li>
					</Link>
					{categories.map((category) => (
						<Link to={`/catalog/${category.id}`} key={category.id} className='empty-link'>
							<li className='display-2'>{category.name}</li>
						</Link>
					))}
				</ul>
			</aside>
			<div className='main'>
				<ul className='product-list d-flex flex-wrap p-0'>
					{DisplayProducts.map((product) => (
						<Link
							className='product-tile d-flex flex-column'
							key={product.id}
							to={`/catalog/${product.categoryId}/${product.id}`}
						>
							<div className='product-image'>
								<img src={product.image} alt={product.name} />
							</div>
							<div className='product-name'>
								<span className='display-9'>{product.name}</span>
							</div>
							<div className='product-price'>
								<span className='display-9'>${product.price}</span>
							</div>
						</Link>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ShopPage
