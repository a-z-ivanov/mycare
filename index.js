import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

const store = configureStore();
const jsx = <Provider store={store}>
	<AppRouter></AppRouter>
</Provider>;

ReactDOM.render(jsx, document.getElementById('app'));