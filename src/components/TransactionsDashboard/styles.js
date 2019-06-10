const HIDE_STYLES = {
	position: 'absolute',
	top: '-500px',
	overflow: 'hidden',
};

export default theme => ({
	headers: {
		display: 'flex',
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
	name: {
		flex: '1 0 10%',
	},
	brand: {
		flex: '1 0 10%',
	},
	last4Digits: {
		flex: '1 0 10%',
	},
	transactionType: {
		flex: '1 0 10%',
	},
	amount: {
		flex: '1 0 10%',
	},
	currency: {
		flex: '1 0 10%',
	},
	hide: HIDE_STYLES,
	topPanel: {},
	expansionPanel: {
		transition: 'height 400ms linear',
	},
	collapsed: {
		height: 1,
		overflow: 'hidden',
	},

	extraDetails: {
		"&[role='cell']": {
			display: 'block',
			width: 'auto',
		},
		'&:before': {
			content: 'attr(data-column)',
		},
	},
});
