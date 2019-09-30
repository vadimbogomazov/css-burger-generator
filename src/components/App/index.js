import React from 'react';
import { MaterialPicker } from 'react-color';
import Select from 'react-select'

import Header from '../Header';
import Burger from '../Burger';
import Footer from '../Footer';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#000',
            height: 40,
            lineHeight: 6,
            scss: false,
            type: 'Squeeze',
            width: 60,
        };

        const { color, height, lineHeight, width } = this.state;

        this.html = `&lt;span class="burger js-burger"&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
&lt;/span&gt;`;

        this.js = `document.querySelector('.js-burger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});`

        this.changeType = this.changeType.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeLineHeight = this.changeLineHeight.bind(this);
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

    changeColor(color) {
        this.setState({
            color: color.hex
        });
    }

    changeType(e) {
        this.setState({
            type: e.target.value
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
        const { color, height, lineHeight, scss, type, width } = this.state;
        const options = [
            { value: 'Squeeze', label: 'Squeeze' },
            { value: 'Simple', label: 'Simple' },
        ];

        const defaultOpts = `cursor: pointer;
    display: inline-block;
    height: ${height}px;
    position: relative;
    width: ${width}px;`

        this.data = [
            {
                type: 'Squeeze',
                css: `.burger {
    ${defaultOpts}
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
}
                `,
            },
            {
                type: 'Simple',
                css: `.burger {
    ${defaultOpts}
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
}
            `,
        }];

        return <div className="page">
            <Header title="CSS Burger Generator" />

            <div className="page-content-wrapper">
                <aside className="page-sidebar">
                    <section className="section">
                        <div className="section__column section__column_half">
                            <h3>Width</h3>
                            <input type="text" maxLength="2" className="input" value={ width } onChange={ this.changeWidth }/>
                        </div>

                        <section className="section__column section__column_half">
                            <h3>Height</h3>
                            <input type="text" maxLength="2" className="input" value={ height } onChange={ this.changeHeight }/>
                        </section>
                    </section>

                    <section className="section">
                        <div className="section__column section__column_half">
                            <h3>Line height</h3>
                            <input type="text" maxLength="2" className="input" value={ height } onChange={ this.changeLineHeight } />
                        </div>

                        <div className="section__column section__column_half">
                            <h3>SCSS</h3>
                            <input type="checkbox" value={ scss } onChange={ this.toggleScss } />
                        </div>
                    </section>

                    <section className="section">
                        <div className="section__column">
                            <h3>Color</h3>

                            <MaterialPicker
                                fullWidth
                                color={ color }
                                onChangeComplete={ this.changeColor }
                            />
                        </div>
                    </section>

                    <section className="section">
                        <div className="section__column">
                            <h3>Type</h3>

                            <Select options={ options } onChange={ this.changeType } />
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
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">HTML</h3>
                            <div className="messages" onClick={(e) => this.copyToClipboard(e)}>
                                <pre dangerouslySetInnerHTML={{ __html: this.html }}>
                                </pre>
                            </div>
                        </section>
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">CSS</h3>
                            <div className="messages" onClick={(e) => this.copyToClipboard(e)}>
                                <pre dangerouslySetInnerHTML={{ __html: this.data.find(item => item.type === type)[scss ? 'scss' : 'css'] }} ref={val => this.cssOutput = val}>
                                </pre>
                            </div>
                        </section>
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">JavaScript</h3>

                            <div className="messages" onClick={(e) => this.copyToClipboard(e)}>
                                <pre dangerouslySetInnerHTML={{ __html: this.js }}>
                                </pre>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <Footer />
        </div>;
    }
}

export default App;