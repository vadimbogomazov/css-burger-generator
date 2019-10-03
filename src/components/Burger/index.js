import React, { Component, Fragment } from 'react';
import hyphenateStyleName from 'hyphenate-style-name';

class Burger extends Component {
    constructor(props) {
        super(props);

        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger(e) {
        e.target.classList.toggle('is-active');
    }

    render() {
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{__html: `${this.props.data.find(item => item.type === this.props.type.value).css}`}}
                />
                <span className="burger js-burger" onClick={ this.toggleBurger }>
                    <span className="burger__inner">
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </span>
                </span>
            </Fragment>
        )
    }
}

export default Burger;