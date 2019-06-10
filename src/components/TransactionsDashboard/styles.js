const HIDE_STYLES = {
	position: 'absolute',
	top: '-500px',
	overflow: 'hidden',
};

export default theme => ({
	hide: HIDE_STYLES,
	name: {},
	brand: {},
	last4Digits: {},
	transactionType: {},
	amount: {},
	currency: {},
	label: {
		display: 'none',
	},
	data: {},

	// TABLE HEADERS STYLES
	tableHeaders: {
		display: 'flex',
		'& [role="columnheader"]': {
			flex: '1 0 10%',
		},
		[theme.breakpoints.down('sm')]: {
			'& $name, & $amount, & $currency, & $transactionType': {
				flex: '1 0 23%',
			},
			'& $brand, & $last4Digits': {
				...HIDE_STYLES,
			},
		},
		[theme.breakpoints.down('xs')]: {
			'& $name, & $amount, & $currency': {
				flex: '1 0 30%',
			},
			'& $brand, & $last4Digits ,& $transactionType': {
				...HIDE_STYLES,
			},
		},
	},

	// TABLE BODY STYLES
	tableBody: {},
	tableBodyRow: {},
	topPanel: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		'& [role="cell"]': {
			flex: '1 0 10%',
		},
		[theme.breakpoints.down('sm')]: {
			'& [role="cell"]': {
				flex: '1 0 23%',
			},
			'& $brand, & $last4Digits': {
				flex: '1 0 63%',
				order: 1,
				display: 'flex',
				justifyContent: 'flex-start',
				// height: 1,
				overflow: 'hidden',
				maxWidth: '80%',
			},
			'& $brand $label, & $last4Digits $label': {
				flex: '1 0 30%',
				display: 'block',
				textAlign: 'left',
			},
			'& $brand $data, & $last4Digits $data': {
				flex: '1 0 60%',
				textAlign: 'left',
			},
		},
		[theme.breakpoints.down('xs')]: {
			'& [role="cell"]': {
				flex: '1 0 30%',
			},
			'& $brand, & $last4Digits, & $transactionType': {
				flex: '1 0 60%',
				order: 1,
				display: 'flex',
				justifyContent: 'flex-start',
				// height: 1,
				overflow: 'hidden',
				maxWidth: '80%',
			},
			'& $brand $label, & $last4Digits $label, & $transactionType $label': {
				flex: '1 0 30%',
				display: 'block',
				textAlign: 'left',
			},
			'& $brand $data, & $last4Digits $data, & $transactionType $data': {
				flex: '1 0 60%',
				textAlign: 'left',
			},
		},
	},

	bottomPanel: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		transition: 'height 400ms linear',
	},
	collapsed: {
		height: 1,
		overflow: 'hidden',
	},

	extraDetails: {
		flex: '1 0 40%',
		display: 'flex',
		justifyContent: 'flex-start',
		overflow: 'hidden',
		maxWidth: '45%',
		[theme.breakpoints.down('sm')]: {
			flex: '1 0 60%',
			display: 'flex',
			justifyContent: 'flex-start',
			overflow: 'hidden',
			maxWidth: '80%',
		},
		"&[role='cell']": {
			display: 'flex',
			justifyContent: 'center',
		},
		'& $label': {
			flex: '1 0 30%',
			display: 'block',
			textAlign: 'left',
		},
		'& $data': {
			flex: '1 0 60%',
			textAlign: 'left',
		},
	},
});
