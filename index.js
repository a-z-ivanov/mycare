import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SearchPanel from './components/SearchPanel';

const store = configureStore();
const jsx = <Provider store={store}>
	<SearchPanel></SearchPanel>
</Provider>;

ReactDOM.render(jsx, document.getElementById('app'));