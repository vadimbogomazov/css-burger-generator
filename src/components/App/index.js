import React, { useState } from 'react';
import { MaterialPicker } from 'react-color';
import Select from 'react-select';

import Burger from '../Burger';
import CodeSection from '../CodeSection';
import Footer from '../Footer';
import Header from '../Header';

import { HTML, CSS, JS } from '../../config.js';

const selectValues = [{
    label: 'Squeeze',
    value: 'Squeeze',
},
{
    label: 'Arrow',
    value: 'Arrow',
},
{
    label: 'Minus',
    value: 'Minus',
},
{
    label: 'Simple',
    value: 'Simple',
}];

const regex = /\%\%.*?\%\%/g;

const App = () => {
    // Default burger settings
    const [ burgerSettings, setBurgerSettings ] = useState({
        color: '#000',
        height: 24,
        lineHeight: 2,
        padding: 12,
        jQ: false,
        scss: false,
        type: {
            label: 'Squeeze',
            value: 'Squeeze',
        },
        width: 40,
    });

    // Change burger state
    const handleSetBurgerSettings = (e, option) => {
        e.persist();

        setBurgerSettings((prevState) => ({
            ...prevState,
            [option]: e.target.value,
        }));
    };

    // Change burger type
    const handleSetType = (option) => {
        setBurgerSettings((prevState) => ({
            ...prevState,
            type: option,
        }));
    };

    // Change color
    const changeColor = (color) => {
        setBurgerSettings((prevState) => ({
            ...prevState,
            color: color.hex,
        }));
    };

    // Toggle Scss flag
    const toggleScss = () => {
        setBurgerSettings((prevState) => ({
            ...prevState,
            scss: !burgerSettings.scss,
        }));
    };

    // Toggle jQuery flag
    const toggleJQ = () => {
        setBurgerSettings((prevState) => ({
            ...prevState,
            jQ: !burgerSettings.jQ,
        }));
    };

    // Get styles
    const activeItem = CSS.find((item) => item.type === burgerSettings.type.value);
    let activeItemStyles = {};

    for (const [ key, value ] of Object.entries(activeItem)) {
        activeItemStyles[key] = value.replace(regex, (str) => {
            // Remove %% %%
            const clearValueStr = str.slice(2, -2);
            
            return burgerSettings[clearValueStr];
        });
    }
    
    return (
        <div className="app">
            <div className="page-content-wrap">
                <aside className="page-sidebar">
                    <section className="section">
                        <div className="section__column section__column_half">
                            <label htmlFor="width">Width</label>
                                <input type="number" id="width" maxLength="2" className="input section__field" min="1" max="99" value={ burgerSettings.width } onChange={ (e) => handleSetBurgerSettings(e, 'width') }/>
                            </div>

                            <div className="section__column section__column_half">
                                <label htmlFor="height">Height</label>
                                <input type="number" id="height" maxLength="2" className="input section__field" min="1" max="99" value={ burgerSettings.height } onChange={ (e) => handleSetBurgerSettings(e, 'height') }/>
                            </div>
                    </section>

                    <section className="section">
                        <div className="section__column section__column_half">
                            <label htmlFor="line-height">Line height</label>
                            <input type="number" id="line-height" maxLength="2" className="input section__field" min="1" max="99" value={ burgerSettings.lineHeight } onChange={ (e) => handleSetBurgerSettings(e, 'lineHeight') } />
                        </div>

                        <div className="section__column section__column_half">
                            <label htmlFor="padding">Padding</label>
                            <input type="number" id="padding" maxLength="2" className="input section__field" min="1" max="99" value={ burgerSettings.padding } onChange={ (e) => handleSetBurgerSettings(e, 'padding') } />
                        </div>
                    </section>

                    <section className="section">
                        <div className="section__column">
                            <label htmlFor="color">Color</label>

                            <div className="section__field">
                                <MaterialPicker
                                    color={ burgerSettings.color }
                                    onChangeComplete={ changeColor }
                                />
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section__column">
                            <label htmlFor="type">Type</label>

                            <Select className="custom-select" options={ selectValues } value={ burgerSettings.type } onChange={ handleSetType }/>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section__column section__column_half">
                            <label htmlFor="scss">SCSS</label>

                            <div>
                                <input type="checkbox" id="scss" className="section__field" value={ burgerSettings.scss } onChange={ toggleScss } checked={ burgerSettings.scss } />
                            </div>
                        </div>

                        <div className="section__column section__column_half">
                            <label htmlFor="jq">jQuery</label>

                            <div>
                                <input type="checkbox" id="jq" className="section__field" value={ burgerSettings.jQ } onChange={ toggleJQ } checked={ burgerSettings.jQ } />
                            </div>
                        </div>
                    </section>
                </aside>

                <main className="page-content">
                    <Header title="CSS Burger Generator" />

                    <div className="page-content__burger">
                        <Burger css={ activeItemStyles.css } />
                    </div>

                    <div className="page-content__sections">
                        <CodeSection title="HTML" code={ HTML } />
                        <CodeSection title="CSS" code={ activeItemStyles[burgerSettings.scss ? 'scss' : 'css'] } />
                        <CodeSection title="JS" code={ JS[burgerSettings.jQ ? 'jQ' : 'plain'] } />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App;
