import { combineReducers } from 'redux';

const experience = (state = [], action) => {
	switch (action.type) {
	case 'SEARCH_SELECT_EXPERIENCE':
		return state.map((field) => {
			if (field.id === action.id) {
				return { ...field, selected: action.selected };
			} else {
				return field;
			}
		});
	default:
		return state;
	}
};

const isAdvancedReducer = (state = false, action) => {
	switch (action.type) {
	case 'SEARCH_TOGGLE_IS_ADVANCED':
		return !state;
	default:
		return state;
	}
};

export default combineReducers({
	isAdvanced: isAdvancedReducer,
	experience
});