import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Burger = ({ type }) => {
    const toggleBurger = e => e.target.classList.toggle('is-active');

    return (
        <Fragment>
            <style dangerouslySetInnerHTML={{__html: type}}
            />
            <span className="burger js-burger" onClick={ toggleBurger }>
                <span className="burger__inner">
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                </span>
            </span>
        </Fragment>
    )
};

Burger.propTypes = {
    type: PropTypes.string
};

export default Burger;