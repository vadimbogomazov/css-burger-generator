import React from 'react';

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

    changeColor(e) {
        this.setState({
            color: e.target.value
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

    componentWillUpdate(nextProps, nextState) {
        // console.log(nextState);
    }

    copyToClipboard(e) {
        // e.target.select();
        // document.execCommand('copy');
        // this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        const { color, height, lineHeight, scss, type, width } = this.state;

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
                        <h3>Type</h3>

                        <select onChange={this.changeType}>
                            <option value="Squeeze">Squeeze</option>
                            <option value="Simple">Simple</option>
                        </select>
                    </section>

                    <section className="section">
                        <h3>Width</h3>
                        <input type="range" defaultValue={ width } min="15" max="60" onChange={ this.changeWidth } />
                    </section>

                    <section className="section">
                        <h3>Height</h3>
                        <input type="range" defaultValue={ height } min="15" max="60" onChange={ this.changeHeight }/>
                    </section>

                    <section className="section">
                        <h3>Line height</h3>
                        <input type="range" defaultValue={ height } min="1" max="10" onChange={ this.changeLineHeight } />
                    </section>

                    <section className="section">
                        <h3>Color</h3>
                        <input type="color" defaultValue={ color } onChange={ this.changeColor }/>
                    </section>

                    <section className="section">
                        <h3>SCSS</h3>
                        <input type="checkbox" value="" onChange={this.toggleScss} />
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