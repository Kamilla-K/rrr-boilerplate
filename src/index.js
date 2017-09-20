import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import configureStore from './config/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
