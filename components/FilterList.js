import React from 'react';
import PropTypes from 'prop-types';

const FilterList = ({ filters }) => (
	<div>
		{filters.map(f =>
			<div key={f.id}>
				<input type="checkbox" id={f.id} />
				<label htmlFor={f.id}>{f.text}</label>
			</div>
		)}
	</div>
);

FilterList.propTypes = {
	filters: PropTypes.array
};

export default FilterList;