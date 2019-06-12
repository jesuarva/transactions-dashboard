import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { fetchData } from '../../actions';
import styles from './styles';

/**
 * Object helper defining the query endpoints.
 */
const QUERIES_DETAILS = {
	action: {
		label: 'Transaction type',
		values: ['All', 'payment', 'credit'],
	},
	currencyCode: {
		label: 'Currency',
		values: ['All', 'EUR', 'JPY', 'USD'],
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
	const [isExpanded, setIsExpanded] = useState(setInitialState());
	const ref = useRef(setInitialState());

	function updateState(field, value) {
		setState({
			...state,
			[field]: value === 'All' ? '' : value,
		});
	}
	function togglePanel(field) {
		setIsExpanded({
			...isExpanded,
			[field]: !isExpanded[field],
		});
		controlFocus(field);
	}
	function controlFocus(field) {
		if (isExpanded[field]) {
			ref.current[field].querySelector('button').focus();
		} else {
			ref.current[field].querySelector('ul').focus();
		}
	}
	function handleOptionSelection(e, field) {
		const node = e.target;
		const isSelected = node.getAttribute('aria-selected');
		const value = node.id;
		requestAnimationFrame(() => {
			updateState(field, isSelected === 'true' ? 'All' : value);
			resetAllAriaSelected(field);
			node.setAttribute('aria-selected', isSelected === 'true' ? 'false' : 'true');
			togglePanel(field);
		});
	}
	function resetAllAriaSelected(field) {
		const options = ref.current[field].querySelectorAll('li');
		options.forEach(option => option.setAttribute('aria-selected', 'false'));
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
		setIsExpanded(setInitialState());
	}

	return (
		<div className={classes.root}>
			{Object.entries(QUERIES_DETAILS).map(([field, details]) => (
				<div key={field} className={classNames(classes.field, classes[field])}>
					<span id="dropDown_label" className={classes.hide}>
						{`Choose an element to filter ${details.label}:`}
					</span>
					<div
						ref={el => (ref.current[field] = el)}
						className={classNames(classes.dropDownWrapper, isExpanded[field] && classes.expanded)}
					>
						<button
							id="dropDown_button"
							className={classNames(
								classes.buttonCurrentSelection,
								isExpanded[field] && classes.expanded,
							)}
							onClick={() => togglePanel(field)}
							aria-haspopup="listbox"
							aria-labelledby="dropDown_label dropDown_button"
						>
							{state[field] || details.label}
						</button>
						<ul
							className={classNames(
								classes.dropDownList,
								isExpanded[field] ? classes.expanded : classes.collapsed,
							)}
							style={{ '--number-of-options': details.values.length }}
							onClick={e => handleOptionSelection(e, field)}
							onKeyPress={e => handleOptionSelection(e, field)}
							role="listbox"
							aria-labelledby="dropDown_label"
						>
							{details.values.map(option => (
								<li
									key={option}
									id={option}
									className={classes.dropDownItem}
									tabIndex={isExpanded[field] ? 0 : -1}
									role="option"
									aria-selected="false"
								>
									{option}
								</li>
							))}
						</ul>
					</div>
				</div>
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
