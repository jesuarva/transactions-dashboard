import { hidden } from 'ansi-colors';

const HIDE_STYLES = {
	position: 'absolute',
	top: '-500px',
	overflow: 'hidden',
};
const CELL_HEIGHT = {
	DESKTOP: '40px',
	TABLET: '20px',
	MOBILE: '20px',
};

export default theme => ({
	hide: HIDE_STYLES,
	collapsed: {},
	name: {},
	brand: {},
	last4Digits: {},
	transactionType: {},
	amount: {},
	currency: {},
	label: {},
	data: {},

	table: {
		'& [role="cell"], & [role="columnheader"]': {
			height: CELL_HEIGHT.DESKTOP,
		},
		'& [role="cell"], & [role="columnheader"], & $label, & $data': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},

	// TABLE-HEADERS STYLES
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

	// TABLE-BODY STYLES
	tableBody: {},
	tableBodyRow: {},
	topPanel: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		height: CELL_HEIGHT.DESKTOP,
		transition: 'height 200ms linear',
		overflow: 'hidden',
		'& [role="cell"]': {
			flex: '1 0 10%',
		},
		'& $label': {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			height: `calc(var(--topPanel-numberOfSubRowsTablet) * ${CELL_HEIGHT.DESKTOP})`,
			'&$collapsed': {
				height: CELL_HEIGHT.DESKTOP,
			},
			'& [role="cell"]': {
				flex: '1 0 23%',
			},
			'& $brand, & $last4Digits': {
				flex: '1 0 63%',
				order: 1,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				// height: 1,
				overflow: 'hidden',
				maxWidth: '80%',
			},
			'& $brand $label, & $last4Digits $label': {
				flex: '1 0 30%',
				display: 'flex',
				textAlign: 'left',
			},
			'& $brand $data, & $last4Digits $data': {
				flex: '1 0 60%',
				textAlign: 'left',
			},
		},
		[theme.breakpoints.down('xs')]: {
			height: `calc(var(--topPanel-numberOfSubRowsMobile) * ${CELL_HEIGHT.DESKTOP})`,
			'&$collapsed': {
				height: CELL_HEIGHT.DESKTOP,
			},
			'& [role="cell"]': {
				flex: '1 0 30%',
			},
			'& $brand, & $last4Digits, & $transactionType': {
				flex: '1 0 60%',
				order: 1,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				// height: 1,
				overflow: 'hidden',
				maxWidth: '80%',
			},
			'& $brand $label, & $last4Digits $label, & $transactionType $label': {
				flex: '1 0 30%',
				display: 'flex',
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
		height: `calc(var(--bottomPanel-numberOfChildrenCells) * ${CELL_HEIGHT.DESKTOP})`,
		transition: 'height 200ms linear',
		overflow: 'hidden',
		'&$collapsed': {
			height: '1px',
		},
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
			flexDirection: 'row',
			justifyContent: 'center',
		},
		'& $label': {
			flex: '1 0 30%',
			textAlign: 'left',
		},
		'& $data': {
			flex: '1 0 60%',
			textAlign: 'left',
		},
	},
});
