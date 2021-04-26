import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Burger = ({ css }) => {
    const toggleBurger = (e) => e.target.classList.toggle('is-active');

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            
            <button type="button" className="burger js-burger" onClick={ toggleBurger }>
                <span className="burger__inner">
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                </span>
            </button>
        </>
    )
};

Burger.propTypes = {
    css: PropTypes.string.isRequired
};

export default Burger;