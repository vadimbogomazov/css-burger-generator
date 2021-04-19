// Burger markup
export const HTML = `&lt;button type="button" class="burger js-burger"&gt;
    &lt;span class="burger__inner"&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
        &lt;span class="burger__line"&gt;&lt;/span&gt;
    &lt;/span&gt;
&lt;/button&gt;`;

// Burger JS
export const JS = {
    plain: `document.querySelector('.js-burger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});`,
    jQ: `$('.js-burger').on('click', function() {
    $(this).toggleClass('is-active');
});`
};

// Burger Styles
export const CSS = [{
    type: 'Squeeze',
    css: `.burger {
    cursor: pointer;
    display: inline-block;
    padding: %%padding%%px;
}

.burger__inner {
    display: block;
    height: %%height%%px;
    pointer-events: none;
    position: relative;
    width: %%width%%px;
}

.burger__line {
    background: %%color%%;
    border-radius: 3px;
    height: %%lineHeight%%px;
    left: 0;
    pointer-events: none;
    position: absolute;
    transition: transform 0.2s, top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.2s;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - %%lineHeight%%px / 2);
}

.burger__line:nth-child(3) {
    bottom: 0;
}

.burger.is-active .burger__line {
    transition: transform 0.2s 0.2s, top 0.2s, bottom 0.2s, opacity 0.2s;
}

.burger.is-active .burger__line:nth-child(1) {
    top: calc(50% - %%lineHeight%%px / 2);
    transform: rotate(45deg);
}

.burger.is-active .burger__line:nth-child(2) {
    opacity: 0;
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: calc(50% - %%lineHeight%%px / 2);
    transform: rotate(-45deg);
}`,

    scss: `.burger {
    $self: &;

    cursor: pointer;
    display: inline-block;
    padding: %%padding%%px;
    
    &__inner {
        display: block;
        height: %%height%%px;
        pointer-events: none;
        position: relative;
        width: %%width%%px;
    }

    &__line {
        background: %%color%%;
        border-radius: 3px;
        height: %%lineHeight%%px;
        left: 0;
        pointer-events: none;
        position: absolute;
        transition: transform 0.2s, top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.2s;
        width: 100%;

        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - %%lineHeight%%px / 2);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }

    &.is-active {
        #{$self}__line {
            transition: transform 0.2s 0.2s, top 0.2s, bottom 0.2s, opacity 0.2s;

            &:nth-child(1) {
                top: calc(50% - %%lineHeight%%px / 2);
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                bottom: calc(50% - %%lineHeight%%px / 2);
                transform: rotate(-45deg);
            }
        }
    }
}`
}];

//     {
//         type: 'Squeeze',
//         css: `.burger {
//             cursor: pointer;\ndisplay: inline-block;\npadding: %padding%px;
//         }

//         .burger__inner {
//             display: block;
//             height: %height%px;
//             pointer-events: none;
//             position: relative;
//             width: %width%px;
//         }

//         .burger__line {
//             background: %color%;
//             border-radius: 3px;
//             height: %lineHeight%px;
//             left: 0;
//             pointer-events: none;
//             position: absolute;
//             transition: transform .2s, top .2s .2s, bottom .2s .2s, opacity .2s .2s;
//             width: 100%;
//         }

//         .burger__line:nth-child(1) {
//             top: 0;
//         }

//         .burger__line:nth-child(2) {
//             top: calc(50% - %lineHeight / 2%px);
//         }

//         .burger__line:nth-child(3) {
//             bottom: 0;
//         }

//         .burger.is-active .burger__line {
//             transition: transform .2s .2s, top .2s, bottom .2s, opacity .2s;
//         }

//         .burger.is-active .burger__line:nth-child(1) {
//             top: calc(50% - %lineHeight / 2%px);
//             transform: rotate(45deg);
//         }

//         .burger.is-active .burger__line:nth-child(2) {
//             opacity: 0;
//         }

//         .burger.is-active .burger__line:nth-child(3) {
//             bottom: calc(50% - ${ lineHeight / 2 }px);
//             transform: rotate(-45deg);
//         }`,
//     }
// ];
    
//         this.data = [
//             {
//                 type: 'Squeeze',
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