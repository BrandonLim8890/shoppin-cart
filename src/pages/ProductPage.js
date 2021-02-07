import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductPage.css'
import categories from '../data/categories'
import allProducts from '../data/allProducts'

const ProductPage = (props) => {
	let { categoryId, id } = useParams()

	const category = categories.find((category) => category.id === categoryId)
	const product = allProducts.find((product) => product.id === id)

	const addToCart = () => {
		props.addToCart(product)
	}

	return (
		<div className='container d-flex full align-items-center'>
			<div className='left'>
				<div className='product'>
					<img src={product.image} alt='' className='product-image' />
					<h1 className='product-title display-2'>{product.name}</h1>
				</div>
			</div>
			<div className='right d-flex flex-column'>
				<a className='display-3 btn-cart' onClick={addToCart}>
					ADD TO CART
				</a>
				<a className='display-3 btn-buy'>BUY NOW</a>
			</div>
		</div>
	)
}

export default ProductPage
