import React from 'react';
import PropTypes from 'prop-types';

import styles from './CodeSection.scss';

const CodeSection = ({ title, code }) => (
    <section className="Code-section">
        <h3 className="Code-section__title">{ title }</h3>
        <pre className="Code-section__code" dangerouslySetInnerHTML={{ __html: code }}></pre>

        <button>Copy { title }</button>
    </section>
);

CodeSection.propTypes = {
    title: PropTypes.string,
    code: PropTypes.string
};


export default CodeSection;