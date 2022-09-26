import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (   
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='link'>
                <li><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About</a></li>
            </div>
        </nav>
    );
};

export default Header;