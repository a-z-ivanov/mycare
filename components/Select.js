import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options }) => <select>
	{options.map(city => <option key={city} value={city}>
		{city}
	</option>)}
</select>;

Select.propTypes = {
	options: PropTypes.array
};

export default Select;