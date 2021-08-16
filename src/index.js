import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'normalize.css';
import './styles.scss';

// navigator.serviceWorker.register('./serviceWorker.js').then(function(registration) {
//     console.log('Service worker registered.');
// });

ReactDOM.render(<App />, document.getElementById('root'));
