import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles.css';
import Routes from './routes';
import './static/materialize.min.css';
import './static/materialize.min';
import '../node_modules/izitoast/dist/css/iziToast.min.css';
import '../node_modules/izitoast/dist/js/iziToast.min.js';

ReactDOM.hydrate(<Routes />, document.getElementById('root'));
