import { FECHED_DATA, FETCHING_DATA, FETCHING_DATA_ERROR } from '../actions';

const initialState = {
	data: null,
	cardBrand: {
		'1060': 'Diners Club',
		'1020': 'Visa',
		'1010': 'MasterCard',
	},
	fetchingData: false,
	error: null,
};

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_DATA:
			return { ...state, fetchingData: true };
		case FECHED_DATA:
			return { ...state, fetchingData: false, data: action.data };
		case FETCHING_DATA_ERROR:
			return { ...state, fetchingData: true, error: action.error };
		default:
			return state;
	}
}
