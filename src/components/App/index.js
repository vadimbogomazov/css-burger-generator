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
}, {
    label: 'Simple',
    value: 'Simple',
}];

const regex = /\%\%.*?\%\%/g;

const App = () => {
    // Default burger settings
    const [burgerSettings, setBurgerSettings] = useState({
        color: '#000',
        height: 24,
        lineHeight: 4,
        padding: 10,
        jQ: false,
        scss: false,
        type: 'Squeeze',
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

    const toggleJQ = () => {
        setBurgerSettings((prevState) => ({
            ...prevState,
            jQ: !burgerSettings.jQ,
        }));
    };

    // Get styles
    const activeItem = CSS.find((item) => item.type === burgerSettings.type);
    let activeItemStyles = {};

    for (const [key, value] of Object.entries(activeItem)) {
         activeItemStyles[key] = value.replace(regex, (str) => burgerSettings[str.slice(2, -2)]);
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

                    {/*<section className="section">
                        <div className="section__column">
                            <label htmlFor="type">Type</label>

                            <Select className="custom-select" value={ burgerSettings.type } options={ selectValues } />
                        </div>
                    </section>*/}

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

//     constructor(props) {
/*type={ currentValue.css }*/
//         super(props);

//         this.state = {
//             color: `#000`,
//             height: 40,
//             lineHeight: 6,
//             padding: 10,
//             scss: false,
//             jq: false,
//             vars: false,
//             type: {
//                 label: `Squeeze`,
//                 value: `Squeeze`
//             },
//             copy: {
//                 html: false,
//                 css: false,
//                 js: false
//             },
//             width: 60
//         };

//         this.typeOptions = [
//             { value: `Squeeze`, label: `Squeeze` },
//             { value: `Simple`, label: `Simple` }
//         ];
//     }

//     setOption = (e, option) => {
//         this.setState({
//             [option]: Number(e.target.value)
//         });
//     }

//     changeColor = color => {
//         this.setState({
//             color: color.hex
//         });
//     }

//     changeType = type => {
//         this.setState({ type });
//     }

//     toggleOption = option => {
//         this.setState(prevState => ({
//             [option]: !prevState[option]
//         }));
//     }

//     copyToClipboard = e => {
//         e.target.select();
//         document.execCommand(`copy`);
//         this.setState({ copySuccess: `Copied!` });
//     };

//     render() {
//         const { color, height, jq, lineHeight, padding, scss, type, vars, width } = this.state;

//         const values = {
//             widthVal: vars ? `$burgerWidth: ${ width }px;` : width,
//             heightVal: vars ? `$burgerHeight: ${ height }px;` : height,
//             lineHeightVal: vars ? `$burgerLineHeight: ${ lineHeight }px;` : lineHeight,
//             paddingVal: vars ? `$burgerPadding: ${ padding }px;` : padding,
//             colorVal: vars ? `$burgerColor: ${ color }px;` : color
//         };

//         // const widthVal = vars ? `$burgerWidth: ${ width }px;` : width;
//         // const heightVal = vars ? `$burgerHeight: ${ height }px;` : height;
//         // const lineHeightVal = vars ? `$burgerLineHeight: ${ lineHeight }px;` : lineHeight;
//         // const paddingVal = vars ? `$burgerPadding: ${ padding }px;` : padding;
//         // const colorVal = vars ? `$burgerColor: ${ color }px;` : color;

//         const defaultOpts = `cursor: pointer;\ndisplay: inline-block;\npadding: ${ padding }px;`;

//         this.data = [
//             {
//                 type: `Squeeze`,
//                 css: `.burger {
//     ${ defaultOpts }
// }

// .burger__inner {
//     display: block;
//     height: ${ height }px;
//     pointer-events: none;
//     position: relative;
//     width: ${ width }px;
// }

// .burger__line {
//     background: ${ color };
//     border-radius: 3px;
//     height: ${ lineHeight }px;
//     left: 0;
//     pointer-events: none;
//     position: absolute;
//     transition: transform .2s, top .2s .2s, bottom .2s .2s, opacity .2s .2s;
//     width: 100%;
// }

// .burger__line:nth-child(1) {
//     top: 0;
// }

// .burger__line:nth-child(2) {
//     top: calc(50% - ${ lineHeight / 2 }px);
// }

// .burger__line:nth-child(3) {
//     bottom: 0;
// }

// .burger.is-active .burger__line {
//     transition: transform .2s .2s, top .2s, bottom .2s, opacity .2s;
// }

// .burger.is-active .burger__line:nth-child(1) {
//     top: calc(50% - ${ lineHeight / 2 }px);
//     transform: rotate(45deg);
// }

// .burger.is-active .burger__line:nth-child(2) {
//     opacity: 0;
// }

// .burger.is-active .burger__line:nth-child(3) {
//     bottom: calc(50% - ${ lineHeight / 2 }px);
//     transform: rotate(-45deg);
// }`,
//                 scss: `.burger {
//     ${ defaultOpts }

//     &__inner {
//         display: block;
//         height: ${ values.heightVal }px;
//         pointer-events: none;
//         position: relative;
//         width: ${ values.widthVal }px;
//     }

//     &__line {
//         background: ${ values.colorVal };
//         height: ${ values.lineHeightVal }px;
//         left: 0;
//         pointer-events: none;
//         position: absolute;
//         transition: transform .2s, top .2s .2s, bottom .2s .2s, opacity .2s .2s;
//         width: 100%;

//         &:nth-child(1) {
//             top: 0;
//         }

//         &:nth-child(2) {
//             top: calc(50% - ${ values.lineHeightVal / 2 }px);
//         }

//         &:nth-child(3) {
//             bottom: 0;
//         }
//     }

//     &.is-active {
//         .burger__line {
//             transition: bottom .2s, opacity .2s, top .2s, transform .2s .2s;

//             &:nth-child(1) {
//                 top: calc(50% - ${ values.lineHeightVal / 2 }px);
//                 transform: rotate(45deg);
//             }

//             &:nth-child(2) {
//                 opacity: 0;
//             }

//             &:nth-child(3) {
//                 bottom: calc(50% - ${ values.lineHeightVal / 2 }px);
//                 transform: rotate(-45deg);
//             }
//         }
//     }
// }`,
//             },
//             {
//                 type: 'Simple',
//                 css: `.burger {
//     ${ defaultOpts }
// }

// .burger__inner {
//     display: block;
//     height: ${ height }px;
//     pointer-events: none;
//     position: relative;
//     width: ${ width }px;
// }

// .burger__line {
//     background: ${ color };
//     border-radius: 3px;
//     height: ${ lineHeight }px;
//     left: 0;
//     pointer-events: none;
//     position: absolute;
//     width: 100%;
// }

// .burger__line:nth-child(1) {
//     top: 0;
// }

// .burger__line:nth-child(2) {
//     top: calc(50% - ${ lineHeight / 2 }px);
// }

// .burger__line:nth-child(3) {
//     bottom: 0;
// }

// .burger.is-active .burger__line:nth-child(1) {
//     top: calc(50% - ${ lineHeight / 2 }px);
//     transform: rotate(45deg);
// }

// .burger.is-active .burger__line:nth-child(2) {
//     opacity: 0;
// }

// .burger.is-active .burger__line:nth-child(3) {
//     bottom: calc(50% - ${ values.lineHeightVal / 2 }px);
//     transform: rotate(-45deg);
// }`,
//         scss: `.burger {
//     ${ defaultOpts }

//     &__inner {
//         display: block;
//         height: ${ values.heightVal }px;
//         pointer-events: none;
//         position: relative;
//         width: ${ values.widthVal }px;
//     }

//     &__line {
//         background: ${ values.colorVal };
//         height: ${ values.lineHeightVal }px;
//         left: 0;
//         pointer-events: none;
//         position: absolute;
//         width: 100%;

//         &:nth-child(1) {
//             top: 0;
//         }

//         &:nth-child(2) {
//             top: calc(50% - ${ values.lineHeightVal / 2 }px);
//         }

//         &:nth-child(3) {
//             bottom: 0;
//         }
//     }

//     &.is-active {
//         .burger__line {
//             transition: bottom .2s, opacity .2s, top .2s, transform .2s .2s;

//             &:nth-child(1) {
//                 top: calc(50% - ${ values.lineHeightVal / 2 }px);
//                 transform: rotate(45deg);
//             }

//             &:nth-child(2) {
//                 opacity: 0;
//             }

//             &:nth-child(3) {
//                 bottom: calc(50% - ${ values.lineHeightVal / 2 }px);
//                 transform: rotate(-45deg);
//             }
//         }
//     }
// }`,
//         }];

//         const currentValue = this.data.find(item => item.type === type.value);

//         return (
//             <div className="Page">
//                 <Header title="CSS Burger Generator" />

//                 <div className="Page-content-wrapper">
//                     <aside className="Page-sidebar">
//                         <section className="Section">
//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="width">Width</label>
//                                 <input type="number" id="width" maxLength="2" className="Input Section__field" min="1" max="99" value={ width } onChange={ e => this.setOption(e, 'width') }/>
//                             </div>

//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="height">Height</label>
//                                 <input type="number" id="height" maxLength="2" className="Input Section__field" min="1" max="99" value={ height } onChange={ e => this.setOption(e, 'height') }/>
//                             </div>
//                         </section>

//                         <section className="Section">
//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="line-height">Line height</label>
//                                 <input type="number" id="line-height" maxLength="2" className="Input Section__field" min="1" max="99" value={ lineHeight } onChange={ e => this.setOption(e, 'lineHeight') } />
//                             </div>

//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="padding">Padding</label>
//                                 <input type="number" id="padding" maxLength="2" className="Input Section__field" min="1" max="99" value={ padding } onChange={ e => this.setOption(e, 'padding') } />
//                             </div>
//                         </section>

//                         <section className="Section">
//                             <div className="Section__column">
//                                 <label htmlFor="color">Color</label>

//                                 <div className="Section__field">
//                                     <MaterialPicker
//                                         color={ color }
//                                         onChangeComplete={ this.changeColor }
//                                     />
//                                 </div>
//                             </div>
//                         </section>

//                         <section className="Section">
//                             <div className="Section__column">
//                                 <label htmlFor="type">Type</label>

//                                 <Select className="Custom-select" value={ type } options={ this.typeOptions } onChange={ this.changeType } />
//                             </div>
//                         </section>

//                         <section className="Section">
//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="scss">SCSS</label>
//                                 <div>
//                                     <input type="checkbox" id="scss" className="Section__field" value={ scss } onChange={ () => this.toggleOption('scss') } />
//                                 </div>
//                             </div>

//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="vars">Use vars</label>
//                                 <div>
//                                     <input type="checkbox" id="vars" className="Section__field" value={ vars } onChange={ () => this.toggleOption('vars') } />
//                                 </div>
//                             </div>
//                         </section>

//                         <section className="Section">
//                             <div className="Section__column Section__column_half">
//                                 <label htmlFor="jq">jQuery</label>
//                                 <div>
//                                     <input type="checkbox" id="jq" className="Section__field" value={ jq } onChange={ () => this.toggleOption('jq') } />
//                                 </div>
//                             </div>
//                         </section>
//                     </aside>

//                     <main className="Page-content">
//                         <div className="Page-content__inner">
//                             <Burger
//                                 color={ color }
//                                 height={ height }
//                                 type={ currentValue.css }
//                                 width={ width }
//                             />
//                         </div>

//                         <div className="Page-content__sections">
//                             <CodeSection title="HTML" code={ HTML } copyToClipboard={ this.copyToClipboard } />

//                             <CodeSection title="CSS" code={ currentValue[scss ? 'scss' : 'css'] } copyToClipboard={ this.copyToClipboard } />

//                             <CodeSection title="JavaScript" code={ jq ? JS.jq : JS.plain } copyToClipboard={ this.copyToClipboard } />
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         );
//     }
// }