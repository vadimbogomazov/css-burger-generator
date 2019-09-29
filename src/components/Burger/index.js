import React, { Component, Fragment } from 'react';

class Burger extends Component {
    constructor(props) {
        super(props);

        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger(e) {
        e.target.classList.toggle('is-active')
    }

    render() {
        return (
            <Fragment>
                <style>

                </style>
                <span className="burger" onClick={ this.toggleBurger } style={{
                    height: `${this.props.height}px`,
                    width: `${this.props.width}px`
                }}>
                <span className="burger__line" style={{
                    background: `${this.props.color}`,
                }}></span>
                <span className="burger__line" style={{
                    background: `${this.props.color}`,
                }}></span>
                <span className="burger__line" style={{
                    background: `${this.props.color}`,
                }}></span>
            </span>
            </Fragment>
        )
    }
}

export default Burger;