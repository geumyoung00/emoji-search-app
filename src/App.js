import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import emojiList from './data/emojiList.json';

function App() {
	const [resultList, setResultList] = useState([]);
	const onSubmit = text => {
		const filteredItems = emojiList.filter(item =>
			item.keywords.split(' ').includes(text)
		);
		setResultList(filteredItems);
	};

	return (
		<div className='App'>
			<h1>Emoji Search</h1>
			<SearchForm onSubmit={onSubmit} />
			<ResultList resultList={resultList} />
		</div>
	);
}

export default App;
