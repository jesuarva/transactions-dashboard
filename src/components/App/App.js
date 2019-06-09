import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import TransactionsDashboard from '../TransactionsDashboard';
import './App.css';

function App(props) {
	const { fetchData } = props;
	useEffect(() => {
		// fetchData();
	}, [fetchData]);
	return (
		<div className="App" test="hola">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<TransactionsDashboard></TransactionsDashboard>
		</div>
	);
}

export default connect(
	() => ({}),
	{ fetchData },
)(App);
