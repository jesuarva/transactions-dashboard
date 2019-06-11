import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		secondary: {
			main: '#000',
		},
		cobalt: {
			main: '#213d8f',
		},
		avocado: {
			main: '#8ec03f',
		},
		topaz: {
			main: '#1db9de',
		},
		greyishBrown: {
			main: '#4a4a4a',
		},
		lightGreyBlue: {
			main: '#909ec7',
		},
		paleGrey: {
			main: '#f6f7fb',
		},
		paleGrey2: {
			main: '#e8ebf3',
		},
	},
	typography: {
		htmlFontSize: 10,
		useNextVariants: true,
		fontFamily: "'Source Sans Pro', sans-serif'",
	},
});
