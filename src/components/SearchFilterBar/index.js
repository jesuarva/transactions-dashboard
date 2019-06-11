import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { fetchData } from '../../actions';
import styles from './styles';

/**
 * Object defining the queries endpoints.
 */
const QUERIES_DETAILS = {
	action: {
		label: 'Transaction type',
		values: ['All', 'payment', 'credit'],
	},
	currencyCode: {
		label: 'Currency',
		values: ['All', 'ERU', 'JPY', 'USD'],
	},
};
function setInitialState() {
	return Object.keys(QUERIES_DETAILS).reduce((state, key) => {
		state[key] = '';
		return state;
	}, {});
}

function SearchFilterBar({ fetchData, classes }) {
	const [state, setState] = useState(setInitialState());
	function handleChange(field) {
		return e => {
			setState({
				...state,
				[field]: e.target.value === 'All' ? '' : e.target.value,
			});
		};
	}
	function onSubmit() {
		const queries = [];
		let queryString = null;
		for (let field in state) {
			if (state[field] !== '') {
				queries.push(`${field}=${state[field]}`);
			}
		}
		if (queries.length) {
			queryString = queries.join('&');
		}

		fetchData(queryString);
		setState(setInitialState());
	}

	console.log(state);
	return (
		<div>
			{Object.entries(QUERIES_DETAILS).map(([field, details]) => (
				<FormControl key={field} variant="outlined" className={classes.formControl}>
					<InputLabel htmlFor={`${field}-dropDown`}>{details.label}</InputLabel>
					<Select
						value={state[field]}
						onChange={handleChange(field)}
						input={
							<OutlinedInput /*labelWidth={labelWidth}*/ name={field} id={`${field}-dropDown`} />
						}
					>
						{details.values.map(option => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			))}
			<button className={classes.submit} onClick={onSubmit}>
				{'Search'}
			</button>
		</div>
	);
}

SearchFilterBar.propTypes = {
	classes: PropTypes.object.isRequired,
	fetchData: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(SearchFilterBar);

export default connect(
	() => ({}),
	{ fetchData },
)(styledComponent);
