import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ title }) => (
    <header className="Header">
        <h1 className="Header__title">{ title }</h1>
    </header>
);

Header.propTypes = {
  title: PropTypes.string
};


export default Header;