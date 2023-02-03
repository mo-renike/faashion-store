import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='logo'>
                TC
            </Link>
            <div className="header__nav">
                <Link to="/shop">Shop</Link>
                <Link to="/login">Sign In</Link>
            </div>
        </div>
    )
}

export default Header