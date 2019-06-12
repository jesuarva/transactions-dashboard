export default theme => ({
	// HELPERS
	collapsed: {},
	expanded: {},
	hide: {
		position: 'absolute',
		top: '-500px',
		overflow: 'hidden',
	},

	action: {
		flex: '0 0 16%',
		[theme.breakpoints.down('sm')]: {
			flex: '0 0 28%',
		},
		[theme.breakpoints.down('xs')]: {
			flex: '0 0 40%',
		},
	},
	currencyCode: {
		flex: '0 0 10%',
		[theme.breakpoints.down('sm')]: {
			flex: '0 0 13%',
		},
		[theme.breakpoints.down('xs')]: {
			flex: '0 0 17%',
		},
	},
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		padding: '20px 0',
		'& $field, & $submit': {
			marginLeft: '15px',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '13px 0',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '10px 0',
		},
	},
	field: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		height: theme.cellHeight.DESKTOP,
	},
	dropDownWrapper: {
		flex: '1 0 100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		background: theme.palette.primary.main,
		border: `solid ${theme.palette.cobalt.main} 1px`,
		borderRadius: 3,
		'&$expanded': {
			border: `solid ${theme.palette.topaz.main} 1px`,
		},
	},
	buttonCurrentSelection: {
		height: theme.cellHeight.DESKTOP,
		width: '100%',
		padding: '0px 13px',
		color: theme.palette.cobalt.main,
		fontSize: '1rem',
		fontWeight: 600,
		textAlign: 'left',
		textTransform: 'capitalize',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75rem',
		},
		'&:focus': {
			background: theme.palette.paleGrey2.main,
		},
		'&$expanded:focus': {
			// border: 'none',
		},
	},
	dropDownList: {
		height: `calc(var(--number-of-options) * ${theme.cellHeight.DESKTOP})`,
		minWidth: '100%',
		margin: 0,
		padding: 0,
		overflow: 'hidden',
		transition: 'height 200ms linear',
		'&$collapsed': {
			height: '1px',
		},
	},
	dropDownItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: theme.cellHeight.DESKTOP,
		padding: '0px 13px',
		color: theme.palette.lightGreyBlue.main,
		fontSize: '1rem',
		fontWeight: 600,
		textAlign: 'left',
		textTransform: 'capitalize',
		transition: 'background 250ms ease-in-out',
		'&:focus': {
			border: 'none',
			outline: 'blue',
			background: theme.palette.paleGrey2.main,
		},
		'&[aria-selected="true"]': {
			background: theme.palette.paleGrey.main,
			color: theme.palette.cobalt.main,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75rem',
		},
	},
	submit: {
		flex: '0 0 auto',
		height: theme.cellHeight.DESKTOP,
		padding: '010px',
		color: theme.palette.primary.main,
		fontSize: '1rem',
		// background: theme.palette.avocado.main,
		borderRadius: 3,
		'&, &:focus, &:hover': {
			background: theme.palette.avocado.main,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75rem',
		},
	},
});
