export default {
	visiblePanel: {},
	hide: {
		position: 'absolute',
		top: '-500px',
		overflow: 'hidden',
	},
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
};
