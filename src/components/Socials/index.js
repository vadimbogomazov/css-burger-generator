import React from 'react';
import { VKIcon, FacebookIcon, TwitterIcon } from 'react-share';

import './Socials.scss';

const Socials = () => {
    const url = 'https://cssburgergenerator.com';
    return (
        <div className="Socials">
            <span className="Socials__label">Share:</span>
            <ul className="Socials__list">
                <li className="Socials__list-item">
                    <VKIcon url={ url } size={ 32 } round={ true }/>
                </li>
                <li className="Socials__list-item">
                    <FacebookIcon url={ url } size={ 32 } round={ true }/>
                </li>
                <li className="Socials__list-item">
                    <TwitterIcon url={ url } size={ 32 } round={ true }/>
                </li>
            </ul>
        </div>
    );
};

export default Socials;

