import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import './scss/index.scss';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>, document.getElementById('root')
);
