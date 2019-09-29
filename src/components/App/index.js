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
            width: 60,

            presets: {
                simple: [],
            },



            // type: [
            //     {
            //         value: 'Squeeze',

            //     },
            // ]

            // css: ,
        };

        this.data = [
            {
                type: 'Squeeze',
                css: `.burger {
                    color: ${this.state.color};
                    cursor: pointer;
                    display: inline-flex;
                    height: ${this.state.height}px;
                    width: ${this.state.width}px;
                }`,
            }
        ];

        this.html = `&lt;span class="burger js-burger"&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;span class="burger__line"&gt;&lt;/span&gt;
&lt;/span&gt;`;

        this.css = `.burger {
    color: ${this.state.color};
    cursor: pointer;
    display: inline-flex;
    height: ${this.state.height}px;
    width: ${this.state.width}px;
}`

        this.js = `document.querySelector('.js-burger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});`

        this.changeWidth = this.changeWidth.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeColor = this.changeColor.bind(this);
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

    changeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    render() {
        const { color, height, width } = this.state;

        return <div className="page">
            <Header title='CSS Burger Generator' />

            <div className="page-content-wrapper">
                <aside className="page-sidebar">
                    <section className="section">
                        <h3>Width</h3>
                        <input type="range" defaultValue={ width } min="15" max="60" onChange={ this.changeWidth } />
                    </section>

                    <section className="section">
                        <h3>Height</h3>
                        <input type="range" defaultValue={ height } min="15" max="60" onChange={ this.changeHeight }/>
                    </section>

                    <section className="section">
                        <h3>Color</h3>
                        <input type="color" defaultValue={ color } onChange={ this.changeColor }/>
                    </section>

                    <section className="section">
                        <h3>Type</h3>

                        <select>
                            <option value="Squeeze">Squeeze</option>
                        </select>
                    </section>
                </aside>
            
                <main className="page-content">
                    <div className="page-content__inner">
                        <Burger
                            color={ color }
                            height={ height }
                            width={ width }
                        />
                    </div>

                    <div className="page-content__sections">
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">HTML</h3>
                            <div className="messages">
                                <pre dangerouslySetInnerHTML={{ __html: this.html }}>
                                </pre>
                            </div>
                        </section>
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">CSS</h3>
                            <div className="messages">
                                <pre dangerouslySetInnerHTML={{ __html: this.css }}>
                                </pre>
                            </div>
                        </section>
                        <section className="page-content__section">
                            <h3 className="page-content__section-title">JavaScript</h3>

                            <div className="messages">
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