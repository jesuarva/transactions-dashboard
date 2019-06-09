import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FECHED_DATA = 'FECHED_DATA';
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR';

const URL =
	process.env.REACT_APP_TRANSACTIONS_API ||
	'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions';

export function fetchData() {
	const fetch = axios.get(URL);
	return dispatch => {
		dispatch({ type: FETCHING_DATA });
		fetch
			.then(response => dispatch({ type: FECHED_DATA, data: response.data }))
			.catch(error => dispatch({ type: FETCHING_DATA_ERROR, error }));
	};
}
