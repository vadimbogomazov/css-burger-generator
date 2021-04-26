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
    --burger-color: %%color%%;
    --burger-height: %%height%%px;
    --burger-lineheight: %%lineHeight%%px;
    --burger-padding: %%padding%%px;
    --burger-width: %%width%%px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: var(--burger-padding);
}

.burger.is-active .burger__line {
    transition: bottom 0.2s, opacity 0.2s, top 0.2s, transform 0.2s 0.2s;
}

.burger.is-active .burger__line:nth-child(1) {
    top: calc(50% - var(--burger-lineheight) / 2);
    transform: rotate(45deg);
}

.burger.is-active .burger__line:nth-child(2) {
    opacity: 0;
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: calc(50% - var(--burger-lineheight) / 2);
    transform: rotate(-45deg);
}

.burger__inner {
    display: block;
    height: var(--burger-height);
    pointer-events: none;
    position: relative;
    width: var(--burger-width);
}

.burger__line {
    background: var(--burger-color);
    height: var(--burger-lineheight);
    left: 0;
    pointer-events: none;
    position: absolute;
    transition: bottom 0.2s 0.2s, opacity 0.2s 0.2s, top 0.2s 0.2s, transform 0.2s;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - var(--burger-lineheight) / 2);
}

.burger__line:nth-child(3) {
    bottom: 0;
}`,
    scss: `.burger {
    $self: &;

    $burger-color: #000;
    $burger-height: 24px;
    $burger-lineheight: 2px;
    $burger-padding: 12px;
    $burger-width: 40px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: $burger-padding;

    &.is-active {
        #{$self}__line {
            transition: bottom 0.2s, opacity 0.2s, top 0.2s, transform 0.2s 0.2s;

            &:nth-child(1) {
                top: calc(50% - #{$burger-lineheight} / 2);
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                bottom: calc(50% - #{$burger-lineheight} / 2);
                transform: rotate(-45deg);
            }
        }
    }
    
    &__inner {
        display: block;
        height: $burger-height;
        pointer-events: none;
        position: relative;
        width: $burger-width;
    }

    &__line {
        background: #000;
        height: $burger-lineheight;
        left: 0;
        pointer-events: none;
        position: absolute;
        transition: bottom 0.2s 0.2s, opacity 0.2s 0.2s, top 0.2s 0.2s, transform 0.2s;
        width: 100%;

        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - #{$burger-lineheight} / 2);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }
}`
},
{
    type: 'Arrow',
    css: `.burger {
    --burger-color: %%color%%;
    --burger-height: %%height%%px;
    --burger-lineheight: %%lineHeight%%px;
    --burger-padding: %%padding%%px;
    --burger-width: %%width%%px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: var(--burger-padding);
}

.burger.is-active .burger__line:nth-child(1) {
    margin-top: calc(var(--burger-lineheight) / -2);
    top: 50%;
    transform: rotate(-45deg) scale(0.7);
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: 50%;
    margin-bottom: calc(var(--burger-lineheight) / -2);
    transform: rotate(45deg) scale(0.7);
}

.burger__inner {
    display: block;
    height: var(--burger-height);
    pointer-events: none;
    position: relative;
    width: var(--burger-width);
}

.burger__line {
    background: var(--burger-color);
    height: var(--burger-lineheight);
    left: 0;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 0;
    transition: bottom 0.2s, top 0.2s, transform 0.2s;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - var(--burger-lineheight) / 2);
}

.burger__line:nth-child(3) {
    bottom: 0;
}`,
scss: `.burger {
    $self: &;

    $burger-color: #000;
    $burger-height: 24px;
    $burger-lineheight: 2px;
    $burger-padding: 12px;
    $burger-width: 40px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: $burger-padding;

    &.is-active {
        #{$self}__line:nth-child(1) {
            margin-top: calc(#{$burger-lineheight} / -2);
            top: 50%;
            transform: rotate(-45deg) scale(0.7);
        }

        #{$self}__line:nth-child(3) {
            bottom: 50%;
            margin-bottom: calc(#{$burger-lineheight} / -2);
            transform: rotate(45deg) scale(0.7);
        }
    }

    &__inner {
        display: block;
        height: $burger-height;
        pointer-events: none;
        position: relative;
        width: $burger-width;
    }

    &__line {
        background: $burger-color;
        height: $burger-lineheight;
        left: 0;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 0;
        transition: bottom 0.2s, top 0.2s, transform 0.2s;
        width: 100%;

        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - #{$burger-lineheight} / 2);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }
}`
},
{
    type: 'Minus',
    css: `.burger {
    --burger-color: %%color%%;
    --burger-height: %%height%%px;
    --burger-lineheight: %%lineHeight%%px;
    --burger-padding: %%padding%%px;
    --burger-width: %%width%%px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: var(--burger-padding);
}

.burger.is-active .burger__line:nth-child(1) {
    transform: translateY(calc(var(--burger-height) / 2 - var(--burger-lineheight) / 2));
}

.burger.is-active .burger__line:nth-child(3) {
   transform: translateY(calc(-1 * var(--burger-height) / 2 + var(--burger-lineheight) / 2));
}

.burger__inner {
    display: block;
    height: var(--burger-height);
    pointer-events: none;
    position: relative;
    width: var(--burger-width);
}

.burger__line {
    background: var(--burger-color);
    height: var(--burger-lineheight);
    left: 0;
    pointer-events: none;
    position: absolute;
    transition: transform 0.2s;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - var(--burger-lineheight) / 2);
}

.burger__line:nth-child(3) {
    bottom: 0;
}`,
    scss: `.burger {
    $self: &;

    $burger-color: #000;
    $burger-height: 24px;
    $burger-lineheight: 2px;
    $burger-padding: 12px;
    $burger-width: 40px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: $burger-padding;

    &.is-active {
        #{$self}__line {
            &:nth-child(1) {
                transform: translateY(calc(#{$burger-height} / 2 - #{$burger-lineheight} / 2));
            }

            &:nth-child(3) {
                transform: translateY(calc(#{$burger-height} / -2 + #{$burger-lineheight} / 2));
            }
        }
    }
    
    &__inner {
        display: block;
        height: $burger-height;
        pointer-events: none;
        position: relative;
        width: $burger-width;
    }

    &__line {
        background: #000;
        height: $burger-lineheight;
        left: 0;
        pointer-events: none;
        position: absolute;
        transition: bottom 0.2s 0.2s, opacity 0.2s 0.2s, top 0.2s 0.2s, transform 0.2s,;
        width: 100%;

        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - #{$burger-lineheight} / 2);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }
}`
},
{
    type: 'Simple',
    css: `.burger {
    --burger-color: %%color%%;
    --burger-height: %%height%%px;
    --burger-lineheight: %%lineHeight%%px;
    --burger-padding: %%padding%%px;
    --burger-width: %%width%%px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: var(--burger-padding);
}

.burger.is-active .burger__line:nth-child(1) {
    top: calc(50% - var(--burger-lineheight) / 2);
    transform: rotate(45deg);
}

.burger.is-active .burger__line:nth-child(2) {
    opacity: 0;
}

.burger.is-active .burger__line:nth-child(3) {
    bottom: calc(50% - var(--burger-lineheight) / 2);
    transform: rotate(-45deg);
}

.burger__inner {
    display: block;
    height: var(--burger-height);
    pointer-events: none;
    position: relative;
    width: var(--burger-width);
}

.burger__line {
    background: var(--burger-color);
    height: var(--burger-lineheight);
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

.burger__line:nth-child(1) {
    top: 0;
}

.burger__line:nth-child(2) {
    top: calc(50% - var(--burger-lineheight) / 2);
}

.burger__line:nth-child(3) {
    bottom: 0;
}`,
scss: `.burger {
    $self: &;  

    $burger-color: #000;
    $burger-height: 24px;
    $burger-lineheight: 2px;
    $burger-padding: 12px;
    $burger-width: 40px;

    background: #e1e1ff;
    cursor: pointer;
    display: inline-block;
    padding: $burger-padding;

    &.is-active {
        #{$self}__line {
            &:nth-child(1) {
                top: calc(50% - #{$burger-lineheight} / 2);
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                bottom: calc(50% - #{$burger-lineheight} / 2);
                transform: rotate(-45deg);
            }
        }
    }

    &__inner {
        display: block;
        height: $burger-height;
        pointer-events: none;
        position: relative;
        width: $burger-width;
    }

    &__line {
        background: $burger-color;
        height: $burger-lineheight;
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 100%;
        
        &:nth-child(1) {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - #{$burger-lineheight} / 2);
        }

        &:nth-child(3) {
            bottom: 0;
        }
    }
}`,
}
];