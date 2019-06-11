import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

function TransactionsDashboard({ data, cardBrand, classes }) {
	const [expandedPanels, setExpandedPanels] = useState(Array(data.length).fill(false));
	const rowRefs = useRef([]);
	function updatePanels(index) {
		expandedPanels.splice(index, 1, !expandedPanels[index]);
		setExpandedPanels([...expandedPanels]);
		if (expandedPanels[index]) {
		}
	}
	function handleClick(index) {
		updatePanels(index);
	}
	function handleKeyPress(event, index) {
		event.key === 'Enter' && updatePanels(index);
	}

	return (
		<section
			className={classes.root}
			role="contentinfo"
			aria-label="This is the transactions dashboard"
		>
			<div
				role="table"
				className={classes.table}
				aria-label="Transactions"
				aria-describedby="transactions_table_description"
			>
				<h2 className={classes.hide} id="transactions_table_description">
					List of transations for the current loged user.
				</h2>
				<div role="rowgroup">
					<div role="row" className={classes.tableHeaders}>
						<div role="columnheader" className={classes.name}>
							{'Name'}
						</div>
						<div role="columnheader" className={classes.brand}>
							{'Brand'}
						</div>
						<div role="columnheader" className={classes.last4Digits}>
							{'Last 4 digits'}
						</div>
						<div role="columnheader" className={classes.transactionType}>
							{'Transaction type'}
						</div>
						<div role="columnheader" className={classes.amount}>
							{'Amount'}
						</div>
						<div role="columnheader" className={classes.currency}>
							{'Currency'}
						</div>

						<div role="columnheader" className={classes.hide}>
							{'ID'}
						</div>
						<div role="columnheader" className={classes.hide}>
							{'Tracking code'}
						</div>
						<div role="columnheader" className={classes.hide}>
							{'Brand ID'}
						</div>
						<div role="columnheader" className={classes.hide}>
							{'First 6 digits'}
						</div>
						<div role="columnheader" className={classes.hide}>
							{'Expiry month'}
						</div>
						<div role="columnheader" className={classes.hide}>
							{'Expiry year'}
						</div>
					</div>
				</div>
				<div role="rowgroup" className={classes.tableBody}>
					{data.map((transaction, i) => {
						const index = i;
						return (
							<div
								role="row button"
								key={transaction.id}
								id={transaction.id}
								ref={el => (rowRefs.current[index] = el)}
								tabIndex={0}
								className={classNames(classes.details, expandedPanels[index] || classes.collapsed)}
								style={{
									'--topPanel-numberOfSubRowsDesktop': 4,
									'--topPanel-numberOfSubRowsTablet': 9,
									'--topPanel-numberOfSubRowsMobile': 10,
								}}
								onClick={() => handleClick(index)}
								onKeyPress={e => handleKeyPress(e, index)}
							>
								<div role="cell" className={classes.name}>
									{transaction.card.holderName}
								</div>
								<div role="cell" className={classNames(classes.extraDetails, classes.brand)}>
									<div aria-hidden="true" className={classes.label}>
										{'Brand:'}
									</div>
									<div className={classes.data}>{cardBrand[transaction.brandId]}</div>
								</div>
								<div role="cell" className={classNames(classes.extraDetails, classes.last4Digits)}>
									<div aria-hidden="true" className={classes.label}>
										{'Last 4 digits:'}
									</div>
									<div className={classes.data}>{`XXXX ${transaction.card.lastFourDigits}`}</div>
								</div>
								<div role="cell" className={classes.transactionType}>
									<div aria-hidden="true" className={classes.label}>
										{'Transaction type:'}
									</div>
									<div className={classes.data}>{transaction.action}</div>
								</div>
								<div role="cell" className={classes.amount}>
									{transaction.amount}
								</div>
								<div role="cell" className={classes.currency}>
									{transaction.currencyCode}
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'ID:'}
									</div>
									<div className={classes.data}>{transaction.id}</div>
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'First 6 Digits:'}
									</div>
									<div className={classes.data}>{`${transaction.card.firstSixDigits} XXXX`}</div>
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'Tracking code:'}
									</div>
									<div className={classes.data}>{transaction.trackingCode}</div>
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'Expiry month:'}
									</div>
									<div className={classes.data}>{transaction.card.expiryMonth}</div>
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'Brand ID:'}
									</div>
									<div className={classes.data}>{transaction.brandId}</div>
								</div>
								<div role="cell" className={classes.extraDetails}>
									<div aria-hidden="true" className={classes.label}>
										{'Expiry year:'}
									</div>
									<div className={classes.data}>{transaction.card.expiryYear}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
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
