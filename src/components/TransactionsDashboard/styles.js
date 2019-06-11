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
	// HELPERS
	hide: HIDE_STYLES,
	collapsed: {},

	// COLUMN NAMES
	name: {},
	brand: {},
	last4Digits: {},
	transactionType: {},
	amount: {},
	currency: {},

	// TABLE-CELL HELPERS
	extraDetails: {},
	label: {},
	data: {},
	hr: {
		borderTop: `solid ${theme.palette.paleGrey2.main} 1px`,
		flex: '1 0 100%',
	},

	root: {
		padding: '50px 20px 100px',
		background: theme.palette.paleGrey2.main,
	},
	table: {
		'& [role="row"], & [role="row button"]': {
			padding: '0 1rem',
		},
		'& [role="cell"], & [role="columnheader"]': {
			height: CELL_HEIGHT.DESKTOP,
			textAlign: 'left',
			fontSize: '1rem',
			[theme.breakpoints.down('xs')]: {
				fontSize: '0.8rem',
			},
		},
		'& [role="columnheader"]': {
			color: theme.palette.cobalt.main,
			fontWeight: 600,
		},
		'& [role="cell"]': {
			color: theme.palette.greyishBrown.main,
			fontWeight: 400,
		},
		'& $label': {
			color: theme.palette.cobalt.main,
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
		background: theme.palette.primary.main,
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
	details: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		height: `calc(var(--topPanel-numberOfSubRowsDesktop) * ${CELL_HEIGHT.DESKTOP})`,
		transition: 'height 200ms linear',
		background: theme.palette.paleGrey.main,
		borderTop: `solid ${theme.palette.paleGrey2.main} 1px`,
		overflow: 'hidden',
		'&:focus': {
			outline: `solid ${theme.palette.topaz.main} 1.5px`,
		},
		'& [role="cell"]': {
			flex: '1 0 10%',
		},
		'& $label': {
			display: 'none',
		},
		'& $extraDetails': {
			flex: '1 0 50%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			overflow: 'hidden',
			maxWidth: '45%',
		},
		'& $brand, $last4Digits': {
			flex: '1 0 10%',
		},
		'& $extraDetails $label': {
			flex: '1 0 20%',
			display: 'flex',
			textAlign: 'left',
		},
		'& $brand $label, $last4Digits $label': {
			display: 'none',
		},
		'& $extraDetails $data': {
			flex: '1 0 69%',
			textAlign: 'left',
		},
		'&$collapsed': {
			height: CELL_HEIGHT.DESKTOP,
			background: theme.palette.primary.main,
		},
		[theme.breakpoints.down('sm')]: {
			height: `calc(var(--topPanel-numberOfSubRowsTablet) * ${CELL_HEIGHT.DESKTOP})`,
			'& [role="cell"]': {
				flex: '1 0 23%',
			},
			'& $extraDetails': {
				flex: '1 0 63%',
				order: 1,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				overflow: 'hidden',
				maxWidth: '80%',
			},
			'& $brand $label, $last4Digits $label': {
				flex: '1 0 20%',
				display: 'flex',
				textAlign: 'left',
			},
		},
		[theme.breakpoints.down('xs')]: {
			height: `calc(var(--topPanel-numberOfSubRowsMobile) * ${CELL_HEIGHT.DESKTOP})`,
			'& [role="cell"]': {
				flex: '1 0 30%',
			},
			'& $transactionType, & $extraDetails': {
				flex: '1 0 60%',
				order: 1,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				overflow: 'hidden',
				maxWidth: '85%',
			},
			'& $extraDetails $label, & $transactionType $label': {
				flex: '1 0 30%',
				display: 'flex',
				textAlign: 'left',
			},
			'& $extraDetails $data, & $transactionType $data': {
				flex: '1 0 55%',
				textAlign: 'left',
			},
		},
	},

	bottomPanel: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		height: `calc(var(--bottomPanel-numberOfChildrenCellsDesktop) * ${CELL_HEIGHT.DESKTOP})`,
		transition: 'height 200ms linear',
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			height: `calc(var(--bottomPanel-numberOfChildrenCellsTabletAndMobile) * ${CELL_HEIGHT.DESKTOP})`,
		},
		'&$collapsed': {
			height: '1px',
		},
	},
});
