import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0
    let shippingPrice = 0
    let quantity = 0
    for(const product of cart){
        totalPrice = totalPrice + product.price * product.quantity
        shippingPrice = shippingPrice + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = totalPrice * 0.1
    const grandTotal = totalPrice + shippingPrice + tax
    return (
        <div className='cart'>
            <h3 className='cart-heading'>Order summary</h3>
            <h4>Selected Item: {quantity}</h4>
            <div className='cart-info'>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${shippingPrice}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <p></p>
            </div>
        </div>
    );
};

export default Cart;