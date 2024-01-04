import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import emojiList from './data/emojiList.json';
import { Emoji } from './types/type';

function App() {
	const [resultList, setResultList] = useState<Emoji[]>([]);
	const onSubmit = (text: string) => {
		const filteredItems = emojiList.filter((item: Emoji) =>
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
