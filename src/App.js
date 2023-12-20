import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';

function App() {
	return (
		<div className='App'>
			<h1>Emoji Search</h1>
			<SearchForm />
			<ResultList />
		</div>
	);
}

export default App;
