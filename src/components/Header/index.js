import React from 'react';

function Header({ title }) {
    return (
        <header className="page-header">
            <h1 className="page-header__title">{ title }</h1>
        </header>
    )
}

export default Header;

