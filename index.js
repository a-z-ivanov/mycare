import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/SearchPanel';

let isAdvanced = false;
const onAdvancedPress = () => {
	isAdvanced = !isAdvanced;
	render();
};
const render = () => {
	const jsx = <SearchPanel isAdvanced={isAdvanced} onAdvancedPress={onAdvancedPress}></SearchPanel>;
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();