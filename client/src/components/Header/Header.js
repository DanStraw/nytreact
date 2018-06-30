import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <div className="page-head">
        <h1>{props.headerText}</h1>
        </div>
    )
}

export default Header;