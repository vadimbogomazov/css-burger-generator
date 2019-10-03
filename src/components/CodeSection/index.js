import React from 'react';
import PropTypes from 'prop-types';

const CodeSection = ({ title, code }) => (
    <section className="page-content__section">
        <h3 className="page-content__section-title">{ title }</h3>
        <pre dangerouslySetInnerHTML={{ __html: code }}>
        </pre>
    </section>
);

CodeSection.propTypes = {
  title: PropTypes.string
};


export default CodeSection;