import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { MuiThemeProvider } from '@material-ui/core/styles';
import mainReducer from './reducer';
import './styles/index.css';
import theme from './styles/theme.js';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(mainReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
