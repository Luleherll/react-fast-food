import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles.css';
import Routes from './routes';
import './static/materialize.min.css';
import './static/materialize.min';

ReactDOM.hydrate(<Routes />, document.getElementById('root'));
