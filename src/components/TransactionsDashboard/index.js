import React, { useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import './transactionsDashboard.css';
import styles from './styles';

function togglePanel(panel) {
	console.log(panel);
	// requestAnimationFrame(() => (panel.style.height = 'auto'));
}

function TransactionsDashboard({ data, cardBrand, classes }) {
	console.log(classes);
	const rowRefs = useRef(Array(data.length).fill(createRef()));
	// useEffect(() => {
	// 	rowRefs.current = Array(data.length).fill(createRef());
	// }, [data.length]);

	return (
		<Paper className={classes.root}>
			<div role="table" aria-label="Transactions" aria-describedby="transactions_table_description">
				<h2 className={classes.hide} id="transactions_table_description">
					List of transations for the current loged user.
				</h2>
				<div role="rowgroup">
					<div role="row">
						<span role="columnheader">Name</span>
						<span role="columnheader">Brand</span>
						<span role="columnheader">Last 4 digits</span>
						<span role="columnheader">Transaction type</span>
						<span role="columnheader">Amount</span>
						<span role="columnheader">Currency</span>
						<span className={classes.hide} role="columnheader">
							ID
						</span>
						<span className={classes.hide} role="columnheader">
							Tracking code
						</span>
						<span className={classes.hide} role="columnheader">
							Brand ID
						</span>
						<span className={classes.hide} role="columnheader">
							First 6 digits
						</span>
						<span className={classes.hide} role="columnheader">
							Expiry month
						</span>
						<span className={classes.hide} role="columnheader">
							Expiry year
						</span>
					</div>
				</div>
				<div role="rowgroup">
					{data.map((transaction, index) => {
						return (
							<div
								ref={rowRefs.current[index]}
								// ref={node => {
								// 	console.log(node);
								// 	rowRefs.current[index] = node;
								// }}
								role="row"
							>
								<div
									className={classes.visiblePanel}
									role="button"
									onClick={() => togglePanel(rowRefs.current[index])}
									// onClick={() => togglePanel(index)}
									onKeyPress={() => togglePanel(rowRefs.current[index])}
									tabIndex={0}
								>
									<span role="cell" className={classes.holderName}>
										{transaction.card.holderName}
									</span>
									<span role="cell" className={classes.brandId}>
										{cardBrand[transaction.brandId]}
									</span>
									<span role="cell" className={classes.lastFourDigits}>
										{transaction.card.lastFourDigits}
									</span>
									<span role="cell" className={classes.action}>
										{transaction.action}
									</span>
									<span role="cell" className={classes.amount}>
										{transaction.amount}
									</span>
									<span role="cell" className={classes.currencyCode}>
										{transaction.currencyCode}
									</span>
								</div>
								<div className={classes.expansionPanel}>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="ID">
											{transaction.id}
										</div>
									</div>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="First 6 Digits">
											{transaction.card.firstSixDigits}
										</div>
									</div>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="Tracking code">
											{transaction.trackingCode}
										</div>
									</div>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="Expiry month">
											{transaction.card.expiryMonth}
										</div>
									</div>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="Brand ID">
											{transaction.brandId}
										</div>
									</div>
									<div>
										<div role="cell" className={classes.extraDetails} data-column="Expiry year">
											{transaction.card.expiryYear}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Paper>
	);
}

TransactionsDashboard.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			action: PropTypes.string,
			amount: PropTypes.number,
			brandId: PropTypes.number,
			card: PropTypes.shape({
				expiryMonth: PropTypes.string,
				expiryYear: PropTypes.string,
				firstSixDigits: PropTypes.string,
				holderName: PropTypes.string,
				lastFourDigits: PropTypes.string,
			}),
			currencyCode: PropTypes.string,
			id: PropTypes.string,
			trackingCode: PropTypes.string,
		}),
	),
	cardBrand: PropTypes.object,
	classes: PropTypes.object,
};

const styledComponent = withStyles(styles)(TransactionsDashboard);

export default connect(
	({ data, cardBrand }) => ({ data, cardBrand }),
	{},
)(styledComponent);
