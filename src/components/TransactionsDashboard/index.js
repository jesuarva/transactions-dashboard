import React, { useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
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
					<div role="row" className={classes.tableHeaders}>
						<span role="columnheader" className={classes.name}>
							Name
						</span>
						<span role="columnheader" className={classes.brand}>
							Brand
						</span>
						<span role="columnheader" className={classes.last4Digits}>
							Last 4 digits
						</span>
						<span role="columnheader" className={classes.transactionType}>
							Transaction type
						</span>
						<span role="columnheader" className={classes.amount}>
							Amount
						</span>
						<span role="columnheader" className={classes.currency}>
							Currency
						</span>

						<span role="columnheader" className={classes.hide}>
							ID
						</span>
						<span role="columnheader" className={classes.hide}>
							Tracking code
						</span>
						<span role="columnheader" className={classes.hide}>
							Brand ID
						</span>
						<span role="columnheader" className={classes.hide}>
							First 6 digits
						</span>
						<span role="columnheader" className={classes.hide}>
							Expiry month
						</span>
						<span role="columnheader" className={classes.hide}>
							Expiry year
						</span>
					</div>
				</div>
				<div role="rowgroup" className={classes.tableBody}>
					{data.map((transaction, index) => {
						return (
							<div
								key={transaction.id}
								ref={rowRefs.current[index]}
								// ref={node => {
								// 	console.log(node);
								// 	rowRefs.current[index] = node;
								// }}
								className={classes.tableBodyRow}
								role="row"
							>
								<div
									className={classes.topPanel}
									role="button"
									onClick={() => togglePanel(rowRefs.current[index])}
									// onClick={() => togglePanel(index)}
									onKeyPress={() => togglePanel(rowRefs.current[index])}
									tabIndex={0}
								>
									<div role="cell" className={classes.name}>
										{transaction.card.holderName}
									</div>
									<div role="cell" className={classes.brand}>
										<div aria-hidden="true" className={classes.label}>
											{'Brand'}
										</div>
										<span className={classes.data}>{cardBrand[transaction.brandId]}</span>
									</div>
									<div role="cell" className={classes.last4Digits}>
										<span aria-hidden="true" className={classes.label}>
											{'Last 4 digits'}
										</span>
										<span className={classes.data}>{transaction.card.lastFourDigits}</span>
									</div>
									<div role="cell" className={classes.transactionType}>
										<span aria-hidden="true" className={classes.label}>
											{'Transaction type'}
										</span>
										<span className={classes.data}>{transaction.action}</span>
									</div>
									<div role="cell" className={classes.amount}>
										{transaction.amount}
									</div>
									<div role="cell" className={classes.currency}>
										{transaction.currencyCode}
									</div>
								</div>
								<div className={classes.bottomPanel}>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'ID'}
										</span>
										<span className={classes.data}>{transaction.id}</span>
									</div>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'First 6 Digits'}
										</span>
										<span className={classes.data}>{transaction.card.firstSixDigits}</span>
									</div>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'Tracking code'}
										</span>
										<span className={classes.data}>{transaction.trackingCode}</span>
									</div>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'Expiry month'}
										</span>
										<span className={classes.data}>{transaction.card.expiryMonth}</span>
									</div>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'Brand ID'}
										</span>
										<span className={classes.data}>{transaction.brandId}</span>
									</div>
									<div role="cell" className={classes.extraDetails}>
										<span aria-hidden="true" className={classes.label}>
											{'Expiry year'}
										</span>
										<span className={classes.data}>{transaction.card.expiryYear}</span>
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
