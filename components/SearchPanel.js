import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterList from './FilterList';
import experienceFilters from './ExperienceFilters';
import tasksFilters from './TasksFilters';
import Select from './Select';
import cities from './Cities';
import { toggleIsAdvancedSearch } from '../actions/search';

const SearchPanel = ({ isAdvanced, onAdvancedPress }) => <div>
	<label>Location</label>
	<Select options={cities}></Select>
	<label>Gender</label>
	<Select options={['male', 'female']}></Select>
	<button className={isAdvanced ? 'toggled' : undefined} onClick={onAdvancedPress}>Advanced</button>
	{isAdvanced ? <label>Experience</label> : undefined}
	{isAdvanced ? (
		<FilterList filters={experienceFilters}></FilterList>
	) : undefined}
	{isAdvanced ? <label>Tasks</label> : undefined}
	{isAdvanced ? (
		<FilterList filters={tasksFilters}></FilterList>
	) : undefined}
</div>;

SearchPanel.propTypes = {
	isAdvanced: PropTypes.bool,
	onAdvancedPress: PropTypes.func
};

const mapStateToProps = (state) => ({
	isAdvanced: state.search.isAdvanced
});

const mapDispatchToProps = (dispatch) => ({
	onAdvancedPress: () => dispatch(toggleIsAdvancedSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);