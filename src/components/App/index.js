import React, { Component } from 'react';
import { MaterialPicker } from 'react-color';
import Select from 'react-select'

import Header from '../Header';
import Burger from '../Burger';
import Footer from '../Footer';

import CodeSection from '../CodeSection';

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

        const { color, height, lineHeight, padding, width } = this.state;

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
        
        this.changeType = this.changeType.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeLineHeight = this.changeLineHeight.bind(this);
        this.changePadding = this.changePadding.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.toggleScss = this.toggleScss.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    changeWidth(e) {
        this.setState({
            width: Number(e.target.value)
        });
    }

    changeHeight(e) {
        this.setState({
            height: Number(e.target.value)
        });
    }

    changeLineHeight(e) {
        this.setState({
            lineHeight: Number(e.target.value)
        });
    }

    changePadding(e) {
        this.setState({
            padding: Number(e.target.value)
        });
    }

    changeColor(color) {
        this.setState({
            color: color.hex
        });
    }

    changeType(type) {
        this.setState({
            type,
        });
    }

    toggleScss(e) {
        this.setState({
            scss: !this.state.scss
        });
    }

    copyToClipboard(e) {
        // e.target.select();
        // document.execCommand('copy');
        // this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        const { color, height, lineHeight, padding, scss, type, width } = this.state;
        const options = [
            { value: 'Squeeze', label: 'Squeeze' },
            { value: 'Simple', label: 'Simple' },
        ];

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

        return <div className="page">
            <Header title="CSS Burger Generator" />

            <div className="page-content-wrapper">
                <aside className="page-sidebar">
                    <section className="section">
                        <div className="section__column section__column_half">
                            <label htmlFor="width">Width</label>
                            <input type="number" id="width" maxLength="2" className="input section__field" min="1" max="99" value={ width } onChange={ this.changeWidth }/>
                        </div>

                        <section className="section__column section__column_half">
                            <label htmlFor="height">Height</label>
                            <input type="number" id="height" maxLength="2" className="input section__field" min="1" max="99" value={ height } onChange={ this.changeHeight }/>
                        </section>
                    </section>

                    <section className="section">
                        <div className="section__column section__column_half">
                            <label htmlFor="line-height">Line height</label>
                            <input type="number" id="line-height" maxLength="2" className="input section__field" min="1" max="99" value={ lineHeight } onChange={ this.changeLineHeight } />
                        </div>

                        <div className="section__column section__column_half">
                            <label htmlFor="padding">Padding</label>
                            <input type="number" id="padding" maxLength="2" className="input section__field" min="1" max="99" value={ padding } onChange={ this.changePadding } />
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

                            <Select className="custom-select" value={ type } options={ options } onChange={ this.changeType } />
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
                            data={this.data}
                            height={ height }
                            type={type}
                            width={ width }
                        />
                    </div>

                    <div className="page-content__sections">
                        <CodeSection title="HTML" code={ this.html } />
                        <CodeSection title="CSS" code={ this.data.find(item => item.type === type.value)[scss ? 'scss' : 'css'] } />
                        <CodeSection title="JavaScript" code={ this.js } />
                    </div>
                </main>
            </div>

            <Footer />
        </div>;
    }
}

export default App;