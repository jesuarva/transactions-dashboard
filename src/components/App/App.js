import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import TransactionsDashboard from '../TransactionsDashboard';
import './App.css';

function App(props) {
	const { fetchData } = props;
	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<div className="App" test="hola">
			<header className="App-header">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{'Payvision'}
				</a>
			</header>
			<main>
				<TransactionsDashboard></TransactionsDashboard>
			</main>
		</div>
	);
}

export default connect(
	() => ({}),
	{ fetchData },
)(App);
