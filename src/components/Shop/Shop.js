import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() =>{
        const storedCart = getStoredCart()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const addToCart = (selectProduct) => {
        let newCart = []
        const exist = cart.find(product => product.id === selectProduct.id)
        if(!exist){
            selectProduct.quantity = 1
            newCart = [...cart, selectProduct]
        }
        else{  
            const rest = cart.filter(product => product.id !== selectProduct.id)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(selectProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;