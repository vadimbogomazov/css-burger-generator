import React, { Component } from 'react';
import { MaterialPicker } from 'react-color';
import Select from 'react-select';

import Burger from '../Burger';
import CodeSection from '../CodeSection';
import Footer from '../Footer';
import Header from '../Header';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#000',
            height: 40,
            lineHeight: 6,
            padding: 10,
            scss: false,
            type: {
                label: 'Squeeze',
                value: 'Squeeze'
            },
            width: 60
        };

        this.html = `&lt;span class="burger js-burger"&gt;
    &lt;span class="burger__inner"&gt;&lt;/span&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;/span&gt;
&lt;/span&gt;`;

        this.js = `document.querySelector('.js-burger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});`
        
        this.typeOptions = [
            { value: 'Squeeze', label: 'Squeeze' },
            { value: 'Simple', label: 'Simple' }
        ];

    }

    changeOption = (e, option) => {
        this.setState({
            [option]: Number(e.target.value)
        });
    }

    changeColor = color => {
        this.setState({
            color: color.hex
        });
    }

    changeType = type => {
        this.setState({
            type
        });
    }

    toggleScss = e => {
        this.setState(prevState => ({
            scss: !prevState.scss
        }));
    }

    copyToClipboard = e => {
        // e.target.select();
        // document.execCommand('copy');
        // this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        const { color, height, lineHeight, padding, scss, type, width } = this.state;

        const defaultOpts = `cursor: pointer;
    display: inline-block;
    padding: ${padding}px;`
        this.data = [
            {
                type: 'Squeeze',
                css: `.burger {
    ${defaultOpts}
}

.burger__inner {
    display: block;
    height: ${height}px;
    pointer-events: none;
    position: relative;
    width: ${width}px;
}

.burger__line {
    background: ${color};
    border-radius: 3px;
    height: ${lineHeight}px;
    left: 0;
    pointer-events: none;
    position: absolute;
    transition: transform .2s, top .2s .2s, bottom .2s .2s, opacity .2s .2s;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - ${lineHeight / 2}px);
}

.burger__line:nth-child(3) {
    bottom: 0;
}

.burger.is-active .burger__line {
    transition: transform .2s .2s, top .2s, bottom .2s, opacity .2s;
}

.burger.is-active .burger__line:nth-child(1) {
    top: calc(50% - ${lineHeight / 2}px);
    transform: rotate(45deg);
}

.burger.is-active .burger__line:nth-child(2) {
    opacity: 0;
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: calc(50% - ${lineHeight / 2}px);
    transform: rotate(-45deg);
}`,
                scss: `.burger {
    ${defaultOpts}

    &__inner {
        display: block;
        height: ${height}px;
        pointer-events: none;
        position: relative;
        width: ${width}px;
    }

    &__line {
        background: ${color};
        height: ${lineHeight}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        transition: transform .2s, top .2s .2s, bottom .2s .2s, opacity .2s .2s;
        width: 100%;
        
        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - ${lineHeight / 2}px);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }

    &.is-active {
        .burger__line {
            transition: bottom .2s, opacity .2s, top .2s, transform .2s .2s;

            &:nth-child(1) {
                top: calc(50% - ${lineHeight / 2}px);
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                bottom: calc(50% - ${lineHeight / 2}px);
                transform: rotate(-45deg);
            }
        }
    }
}`,
            },
            {
                type: 'Simple',
                css: `.burger {
    ${defaultOpts}
}

.burger__inner {
    display: block;
    height: ${height}px;
    pointer-events: none;
    position: relative;
    width: ${width}px;
}

.burger__line {
    background: ${color};
    border-radius: 3px;
    height: ${lineHeight}px;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - ${lineHeight / 2}px);
}

.burger__line:nth-child(3) {
    bottom: 0;
}

.burger.is-active .burger__line:nth-child(1) {
    top: calc(50% - ${lineHeight / 2}px);
    transform: rotate(45deg);
}

.burger.is-active .burger__line:nth-child(2) {
    opacity: 0;
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: calc(50% - ${lineHeight / 2}px);
    transform: rotate(-45deg);
}`,
        scss: `.burger {
    ${defaultOpts}

    &__inner {
        display: block;
        height: ${height}px;
        pointer-events: none;
        position: relative;
        width: ${width}px;
    }

    &__line {
        background: ${color};
        height: ${lineHeight}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 100%;
        
        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - ${lineHeight / 2}px);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }

    &.is-active {
        .burger__line {
            transition: bottom .2s, opacity .2s, top .2s, transform .2s .2s;

            &:nth-child(1) {
                top: calc(50% - ${lineHeight / 2}px);
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                bottom: calc(50% - ${lineHeight / 2}px);
                transform: rotate(-45deg);
            }
        }
    }
}`,
        }];

        const currentValue = this.data.find(item => item.type === type.value);

        return (
            <div className="page">
                <Header title="CSS Burger Generator" />

                <div className="page-content-wrapper">
                    <aside className="page-sidebar">
                        <section className="section">
                            <div className="section__column section__column_half">
                                <label htmlFor="width">Width</label>
                                <input type="number" id="width" maxLength="2" className="input section__field" min="1" max="99" value={ width } onChange={ e => this.changeOption(e, 'width') }/>
                            </div>

                            <section className="section__column section__column_half">
                                <label htmlFor="height">Height</label>
                                <input type="number" id="height" maxLength="2" className="input section__field" min="1" max="99" value={ height } onChange={ e => this.changeOption(e, 'height') }/>
                            </section>
                        </section>

                        <section className="section">
                            <div className="section__column section__column_half">
                                <label htmlFor="line-height">Line height</label>
                                <input type="number" id="line-height" maxLength="2" className="input section__field" min="1" max="99" value={ lineHeight } onChange={ e => this.changeOption(e, 'lineHeight') } />
                            </div>

                            <div className="section__column section__column_half">
                                <label htmlFor="padding">Padding</label>
                                <input type="number" id="padding" maxLength="2" className="input section__field" min="1" max="99" value={ padding } onChange={ e => this.changeOption(e, 'padding') } />
                            </div>
                        </section>

                        <section className="section">
                            <div className="section__column">
                                <label htmlFor="color">Color</label>

                                <MaterialPicker
                                    className="section__field"
                                    color={ color }
                                    onChangeComplete={ this.changeColor }
                                />
                            </div>
                        </section>

                        <section className="section">
                            <div className="section__column">
                                <label htmlFor="type">Type</label>

                                <Select className="custom-select" value={ type } options={ this.typeOptions } onChange={ this.changeType } />
                            </div>
                        </section>

                        <section className="section">
                            <div className="section__column">
                                <label htmlFor="scss">SCSS</label>
                                <div>
                                    <input type="checkbox" id="scss" className="section__field" value={ scss } onChange={ this.toggleScss } />
                                </div>
                            </div>
                        </section>
                    </aside>
                
                    <main className="page-content">
                        <div className="page-content__inner">
                            <Burger
                                color={ color }
                                height={ height }
                                type={ currentValue.css }
                                width={ width }
                            />
                        </div>

                        <div className="page-content__sections">
                            <CodeSection title="HTML" code={ this.html } />
                            <CodeSection title="CSS" code={ currentValue[scss ? 'scss' : 'css'] } />
                            <CodeSection title="JavaScript" code={ this.js } />
                        </div>
                    </main>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;