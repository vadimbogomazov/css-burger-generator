import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './code-section.scss';

const CodeSection = ({ title, code, copyToClipboard }) => {
    const [isCopied, toggleCopied] = useState(false);

    let timer = null;

    const handleCopy = (e) => {
        if (isCopied) {
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        navigator.clipboard.writeText(code.replace(/&lt;/g, "<").replace(/&gt;/g, ">"));

        toggleCopied(true);

        timer = setTimeout(() => {toggleCopied(false); console.log('pupa')}, 3000);
    }

    return (<section className="code-section">
        <h3 className="code-section__title">{ title }</h3>
        
        <pre className="code-section__code" dangerouslySetInnerHTML={{ __html: code }}></pre>

        <footer className="code-section__footer">
            <button type="button" className="btn code-section__btn" onClick={ handleCopy }>{ !isCopied ? `Copy ${ title }` : 'Copied' }</button>
        </footer>
    </section>)
};

CodeSection.propTypes = {
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export default CodeSection;
