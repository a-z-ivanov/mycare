import React from 'react';
import ReactDOM from 'react-dom';
import FilterList from './components/FilterList';

const jsx = <FilterList filters={[{ id: 'f1', text: 'agility' }, { id: 'f2', text: 'strenght' }]}></FilterList>;

ReactDOM.render(jsx, document.getElementById('app'));