import React from 'react';
import './Footer.scss';

import Socials from '../Socials';

const Footer = props => (
    <footer className="Footer">
        <div className="Footer__item">
            Feedback: <a href="mailtto:vadimhabra@gmail.com">vadimhabra@gmail.com</a>
        </div>
        <div className="Footer__item">
            <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20cssburgergenerator.com&default-sum=50&button-text=13&yamoney-payment-type=on&button-size=s&button-color=black&successURL=cssburgergenerator.com&quickpay=small&account=410011118772650&" width="127" height="25" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>
        </div>
        <div className="Footer__item">
            <Socials />
        </div>        
    </footer>
);

export default Footer;