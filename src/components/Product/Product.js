import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({ product, addToCart }) => {
    // const {product, addToCart} = props
    const { name, price, ratings, seller, img } = product
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>Name: {name}</h3>
                <p className='product-price'><strong>Price: ${price} </strong></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>

            <button onClick={() => addToCart(product)} className='cart-btn'>
                Add to Cart
                <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;